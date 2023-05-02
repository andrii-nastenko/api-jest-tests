import SwaggerParser from '@apidevtools/swagger-parser';
import Ajv from 'ajv';

/** Downloads and parses schema */
export function downloadSchema(
  url: string
): ReturnType<typeof SwaggerParser.dereference> {
  return SwaggerParser.dereference(url);
}

/**
 * Get schema for particular endpoint by its relative path, method and status code
 * @param {Object.<string, any>} schema Swagger parsed schema
 * @param {string} path Relative endpoint path
 * @param {string} method REST API methods, such as 'get', 'post', 'put, 'delete
 * @param {number} statusCode Expected status code, such as 200, 201 and others
 * @returns {Object.<string, any>} Returns schema object for requested endpoint
 */
export function getEndpointSchema(
  schema: Awaited<ReturnType<typeof SwaggerParser.dereference>>,
  path: string,
  method: string,
  statusCode: number
): Record<string, any> {
  const paths = schema.paths as Record<string, any>;
  return paths[path][method].responses[statusCode].schema;
}

/** Check if endpoint response matches provided schema */
export function validateResponse(
  endpointSchema: Record<string, any>,
  endpointResponse: any
): boolean {
  const ajv = new Ajv({
    strict: false,
    allErrors: true,
    formats: {
      int64: /^\d+$/,
    },
  });
  const validate = ajv.compile(endpointSchema);
  return validate(endpointResponse);
}
