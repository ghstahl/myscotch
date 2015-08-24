/* global Polymer, markdown */

Polymer('polymer-markdown', {
    publish: {
        markdown: ''
    },
    // Fires when an instance of the element is created
    created: function() {},
    // Fires when the "<polymer-element>" has been fully prepared
    ready: function() {},
    // Fires when an attribute was added, removed, or updated
    markdownChanged: function(oldVal, newVal) {
        var html = markdown.toHTML(newVal);

        this.injectBoundHTML(html, this.$.rendered);
    }
});
