const textareas = document.querySelectorAll(".txt");
const progressBars = document.querySelectorAll(".progress-bar");
const remCharsElems = document.querySelectorAll(".remaining-chars");

function charCounter(inputField, progress, warningTxt) {
  const maxLength = inputField.getAttribute("maxlength");
  const currentLength = inputField.value.length;

  const progressWidth = (currentLength / maxLength) * 100;
  progress.style.width = `${progressWidth}%`;
  warningTxt.style.display = "none";

  if (progressWidth <= 60) {
    progress.style.backgroundColor = "rgb(19, 160, 19)";
  } else if (progressWidth > 60 && progressWidth < 85) {
    progress.style.backgroundColor = "rgb(236, 157, 8)";
  } else {
    progress.style.backgroundColor = "rgb(241, 9, 9)";
    warningTxt.innerHTML = `${maxLength - currentLength} characters left`;
    warningTxt.style.display = "block";
  }
}

textareas.forEach((textarea, i) => {
  textarea.oninput = () => charCounter(textarea, progressBars[i], remCharsElems[i]);
})