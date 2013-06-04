Ext.define('Whatsforlunch.view.restaurant.Carousel', {
    extend: 'Ext.Container',
    xtype: 'imagecarousel',


    requires: [
        'Ext.carousel.Carousel'
    ],

    config: {
        cls: 'cards',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: { flex: 1 },

        items: [{
            html: '<p>Swipe left to show the next card&hellip;</p>',
            cls: 'card'
        },
        {
            html: '<p>You can also tap on either side of the indicators.</p>',
            cls: 'card'
        },
        {
            html: 'Card #3',
            cls: 'card'
        }]
    }
});