Ext.define('Whatsforlunch.view.restaurant.Detail', {

    extend: 'Ext.NavigationView', //Carousel View ist besser hier.
    requires: 'Ext.SegmentedButton',


    xtype: 'restaurantDetail',

    config: {

        iconCls: 'locate',
        title: '',
        fullscreen: true,
        navigationBar: {hidden: true},

        items: [
            {
				docked: 'top',
				xtype: 'toolbar',
                scrollable: {direction: 'horizontal', indicators: false},
                ui: 'light',

				items: [
					{
						padding: '0 10',

						xtype: 'segmentedbutton',
						items: [
                            { text: 'Details', pressed: true}
                            //{ text: 'Karte', iconMask: true, iconCls: 'locate'}
                        ]
					}
				]
			},
            {
                xtype: 'restaurantProfile'
            }
        ]
    }
});
