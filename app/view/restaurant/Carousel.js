Ext.define('Whatsforlunch.view.restaurant.Carousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'imagecarousel',


    requires: [
        'Ext.carousel.Carousel',
        'Ext.Img'
    ],

    config: {
        cls: 'imagecarousel',
        layout: 'fit',
        direction: 'horizontal',
        directionLock: 'true',
        items: []  // added in the controller
    }
});