export const speechRecog = () => {


    const myPromise = new Promise((resolve, reject) => {

        const recognition = new webkitSpeechRecognition()

        recognition.start();

        recognition.onstart = () => {
            // console.log('recording started....');
        }


        recognition.onresult = (event) => {
            var transcript = event.results[0][0].transcript;
            resolve(transcript)
        }

        recognition.onend = () => {
            reject('complete');     // ending without result
        }

        recognition.onerror = (event) => {
            reject(event.error)

        }

    })
    return myPromise;
}

