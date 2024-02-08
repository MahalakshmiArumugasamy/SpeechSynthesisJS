
window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    sel = document.getElementById('voicesList');
    for (i = 0; i < voices.length; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.text = voices[i].name;
        sel.add(opt, null)
    }
};

function readText() {
    var input = document.getElementById("txtInput").value;
    voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(input);
    let  sel = document.getElementById('voicesList');
    let opt=(sel.selectedIndex);
    
    utterance.lang=voices[opt].lang;
    utterance.voice=voices[opt];
    
    synth= speechSynthesis;
    synth.speak(utterance);
    
}

function clearData() {
    voices = speechSynthesis.getVoices();
  
    sel = document.getElementById('voicesList');
    for (i = 0; i < voices.length; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.text = voices[i].name;
        sel.add(opt, null)
    }

    document.getElementById("txtInput").value = "";
    document.getElementById("txtInput").placeholder = "Text to be read";
}