/**
 * SingleStore HTTP API Spec
 * This API allows you to execute SQL statements against a SingleStore database.  It supports all statements that can be run in a direct database connection, and uses conventional data type conversion.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import QueryOutputError from './QueryOutputError';
import ResultSet from './ResultSet';

/**
 * The QueryOutput model module.
 * @module SingleStore/Client/QueryOutput
 * @version 1.0.0
 */
class QueryOutput {
    /**
     * Constructs a new <code>QueryOutput</code>.
     * @alias module:SingleStore/Client/QueryOutput
     */
    constructor() { 
        
        QueryOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QueryOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:SingleStore/Client/QueryOutput} obj Optional instance to populate.
     * @return {module:SingleStore/Client/QueryOutput} The populated <code>QueryOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryOutput();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ResultSet]);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = QueryOutputError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * An array of objects describing each result set.
 * @member {Array.<module:SingleStore/Client/ResultSet>} results
 */
QueryOutput.prototype['results'] = undefined;

/**
 * @member {module:SingleStore/Client/QueryOutputError} error
 */
QueryOutput.prototype['error'] = undefined;






export default QueryOutput;
