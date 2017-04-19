Ext.define('Ext.overrides.data.proxy.Ajax',{
  override: 'Ext.data.proxy.Ajax',
  
    slashRe: /\/$/,

    /**
     * Generates a url based on a given Ext.data.Request object. By default, ServerProxy's buildUrl will add the
     * cache-buster param to the end of the url. Subclasses may need to perform additional modifications to the url.
     * @param {Ext.data.Request} request The request object
     * @return {String} The url
     */
    buildUrl: function(request) {
        var me = this,
            url = me.getUrl(request);
 
        //<debug> 
        if (!url) {
            Ext.raise("You are using a ServerProxy but have not supplied it with a url.");
        }
        //</debug> 

        // add /
        if (!url.match(me.slashRe)) {
            url += '/';
        }
 
        if (me.getNoCache()) {
            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", me.getCacheString(), Ext.Date.now()));
        }
 
        return url;
    }
});
