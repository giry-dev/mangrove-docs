"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractsInScope = void 0;
const utils_1 = require("solidity-ast/utils");
const map_values_1 = require("./map-values");
function getContractsInScope(item) {
    const cache = new WeakMap();
    return (0, map_values_1.mapValues)(run(item.__item_context.file), fn => fn());
    function run(file, aliasedImport = false) {
        var _a, _b;
        if (cache.has(file)) {
            return cache.get(file);
        }
        const scope = {};
        cache.set(file, scope);
        for (const c of (0, utils_1.findAll)('ContractDefinition', file)) {
            scope[c.name] = () => c;
        }
        for (const i of (0, utils_1.findAll)('ImportDirective', file)) {
            const importedFile = item.__item_context.build.deref('SourceUnit', i.sourceUnit);
            const importedScope = run(importedFile, aliasedImport || i.symbolAliases.length > 0);
            if (i.symbolAliases.length === 0) {
                Object.assign(scope, importedScope);
            }
            else {
                for (const a of i.symbolAliases) {
                    // Delayed function call supports circular dependencies
                    scope[(_a = a.local) !== null && _a !== void 0 ? _a : a.foreign.name] = (_b = importedScope[a.foreign.name]) !== null && _b !== void 0 ? _b : (() => { 
                        return importedScope[a.foreign.name] ? importedScope[a.foreign.name]() : undefined;
                     });
                }
            }
        }
        ;
        return scope;
    }
}
exports.getContractsInScope = getContractsInScope;
//# sourceMappingURL=scope.js.map