document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('survey-form');
  const steps = Array.from(document.getElementsByClassName('form-step'));
  const nextBtns = Array.from(document.getElementsByClassName('next-btn'));
  const prevBtns = Array.from(document.getElementsByClassName('prev-btn'));
  const summary = document.getElementById('summary');
  const summaryContent = document.getElementById('summary-content');
  const restartBtn = document.getElementById('restart-btn');
  let currentStep = 0;

  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (validateForm()) {
        steps[currentStep].classList.add('hidden');
        currentStep = Math.min(currentStep + 1, steps.length);
        steps[currentStep]?.classList.remove('hidden');
        if (currentStep === steps.length) {
          showSummary();
        }
      }
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      steps[currentStep].classList.add('hidden');
      currentStep = Math.max(currentStep - 1, 0);
      steps[currentStep]?.classList.remove('hidden');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form Submitted!');
      resetForm();
    }
  });

  restartBtn.addEventListener('click', () => {
    summary.classList.add('hidden');
    currentStep = 0;
    steps[currentStep].classList.remove('hidden');
  });

  function validateForm() {
    const inputs = Array.from(steps[currentStep].querySelectorAll('input, select, textarea'));
    let isValid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    });
    return isValid;
  }

  function showSummary() {
    summary.classList.remove('hidden');
    let summaryHTML = '';
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      summaryHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    });
    summaryContent.innerHTML = summaryHTML;
  }

  function resetForm() {
    form.reset();
    steps.forEach(step => step.classList.add('hidden'));
    summary.classList.add('hidden');
    currentStep = 0;
    steps[currentStep].classList.remove('hidden');
  }
});