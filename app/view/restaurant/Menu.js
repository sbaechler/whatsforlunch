Ext.define('Whatsforlunch.view.restaurant.Menu', {

	extend: 'Ext.Container',
	xtype: 'restaurantMenu',

    config: {
        cls: 'restaurantMenu',
        scrollable: 'vertical',
        styleHtmlContent: true,
        tpl: '<div class="restaurant_menu">Restaurant Menu</div>'
    }

});