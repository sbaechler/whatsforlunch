Ext.define('Whatsforlunch.view.restaurant.Profile', {
    extend: 'Ext.Container',

    xtype: 'restaurantprofile',

    config: {
        layout: 'vbox',
        title: '',

        items: [
            {
                flex: 1,
                layout: 'fit',
                scrollable: 'vertical',
                xtype: 'panel',
                store: 'restaurantProfiles',
                itemTpl: '<div class="restaurant_profile">Restaurant {real_name} Profil</div>'
            }
        ]
    }
});

