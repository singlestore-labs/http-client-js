// This example runs on Node.js, and assumes that @singlestore/http-client
// has been published to an accessible registry.  It creates an HTTP server
// and whenever the baseURL is hit, it sends a few database queries to the 
// SingleStore database using a JavaScript wrapper around the SingleStore
// REST API.  HTML content is returned, and status is written to the console.
//
// Here is one way to run these examples:  
//
//     - Ensure that the "npm" and "node" programs are installed locally.
//
//     - In this file, update the S2USER and S2PASS constants with an 
//       appropriate username and password for your SingleStore database.
//       Also, ensure that S2PROXY points to the host and port of the 
//       SingleStore HTTP Proxy.
//
//     - Run:
//           npm install @singlestore/http-client --save
//
//     - Run:
//           npm run build
//
//     - Start a Node.js server with this example:
//
//           node example.js
//
//       By default, the server will run on localhost:8081.  If you need to 
//       use a different host or port for the Node.js server, be sure to 
//       update the "nodeHost" and/or "nodePort" constants below.
//
//     - In your browser, go to "localhost:8081" (or substitute with your 
//       custom values for "nodeHost"/"nodePort").
//

const http = require('http');

const nodeHost = '127.0.0.1';
const nodePort = 8081;

const server = http.createServer(async function(req, res) {
    console.log("Handling request...");

    ///////////////////////////////////////////////////////////////////////////
    //
    // BASIC EXAMPLE
    //
    // This will get you started.
    //
    ///////////////////////////////////////////////////////////////////////////

    const S2USER  = 'root';
    const S2PASS  = '';
    const S2PROXY = 'localhost:8080';
    
    var SingleStoreClient = require('@singlestore/http-client');
    var instance = SingleStoreClient.ApiClient.instance;

    // Configure HTTP basic authorization: BasicAuth
    var BasicAuth = instance.authentications['BasicAuth'];
    BasicAuth.username = S2USER;
    BasicAuth.password = S2PASS;

    // Set the SingleStore proxy's host and port.
    instance.basePath = 'http://' + S2PROXY;
    console.log("Using SingleStore Proxy on " + instance.basePath);

    // Get the API handle.
    var api = new SingleStoreClient.HttpApi();

    // Issue request in a promise.  We'll start by using a synchronous pattern 
    // while we ping the server and create the data, then switch to the
    // asynchronous pattern while we query it.
    console.log("Executing queries...");

    // This is where we'll populate the page content.
    content = '';

    // Endpoint: /ping
    content += '<b><h2>/ping</h2></b>';
    await api.ping()
        .then((result) => {
            content += '<tt>' + result.toString() + '</tt><br>';
        }, 
        (err) => {
            console.log(err);
            content += "ERROR: " + err.status;
        });
    content += '<hr>';

    ///////////////////////////////////////////////////////////////////////////
    //
    // EXTENDED EXAMPLE
    //
    // The following builds on above to illustrate other API calls and usage.
    //
    ///////////////////////////////////////////////////////////////////////////

    // Endpoint: /api/v1/spec
    content += '<b><h2>/api/v1/spec</h2></b>';
    await api.spec()
        .then((result) => {
            content += '<tt>' + result.toString() + '</tt><br>';
        },
        (err) => {
            console.log(err);
            content += "ERROR: " + err.status;
        });
    content += '<hr>';

    // Endpoint: /api/v1/exec
    content += '<b><h2>/api/v1/exec</h2></b>';

    // Here's one way to initialize a query's parameters -- pass the SQL 
    // into the constructor of the input object.
    execParms_createDB = {
        execInput: 
            new SingleStoreClient.ExecInput(
                'CREATE DATABASE IF NOT EXISTS jstest;')
    };
    await api.exec(execParms_createDB)
        .then((result) => {
            content += '<i>createDB</i>:<br><tt>'  + JSON.stringify(result) + '</tt><br><br>';
        },
        (err) => {
            console.log(err);
            content += "ERROR: " + err.status;
        });

    // In this query, we'll provide a database to the query as well.  Since 
    // this query uses multiple fields in the input object, we'll initialize
    // using the dictionary form instead of the simple constructor above.
    execParms_createTbl = {
        execInput: {
            database: 'jstest',
            sql: 'CREATE TABLE IF NOT EXISTS jstable('   +
                    'id INT AUTO_INCREMENT PRIMARY KEY,' +
                    'label VARCHAR(100),'                +
                    'create_time DATETIME,'              +
                    'extra_data JSON);'
        }
    };
    await api.exec(execParms_createTbl)
        .then((result) => {
            content += '<i>createTbl</i>:<br><tt>' + JSON.stringify(result) + '</tt><br><br>';
        },
        (err) => {
            console.log(err);
            content += "ERROR: " + err.status;
        });

    // Similar in form to the previous query, this one utilizes the "args" 
    // parameter to match the corresponding '?' symbols in the SQL query.  The
    // first replacement is with random string is passed in for the "label" 
    // column.  The second illustrates passing an arbitrary JSON object to
    // to the "extra_data" column, which is of JSON type.
    label = Math.random().toString(36).replace(/[^a-z]+/g, '');
    extra = { 
        names: [ 'Fred', 'Bob', 'Jane' ], 
        address: { city: 'Raleigh', state: 'NC' } 
    };
    execParms_insertTbl = {
        execInput: {
            database: 'jstest',
            sql: 'INSERT INTO jstable (label, create_time, extra_data) VALUES (?, NOW(), ?);',
            args: [ label, extra ]
        }
    };
    await api.exec(execParms_insertTbl)
        .then((result) => {
            content += '<i>insertTbl</i>:<br><tt>' + JSON.stringify(result) + '</tt><br><br>';
        },
        (err) => {
            console.log(err);
            content += "ERROR: " + err.status;
        });
    content += '<hr>';

    // Now we will issue some asynchronous queries for the row we just 
    // inserted, using the "args" to pass the label.  Both the "rows" and 
    // the "tuples" endpoint will use the same input.  Since we'll be
    // running all the requests at once, we'll first build all the queries.
    
    // Select the row we inserted.
    queryParms_selectOne = {
        queryInput: {
            database: 'jstest',
            sql: 'SELECT * FROM jstable WHERE label=?;',
            args: [ label ]
        }
    };

    // Issue a similar query, but for all rows.
    queryParms_selectAll = {
        queryInput: {
            database: 'jstest',
            sql: 'SELECT * FROM jstable;',
        }
    };

    // Now we'll asynchronously perform a few selects using the "rows" and
    // "tuples" forms.
    await Promise
    .all([ 
        // Endpoint: /api/v1/rows
        api.rows(queryParms_selectOne),
        api.rows(queryParms_selectAll),

        // Endpoint: /api/v1/tuples
        api.tuples(queryParms_selectOne),
        api.tuples(queryParms_selectAll),
    ])
    .then((result) => {
        // Resolve /api/v1/rows.
        content += '<b><h2>/api/v1/rows</h2></b>';
        content += '<i>selectOne</i>:<br><tt>' + JSON.stringify(result[0]) + '</tt><br><br>';
        content += '<i>selectAll</i>:<br><tt>' + JSON.stringify(result[1]) + '</tt><br><br>';
        content += '<hr>';

        // Resolve /api/v1/tuples.
        content += '<b><h2>/api/v1/tuples</h2></b>';
        content += '<i>selectOne</i>:<br><tt>' + JSON.stringify(result[2]) + '</tt><br><br>';
        content += '<i>selectAll</i>:<br><tt>' + JSON.stringify(result[3]) + '</tt><br><br>';
    })
    .catch((error) => {
        console.log(error);
        content += "ERROR: " + err.status;
    });

    // Complete the response.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
    console.log("Request processed.");
});

server.listen(nodePort, nodeHost, () => {
    console.log(`Server running at http://${nodeHost}:${nodePort}/`);
});

