var btnTranslate = document.querySelector("#translate-button")
var clearText = document.querySelector("#clear-button")
var txtInput = document.querySelector("#translate-input")
var txtOutput = document.querySelector("#translate-output")

var urlname = localStorage.getItem("Language") + ".json"
var url = "https://api.funtranslations.com/translate/"
var finalurl = url.concat(urlname)
console.log(finalurl) 
btnTranslate.addEventListener("click", btnClickHandler)

function btnClickHandler(){
    var input = txtInput.value
    if(input != ""){
    var finalUrl = constructUrl(input)
    console.log(finalUrl)
    fetch(finalUrl).then(response => response.json()).then(json => {
        txtOutput.innerText = json.contents.translated
        console.log(json)
        console.log(json.contents)
        console.log(json.contents.translated)
     }).catch(() => alert("some error occured"))
    }else{
        alert("Please Enter Text")
    }
 }

function constructUrl(input){
    var convertedUrl = finalurl +"?" +"text=" +input 
    return convertedUrl
}

clearText.addEventListener("click" , clear)
function clear(){
    console.log("clear")
    txtInput.value = null
    txtOutput.innerText =  null
}
