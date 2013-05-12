Ext.define('Whatsforlunch.view.RestaurantList', {
    extend: 'Ext.Container',
    xtype: 'restaurantlist',
    config: {
        scrollable: true,
        items: [
            {
                xtype: 'panel',
                id: 'Ajax',
                styleHtmlContent: true
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Load using Ajax',
                        handler: function() {
                            var panel = Ext.getCmp('Ajax');

                            panel.getParent().setMasked({
                                xtype: 'loadmask',
                                message: 'Loading...'
                            });

                            Ext.Ajax.request({
                                url: 'resources/fixtures/bydistance2.json',
                                success: function(response) {
                                    panel.setHtml(response.responseText);
                                    panel.getParent().unmask();
                                }
                            });
                        }
                    }
                ]
            }
        ]
    }
});
