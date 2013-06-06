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
                scrollable: true,
                store: 'restaurantStore',
                itemTpl: ['<div class="restaurant"><h3>{real_name} &nbsp;<small>{address}</small></h3>',
                          '</div>']
            }
        ]
    },

	initialize: function() {
		this.callParent();
	}
});
