var input = document.querySelector('#user-input')
var button = document.querySelector('#translate-btn')
var output = document.querySelector('#translated-output')

var server_URL = "https://api.funtranslations.com/translate/yoda.json"


function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

button.addEventListener("click", function onClickTranslate() {

    var input_txt = input.value

    var tranlated_URL = server_URL + "?text=" + input_txt

    fetch(tranlated_URL)
        .then(response => response.json())
        .then(json => {
            var translated_txt = json.contents.translated
            output.innerText = translated_txt 
        })
        .catch(errorHandler)

} )