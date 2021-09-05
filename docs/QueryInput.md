# SingleStoreClient.QueryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql** | **String** | The SQL statement to execute. | 
**args** | [**[QueryInputArg]**](QueryInputArg.md) | If specified: A list of arguments to be used in the SQL statement. The command uses question marks (?) for placeholders, which will be replaced by the specified arguments during execution. The command must have exactly as many placeholders as arguments, or the request will fail.  If not specified: The query will be run as-is | [optional] 
**database** | **String** | If specified: The database on which the SQL statement must be executed.  | [optional] 


