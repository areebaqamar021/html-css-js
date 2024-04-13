const textArea = document.getElementById('txt');
const progressBar = document.getElementById('progress-bar');
const remChar = document.getElementById('remaining-chars');

function charCounter(inputfield){
    const maxLength = inputfield.getAttribute('maxlength');
    const currentLength = inputfield.value.length;
    const progressWidth = (currentLength / maxLength) * 100;

    progressBar.style.width = `${progressWidth}%`;
    remChar.style.display = 'none';

    if (progressWidth <= 60) {
        progressBar.style.backgroundColor = "rgb(19, 160, 19)";
      } else if (progressWidth > 60 && progressWidth < 85) {
        progressBar.style.backgroundColor = "rgb(236, 157, 8)";
      } else {
        progressBar.style.backgroundColor = "rgb(241, 9, 9)";
        remChars.innerHTML = `${maxLength - currentLength} characters left`;
        remChars.style.display = "block";
      }
    }
}