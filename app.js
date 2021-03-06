/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Whatsforlunch': 'app'
});
//</debug>

Ext.application({
    name: 'Whatsforlunch',
    title: "What's for lunch?",

    mapCenter: [47.3760303, 8.5263574],

    requires: [
        'Ext.util.Geolocation',
        'Ext.MessageBox',
        'Ext.data.Store',
        'Ext.data.TreeStore',
        'Whatsforlunch.reader.Lunchgate',
        'Ext.Map'
    ],

    models:[
        'Restaurant',
        'RestaurantProfile'
    ],

    views: [
        'Main',
        'restaurant.Card',
        'restaurant.List',
        'restaurant.Profile',
        'restaurant.Carousel',
        'restaurant.Detail',
        'restaurant.Menu',
        'restaurant.Info'
    ],

    controllers: [
        'Restaurants'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: false,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    init_geo : function(){ this.geo = Ext.create('Ext.util.Geolocation', {
        autoUpdate: false,
        listeners: {
            locationupdate: function(geo) {
                var mainView = Ext.create('Whatsforlunch.view.restaurant.Card');
                var store = mainView.items.items[0].getStore();
                store.getProxy().setExtraParams(
                    { lat: geo.getLatitude(), lon: geo.getLongitude(),
                      distance: "1500" }
                );
                store.load();

                // Destroy the #appLoadingIndicator element
                Ext.fly('appLoadingIndicator').destroy();
                // Initialize the main view
                Ext.Viewport.add(mainView);
            },
            locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                if(bTimeout){
                    alert('Timeout occurred.');
                } else {
                    alert('Error occurred.');
                }
            }
        }
    })},

    launch: function() {
        this.init_geo();
        this.geo.updateLocation();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
