// Model.js
// -----------------------
// @module Case
define("ERPBuddies.MultipleShipping.MultipleShipping.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/MultipleShipping/SuiteScript2/MultipleShipping.Service.ss"
            ),
            true
        )
});
});
