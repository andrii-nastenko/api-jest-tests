import SwaggerParser from '@apidevtools/swagger-parser';
import Ajv from 'ajv';

/** Downloads and parses schema */
export function downloadSchema(
  url: string
): ReturnType<typeof SwaggerParser.dereference> {
  return SwaggerParser.dereference(url);
}

/** Returns schema for particular endpoint by its relative path, method and status code */
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
