// TODO: Solange es nur ein Panel gibt, wird dieses direkt instantiiert.
Ext.define('Whatsforlunch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
			ui: 'gray'
		},

        items: [
            { xclass: 'Whatsforlunch.view.restaurant.Card' }
            // More to follow...
        ]
    }
});
