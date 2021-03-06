export * from './api.decorator';
export * from './deprecated.decorator';
export * from './operation.decorator';
export * from './parameter.decorator';
export * from './request-body.decorator';
import { api } from './api.decorator';
import { deprecated } from './deprecated.decorator';
import { del, get, operation, patch, post, put } from './operation.decorator';
import { param } from './parameter.decorator';
import { requestBody } from './request-body.decorator';
import { response } from './response.decorator';
import { tags } from './tags.decorator';
export declare const oas: {
    api: typeof api;
    operation: typeof operation;
    get: typeof get;
    post: typeof post;
    del: typeof del;
    patch: typeof patch;
    put: typeof put;
    param: typeof param;
    requestBody: typeof requestBody;
    deprecated: typeof deprecated;
    response: typeof response;
    tags: typeof tags;
};
