Ext.define('Whatsforlunch.view.restaurant.List', {
    extend: 'Ext.List',
    requires: 'Ext.SegmentedButton',

    xtype: 'restaurantlist',

    config: {
        scrollable: true,
        items: [
            {
                xtype: 'panel',
                id: 'Ajax',
                ui: 'gray',
                styleHtmlContent: true
            },
            {
                xtype: 'list',
                title: 'List',
                store: 'restaurantStore',
                itemTpl: '<div class="contact2"><strong>{real_name}</strong> {address}</div>'
            }
        ]
    }
});
