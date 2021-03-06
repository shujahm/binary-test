"use strict";
// Copyright IBM Corp. 2017,2020. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountSchema = void 0;
/**
 * JSON Schema describing the Count interface. It's the response type for
 * REST calls to APIs which return Count
 */
exports.CountSchema = {
    type: 'object',
    title: 'loopback.Count',
    'x-typescript-type': '@loopback/repository#Count',
    properties: { count: { type: 'number' } },
};
//# sourceMappingURL=common-types.js.map