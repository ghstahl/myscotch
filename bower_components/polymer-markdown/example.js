(function(document) {
    var editor = document.getElementById('markdown-editor');
    var preview = document.getElementById('markdown-preview');

    editor.addEventListener('input', function(event) {
        preview.markdown = event.target.value;
    });
})(document);
