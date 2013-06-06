Ext.define('Whatsforlunch.model.RestaurantProfile', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'uid', type:'int'},
            { name: 'url_name', type:'string'},
            { name: 'real_name', type:'string'},
            { name: 'address', type:'string'},
            { name: 'zip', type:'string'},
            { name: 'city', type:'string'},
            { name: 'phone', type:'string'},
            { name: 'email', type:'string'},
            { name: 'homepage', type:'string'},
            { name: 'seats_in', type:'auto'},
            { name: 'premium', type: 'string'},

            { name: 'seats_out', type:'auto'},
            { name: 'lat', type:'auto'},  // Echt, ist so im JSON
            { name: 'lon', type:'auto'},
            { name: 'seo_text', type:'string'},
            { name: 'images', type:'auto'},
            { name: 'url_name', type:'string'}


        ],
        proxy: {
            type: 'ajax',
            url: 'resources/fixtures/get_profile.json'
            //url: 'get_profile.php'
        }
    },
    getImagePaths: function() {
        var path = 'http://files.lunchgate.ch/gastrouploads/',
            mediaUrl = path + this.get('uid') + "/c_",
            images = [];
        for(var i=0; i< this.get('images').length; i++) {
            var path = mediaUrl + this.get('images')[i];
            images.push(path);
        }
        return images;
    }

});