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

import ApiClient from '../ApiClient';
import RowValue from './RowValue';

/**
 * The ResultSet model module.
 * @module SingleStore/Client/ResultSet
 * @version 2.0.0
 */
class ResultSet {
    /**
     * Constructs a new <code>ResultSet</code>.
     * An object describing a single result set.
     * @alias module:SingleStore/Client/ResultSet
     */
    constructor() { 
        
        ResultSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:SingleStore/Client/ResultSet} obj Optional instance to populate.
     * @return {module:SingleStore/Client/ResultSet} The populated <code>ResultSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultSet();

            if (data.hasOwnProperty('rows')) {
                obj['rows'] = ApiClient.convertToType(data['rows'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object.<String, module:SingleStore/Client/RowValue>>} rows
 */
ResultSet.prototype['rows'] = undefined;






export default ResultSet;

