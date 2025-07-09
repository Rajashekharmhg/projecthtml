const textArea=document.querySelector('.text-area');
const speakBtn=document.getElementById('speak-btn');
const stopBtn=document.getElementById('stop-btn');

speakBtn .addEventListener('click', () => {
    if (textArea.value.trim() === '') {
        alert('Please enter some text to speak.');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    speechSynthesis.speak(utterance);
});

stopBtn.addEventListener('click', () => {
    speechSynthesis.cancel();
});
