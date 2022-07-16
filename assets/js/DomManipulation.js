/*
    Sycronize text content of a textarea that has received text and a
    pre element that displays it
*/
function sync_text(origin_element, target_element) {
    let text = origin_element.value;

    // Extra space to ensure newline rendering
    // Scroll to left to give an editor-like experience
    if (text[text.length - 1] === "\n") {
        text += " ";
        origin_element.scrollLeft = 0;
        target_element.scrollLeft = 0;
    }
    // Format text for display in pre + code element
    target_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
    // Syntax highlight provided by Prism.js
    Prism.highlightElement(target_element);
}

function sync_scroll(origin_element, target_element) {
    target_element.scrollTop = origin_element.scrollTop;
    target_element.scrollLeft = origin_element.scrollLeft;
}

function parse(origin_element, target_textarea, target_highlight) {
    try {
        let source = origin_element.value;
        let result = EBNF.transform(source);
        target_textarea.value = result;
    }
    catch (errorInfo) {
        let { line, column, msg } = errorInfo;
        alert(`Error at line ${line}, column ${column}: ${msg}`);
        return;
    }
    sync_text(target_textarea, target_highlight);
}