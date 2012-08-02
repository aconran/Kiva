/*
 * File: app/view/LoansListItem.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kiva.view.LoansListItem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.loanslistitem',

    requires: [
        'Kiva.view.override.LoansListItem'
    ],

    config: {
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName) {
        if (newName){
            this.add(newName);
        }
    },

    applyUse: function(config) {
        return Ext.factory(config, Ext.Component, this.getUse());
    },

    updateUse: function(newUse) {
        if (newUse) {
            this.add(newUse);
        }
    },

    applyAvatar: function(config) {
        return Ext.factory(config, Ext.Img, this.getAvatar());
    },

    updateAvatar: function(newAvatar) {
        if (newAvatar) {
            this.add(newAvatar);
        }
    },

    applyCompletion: function(config) {
        return Ext.factory(config, Kiva.view.LoansListItemCompletion, this.getCompletion());
    },

    updateCompletion: function(newCompletion) {
        if (newCompletion) {
            this.add(newCompletion);
        }
    }

});