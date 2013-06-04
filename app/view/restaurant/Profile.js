Ext.define('Whatsforlunch.view.restaurant.Profile', {
    extend: 'Ext.Container',

    xtype: 'restaurantprofile',

    config: {
        layout: 'vbox',
        title: '',


        items: [
            {
                flex: 1,
                id: 'RestaurantProfileHead',
                layout: 'fit',
                scrollable: 'vertical',
                styleHtmlContent: true,
                store: 'restaurantProfileStore',
                xtype: 'dataview',
                itemTpl: '<div class="restaurant_profile">Restaurant {real_name} Profile Item {phone} {seo_text}</div>'
            },
            {
                flex: 1,
                id: 'RestaurantProfileMenu',
                layout: 'fit',
                scrollable: 'vertical',
                styleHtmlContent: true,
                store: 'restaurantProfileStore',
                xtype: 'dataview',
                itemTpl: '<div class="restaurant_profile">Restaurant {real_name} Profile Item {phone} {seo_text}</div>'
            }

        ]
    }
});
