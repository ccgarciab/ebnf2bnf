
const text_input = document.getElementById('input_area');
const button = document.getElementById('submit_EBNF');
const text_output = document.getElementById('output_area');

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");

function f() {
    text_output.value = "";
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(text_input.value),
        redirect: 'follow'
    };
    fetch("http://127.0.0.1:5000", requestOptions)
    .then(response => response.text())
    .then(result => text_output.value = result)
    .catch(error => console.log('error', error))
};

text_input.addEventListener('input', function handleChange(event) {
    data = event.target.value;
});

button.addEventListener('click', f);