import { ControllerSpec } from '../controller-spec';
/**
 * Decorate the given Controller constructor with metadata describing
 * the HTTP/REST API the Controller implements/provides.
 *
 * `@api` can be applied to controller classes.
 *
 * @example
 *
 * ```ts
 * @api({basePath: '/my'})
 * class MyController {
 *   // ...
 * }
 * ```
 *
 * @param spec - OpenAPI specification describing the endpoints
 * handled by this controller
 *
 */
export declare function api(spec: Partial<ControllerSpec>): ClassDecorator;
