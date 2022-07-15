function sync_text(element, target_id) {
    let text = element.value;
    let result_element = document.querySelector(target_id);
    if (text[text.length - 1] === "\n") {
        text += " ";
        element.scrollLeft = 0;
        result_element.scrollLeft = 0;
    }
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    Prism.highlightElement(result_element);
}

function sync_scroll(element, pre_id) {
    let result_element = document.querySelector(pre_id);
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
}

function parse() {
    let edit_area = document.querySelector('#input_area');
    let display_area = document.querySelector('#output_area');
    try {
        let source = edit_area.value;
        let result = EBNF.transform(source);
        display_area.value = result;
    }
    catch (errorInfo) {
        let { line, column, msg } = errorInfo;
        alert(`Error at line ${line}, column ${column}: ${msg}`);
        return;
    }
    sync_text(display_area, '#highlighting-output');
}