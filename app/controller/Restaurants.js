Ext.define('Whatsforlunch.controller.Restaurants', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            restaurants: 'restaurantlist',
            restaurant: 'restaurant',
            profileCard: 'restaurantprofile',
            restaurantContainer: 'restaurantContainer',
            restaurantInfo: 'restaurantContainer restaurantInfo',
            restaurantMenu: 'restaurantContainer restaurantMenu',
            restaurantCarousel: 'restaurantContainer imagecarousel'
        },
        control: {
            restaurants: {
                itemtap: 'onRestaurantTap'
            }
            
        }
    },

    loadImages: function(record){
        var items, i, j, ln;
    },

    onRestaurantTap: function(list, idx, el, record){
        if(!this.profile) {
            this.profile = Ext.create('Whatsforlunch.view.restaurant.Profile');
        }
        console.log(record);
        var that = this,
            slides = [];
        record.getRestaurantProfile(function(details, operation) {
            that.getRestaurantInfo().setRecord(details);
            //console.log(details.getImagePaths());
            var images = details.getImagePaths();
            console.log(images);
            for(var j=0; j < images.length; j++) {
                slides.push({
                    xtype: 'image',
                    cls: 'carousel-item-img',
                    width: '100%',
                    src: images[j]
                });
            }
            that.getRestaurantCarousel().setItems(slides);
        }, this);
        this.profile.setTitle(record.get('real_name'));
        this.getRestaurantContainer().push(this.profile);

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});