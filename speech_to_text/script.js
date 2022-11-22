const SpeechRecognize = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognize = new SpeechRecognize();
const btn = document.querySelector('.control');


function setUpVoice() {
    console.log(recognize);
    recognize.lang = 'th-TH';
    btn.addEventListener('click', () => {
        const isRecord = btn.classList.contains('record');

        if (isRecord) {
            recognize.start();
            btn.classList.remove('record');
            btn.classList.add('pause');
            btn.innerText = "Pause";
        } else {
            recognize.stop();
            btn.classList.remove('pause');
            btn.classList.add('record');
            btn.innerText = "Record";
        }
    });
    recognize.addEventListener('result', (e) => {
        console.log(e);
        let message = document.querySelector('.message');
        message.innerText += e.results[0][0].transcript;
    });
    recognize.addEventListener('end', () => {
        const isPause = btn.classList.contains('pause');
        if (isPause) {
            recognize.start();
        }
    });

}

setUpVoice();