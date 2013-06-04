Ext.define('Whatsforlunch.controller.Restaurants', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            restaurants: 'restaurantlist',
            restaurant: 'restaurant',
            profileCard: 'restaurantprofile',
            restaurantContainer: 'restaurantContainer',
            restaurantInfo: 'restaurantContainer restaurantinfo'
            
        },
        control: {
            restaurants: {
                itemtap: 'onRestaurantTap'
            }
            
        }
    },

    onRestaurantTap: function(list, idx, el, record){
        if(!this.profile) {
            this.profile = Ext.create('Whatsforlunch.view.restaurant.Profile');
        }
        Ext.getCmp('RestaurantProfileHead').getStore().load();
        this.profile.setTitle(record.get('real_name'));
        this.getRestaurantContainer().push(this.profile);

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});