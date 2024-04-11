const textArea = document.getElementById('txt');
const progressBar = document.getElementById('progress-bar');
const remChar = document.getElementById('remaining-chars');

function charCounter(inputfield){
    const maxLength = inputfield.getAttribute('maxlength');
    const currentLength = inputfield.value.length;
    const progressWidth = (currentLength / maxLength) * 100;

    progressBar.style.width = `${progressWidth}%`;
    remChar.style.display = 'none';

    
}