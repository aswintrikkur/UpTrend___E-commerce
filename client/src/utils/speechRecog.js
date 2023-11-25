
export const speechRecog = (setState) => {
    console.log('function invoked');
    const button = document.getElementById('voice-btn');
    const input = document.getElementById('search-input');

    const recognition = new webkitSpeechRecognition()

    console.log('1===', recognition);

    recognition.onstart = () => {
        console.log('recording....');
        button.classList.add('voice-btn-animation')
    }

    recognition.onend=()=>{
        button.classList.remove('voice-btn-animation')
    }
    
    recognition.onresult = (event) => {
        var transcript = event.results[0][0].transcript;
        setState('dummy', transcript);
        input.value = transcript;
        button.classList.remove('voice-btn-animation')
        console.log(transcript, '=====result');
    }

    recognition.start();


}