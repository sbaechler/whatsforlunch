Ext.define('Whatsforlunch.view.restaurant.Menu', {

	extend: 'Ext.List',
	xtype: 'restaurantMenu',

    config: {
        cls: 'restaurantMenu',
        scrollable: 'vertical',
        styleHtmlContent: true,
        itemTpl: '<div class="menu-item category-{category}">' +
                   '<p style="float:right">{price}</p><span style="clear:both"></span>' +
                   '<h3>{title}</h3>' +
                   '<p class="capfirst menu-description">{line2} {line3}</p>' +
                '</div>'
    }

});