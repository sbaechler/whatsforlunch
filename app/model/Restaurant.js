Ext.define('Whatsforlunch.model.Restaurant', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'real_name', type: 'string' },
            { name: 'url_name', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'zip', type: 'auto' },
            { name: 'city', type: 'auto' },
            { name: 'latitude', type: 'auto' },
            { name: 'longitude', type: 'auto' },
            { name: 'distance', type: 'auto' }
        ]
    }
});