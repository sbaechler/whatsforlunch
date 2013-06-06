Ext.define('Whatsforlunch.controller.Restaurants', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            restaurants: 'restaurantlist',
            restaurant: 'restaurant',
            profileCard: 'restaurantDetail',
            restaurantProfile: 'restaurantDetail restaurantProfile',
            restaurantContainer: 'restaurantContainer',
            restaurantInfo: 'restaurantDetail restaurantInfo',
            restaurantMenu: 'restaurantDetail restaurantMenu',
            restaurantCarousel: 'restaurantDetail imagecarousel',
            detailToolbar: 'restaurantDetail toolbar'
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
            this.profile = Ext.create('Whatsforlunch.view.restaurant.Detail');
        }
        var that = this,
            slides = [];
        record.getRestaurantProfile(function(details, operation) {
            that.getRestaurantInfo().setRecord(details);
            var images = details.getImagePaths();
            for(var j=0; j < images.length; j++) {
                slides.push({
                    xtype: 'image',
                    cls: 'carousel-item-img',
                    width: '100%',
                    src: images[j]
                });
            }
            // Create speciality card
            var speciality = details.get('speciality');
            if(typeof speciality == 'object' && speciality.length) {
                this.profile.push({
                    xtype: 'restaurantMenu',
                    data: speciality,
                    title: 'Spezialität'
                });
                this.profile.down('segmentedbutton').add({
                    text: 'Spezialität'
                });

            }
            // Create speciality card
            var menu = details.get('menu');
            if(typeof menu == 'object' && menu.length) {
                this.profile.push({
                    xtype: 'restaurantMenu',
                    data: menu,
                    title: 'Tagesmenu'
                });
                this.profile.down('segmentedbutton').add({
                    text: 'Tagesmenu'
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