"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHasManyThroughRepositoryFactory = void 0;
const has_many_through_helpers_1 = require("./has-many-through.helpers");
const has_many_through_repository_1 = require("./has-many-through.repository");
function createHasManyThroughRepositoryFactory(relationMetadata, targetRepositoryGetter, throughRepositoryGetter) {
    const meta = has_many_through_helpers_1.resolveHasManyThroughMetadata(relationMetadata);
    const result = function (fkValue) {
        function getTargetConstraintFromThroughModels(throughInstances) {
            return has_many_through_helpers_1.createTargetConstraintFromThrough(meta, throughInstances);
        }
        function getTargetKeys(throughInstances) {
            return has_many_through_helpers_1.getTargetKeysFromThroughModels(meta, throughInstances);
        }
        function getThroughConstraintFromSource() {
            const constraint = has_many_through_helpers_1.createThroughConstraintFromSource(meta, fkValue);
            return constraint;
        }
        function getTargetIds(targetInstances) {
            return has_many_through_helpers_1.getTargetIdsFromTargetModels(meta, targetInstances);
        }
        function getThroughConstraintFromTarget(fkValues) {
            const constraint = has_many_through_helpers_1.createThroughConstraintFromTarget(meta, fkValues);
            return constraint;
        }
        return new has_many_through_repository_1.DefaultHasManyThroughRepository(targetRepositoryGetter, throughRepositoryGetter, getTargetConstraintFromThroughModels, getTargetKeys, getThroughConstraintFromSource, getTargetIds, getThroughConstraintFromTarget);
    };
    return result;
}
exports.createHasManyThroughRepositoryFactory = createHasManyThroughRepositoryFactory;
//# sourceMappingURL=has-many-through-repository.factory.js.map