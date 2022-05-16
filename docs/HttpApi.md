# SingleStoreClient.HttpApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exec**](HttpApi.md#exec) | **POST** /api/v2/exec | Exec
[**ping**](HttpApi.md#ping) | **GET** /ping | Ping
[**rows**](HttpApi.md#rows) | **POST** /api/v2/query/rows | Query
[**spec**](HttpApi.md#spec) | **GET** /api/v2/spec | Spec
[**tuples**](HttpApi.md#tuples) | **POST** /api/v2/query/tuples | Query



## exec

> ExecOutput exec(opts)

Exec

Executes a SQL statement without returning result sets; typically used for executing DDL and DML statements for which result sets are not expected, such as CREATE TABLE and INSERT statements.

### Example

```javascript
import SingleStoreClient from '@singlestore/http-client';
let defaultClient = SingleStoreClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SingleStoreClient.HttpApi();
let opts = {
  'execInput': new SingleStoreClient.ExecInput() // ExecInput | The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
};
apiInstance.exec(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execInput** | [**ExecInput**](ExecInput.md)| The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue. | [optional] 

### Return type

[**ExecOutput**](ExecOutput.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ping

> String ping()

Ping

Verifies that the HTTP service is running and connectable.  Note: To verify that the database can receive queries or check specific health metrics, use the /exec and /query endpoints.

### Example

```javascript
import SingleStoreClient from '@singlestore/http-client';
let defaultClient = SingleStoreClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SingleStoreClient.HttpApi();
apiInstance.ping().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## rows

> QueryOutput rows(opts)

Query

Executes a SQL statement and returns result sets; typically used for the SELECT statement for which result sets are expected. The result sets contain column names mapped to row values in a single field.

### Example

```javascript
import SingleStoreClient from '@singlestore/http-client';
let defaultClient = SingleStoreClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SingleStoreClient.HttpApi();
let opts = {
  'queryInput': new SingleStoreClient.QueryInput() // QueryInput | The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
};
apiInstance.rows(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryInput** | [**QueryInput**](QueryInput.md)| The request should include a JSON payload in the HTTP POST body. The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue. | [optional] 

### Return type

[**QueryOutput**](QueryOutput.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## spec

> String spec()

Spec

Returns the OpenAPI specification for this service.

### Example

```javascript
import SingleStoreClient from '@singlestore/http-client';
let defaultClient = SingleStoreClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SingleStoreClient.HttpApi();
apiInstance.spec().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## tuples

> StreamOutput tuples(opts)

Query

Executes a SQL statement and returns result sets along with the schema; typically used for the SELECT statement for which result sets are expected. The result sets contain rows and columns in separate fields with the schema displayed for each column.

### Example

```javascript
import SingleStoreClient from '@singlestore/http-client';
let defaultClient = SingleStoreClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new SingleStoreClient.HttpApi();
let opts = {
  'queryInput': new SingleStoreClient.QueryInput() // QueryInput | The request should include a JSON payload in the HTTP POST body.  The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue.
};
apiInstance.tuples(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryInput** | [**QueryInput**](QueryInput.md)| The request should include a JSON payload in the HTTP POST body.  The payload must match the following specification precisely, invalid payloads will raise a validation error describing the issue. | [optional] 

### Return type

[**StreamOutput**](StreamOutput.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

