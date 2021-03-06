/**
 * SingleStore HTTP API Spec
 * This API allows you to execute SQL statements against a SingleStore database.  It supports all statements that can be run in a direct database connection, and uses conventional data type conversion.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ExecInput from '../Client/ExecInput';
import ExecOutput from '../Client/ExecOutput';
import QueryInput from '../Client/QueryInput';
import QueryOutput from '../Client/QueryOutput';
import StreamOutput from '../Client/StreamOutput';

/**
* Http service.
* @module SingleStore/Client/HttpApi
* @version 2.0.0
*/
export default class HttpApi {

    /**
    * Constructs a new HttpApi. 
    * @alias module:SingleStore/Client/HttpApi
    * @class
    * @param {module:SingleStore/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:SingleStore/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Exec
     * Executes a SQL statement without returning result sets; typically used for executing DDL and DML statements for which result sets are not expected, such as CREATE TABLE and INSERT statements.
     * @param {Object} opts Optional parameters
     * @param {module:SingleStore/Client/ExecInput} opts.execInput The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SingleStore/Client/ExecOutput} and HTTP response
     */
    execWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['execInput'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ExecOutput;
      return this.apiClient.callApi(
        '/api/v2/exec', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Exec
     * Executes a SQL statement without returning result sets; typically used for executing DDL and DML statements for which result sets are not expected, such as CREATE TABLE and INSERT statements.
     * @param {Object} opts Optional parameters
     * @param {module:SingleStore/Client/ExecInput} opts.execInput The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SingleStore/Client/ExecOutput}
     */
    exec(opts) {
      return this.execWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Ping
     * Verifies that the HTTP service is running and connectable.  Note: To verify that the database can receive queries or check specific health metrics, use the /exec and /query endpoints.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    pingWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/ping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Ping
     * Verifies that the HTTP service is running and connectable.  Note: To verify that the database can receive queries or check specific health metrics, use the /exec and /query endpoints.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    ping() {
      return this.pingWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query
     * Executes a SQL statement and returns result sets; typically used for the SELECT statement for which result sets are expected. The result sets contain column names mapped to row values in a single field.
     * @param {Object} opts Optional parameters
     * @param {module:SingleStore/Client/QueryInput} opts.queryInput The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SingleStore/Client/QueryOutput} and HTTP response
     */
    rowsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['queryInput'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = QueryOutput;
      return this.apiClient.callApi(
        '/api/v2/query/rows', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query
     * Executes a SQL statement and returns result sets; typically used for the SELECT statement for which result sets are expected. The result sets contain column names mapped to row values in a single field.
     * @param {Object} opts Optional parameters
     * @param {module:SingleStore/Client/QueryInput} opts.queryInput The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SingleStore/Client/QueryOutput}
     */
    rows(opts) {
      return this.rowsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Spec
     * Returns the OpenAPI specification for this service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    specWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v2/spec', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Spec
     * Returns the OpenAPI specification for this service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    spec() {
      return this.specWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query
     * Executes a SQL statement and returns result sets along with the schema; typically used for the SELECT statement for which result sets are expected. The result sets contain rows and columns in separate fields with the schema displayed for each column.
     * @param {Object} opts Optional parameters
     * @param {module:SingleStore/Client/QueryInput} opts.queryInput The request should include a JSON payload in the HTTP POST body.  The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:SingleStore/Client/StreamOutput} and HTTP response
     */
    tuplesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['queryInput'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StreamOutput;
      return this.apiClient.callApi(
        '/api/v2/query/tuples', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query
     * Executes a SQL statement and returns result sets along with the schema; typically used for the SELECT statement for which result sets are expected. The result sets contain rows and columns in separate fields with the schema displayed for each column.
     * @param {Object} opts Optional parameters
     * @param {module:SingleStore/Client/QueryInput} opts.queryInput The request should include a JSON payload in the HTTP POST body.  The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:SingleStore/Client/StreamOutput}
     */
    tuples(opts) {
      return this.tuplesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
