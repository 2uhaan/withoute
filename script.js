function removeLetterE() {
    var inputText = document.getElementById("inputText").value;
    var outputText = document.getElementById("outputText");

    // Remove both lowercase and uppercase occurrences of 'e'
    var modifiedText = inputText.replace(/e/gi, '');
    outputText.value = modifiedText;
}
