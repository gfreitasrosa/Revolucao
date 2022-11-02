sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("revolucao.controller.Main", {
            onInit: function () {

            },

            onPressBuscar: function(){
                alert('Começou a revolução do SAP Fiori!');
            }
        });
    });
