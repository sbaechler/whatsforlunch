Ext.define('Whatsforlunch.view.restaurant.Info', {

	extend: 'Ext.Container',
	xtype: 'restaurantInfo',

    config: {
        cls: 'restaurantInfo',
        scrollable: 'vertical',
        styleHtmlContent: true,
        tpl: [
            '<div class="restaurant_info"><h2>{premium}</h2>',
            '<p>{address}, Tel: <a href="tel:{phone}"> {phone}</a></p>',
            '{seo_text}</div>',
            ''].join("")
    }

});