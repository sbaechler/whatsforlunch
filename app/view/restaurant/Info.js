Ext.define('Whatsforlunch.view.restaurant.Info', {

	extend: 'Ext.Container',
	xtype: 'restaurantInfo',

    config: {
        cls: 'restaurantInfo',
        //scrollable: 'vertical',
        styleHtmlContent: true,
        tpl: [
            '<div class="restaurant_info">',
            '<p>{address}, Tel: <a href="tel:{phone}"</a></p>',
            '{seo_text}</div>',
            ''].join("")
    }

});