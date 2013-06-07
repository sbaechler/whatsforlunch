Ext.define('Whatsforlunch.reader.Lunchgate', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.lunchgate',

    // @inheritdoc
    getResponseData: function(response) {
        var me = this, data=[];
        var rawData = me.callParent(arguments);

        // Fix Lunchgate JSON format where the whole JSON is an object instead of a list.
        for(var key in rawData) {
            data.push(rawData[key]);
        }
        // the last element is empty.
        data.pop();
        return data;
    }
});