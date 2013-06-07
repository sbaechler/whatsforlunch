Ext.define('Whatsforlunch.view.restaurant.Detail', {

    extend: 'Ext.TabPanel',
    requires: ['Whatsforlunch.view.restaurant.Profile',
               'Whatsforlunch.view.restaurant.Menu'],


    xtype: 'restaurantDetail',

    config: {

        iconCls: 'locate',
        defaults: {
            styleHtmlContent: true
        },
        tabBar: {
            layout: {
                pack: 'center'
            }
        },
        title: '',
        fullscreen: true,

        items: [
            {
                xtype: 'restaurantProfile',
                title: 'Infos'
            }
        ]
    }
});
