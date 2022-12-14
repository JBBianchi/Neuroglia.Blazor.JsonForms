import Ajv from 'ajv';
import { JsonFormsState } from '../store';
import { JsonSchema, UISchemaElement } from '../models';
import { JsonFormsDefaultDataRegistryEntry } from './default-data';
import { JsonFormsRendererRegistryEntry } from './renderers';
import { JsonFormsCellRendererRegistryEntry } from './cells';
import { JsonFormsUISchemaRegistryEntry } from './uischemas';
export declare const getData: (state: JsonFormsState) => any;
export declare const getSchema: (state: JsonFormsState) => JsonSchema;
export declare const getUiSchema: (state: JsonFormsState) => UISchemaElement;
export declare const getAjv: (state: JsonFormsState) => Ajv;
export declare const getDefaultData: (state: JsonFormsState) => JsonFormsDefaultDataRegistryEntry[];
export declare const getRenderers: (state: JsonFormsState) => JsonFormsRendererRegistryEntry[];
export declare const getCells: (state: JsonFormsState) => JsonFormsCellRendererRegistryEntry[];
export declare const getUISchemas: (state: JsonFormsState) => JsonFormsUISchemaRegistryEntry[];
