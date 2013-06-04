Ext.define('Whatsforlunch.view.restaurant.List', {
    extend: 'Ext.List',
    //requires: 'Ext.SegmentedButton',

    xtype: 'restaurantlist',

    config: {
        scrollable: true,
        title: "Restaurants in deiner Nähe",
        items: [
            {
                xtype: 'list',
                store: 'restaurantStore',
                itemTpl: '<div class="restaurant"><strong>{real_name}</strong> {address}</div>'
            }
        ]
    },

	initialize: function() {
		this.callParent();
	}
});
