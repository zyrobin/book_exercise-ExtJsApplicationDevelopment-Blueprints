Ext.define('Ext.overrides.data.proxy.Rest',{
  override: 'Ext.data.proxy.Rest',
  
    /**
     * Specialized version of buildUrl that incorporates the {@link #appendId} and {@link #format} options into the
     * generated url. Override this to provide further customizations, but remember to call the superclass buildUrl so
     * that additional parameters like the cache buster string are appended.
     * @param {Object} request 
     *
     * Add a slash after ID.
     */
    buildUrl: function(request) {
        var me        = this,
            operation = request.getOperation(),
            records   = operation.getRecords(),
            record    = records ? records[0] : null,
            format    = me.getFormat(),
            url       = me.getUrl(request),
            id, params;
        if (record && !record.phantom) {
            id = record.getId();
        } else {
            id = operation.getId();
        }
 
        if (me.getAppendId() && me.isValidId(id)) {
            if (!url.match(me.slashRe)) {
                url += '/';
            }
 
            url += encodeURIComponent(id);
            params = request.getParams();
            if (params) {
                delete params[me.getIdParam()];
            }
        }
 
        if (format) {
            if (!url.match(me.periodRe)) {
                url += '.';
            }
 
            url += format;
        }
        else {
            url += '/';
        }
 
        request.setUrl(url);

        return me.superclass.buildUrl.apply(this, arguments);
    }
});
