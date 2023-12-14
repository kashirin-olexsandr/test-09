const feedbackForm = document.querySelector('.feedback-form');

function saveToLocalStorage() {
  const formData = {
    email: feedbackForm.querySelector('input[name="email"]').value,
    message: feedbackForm.querySelector('textarea[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
feedbackForm.addEventListener('input', saveToLocalStorage);
function fillFormFields() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    feedbackForm.querySelector('input[name="email"]').value = savedData.email;
    feedbackForm.querySelector('textarea[name="message"]').value =
      savedData.message;
  }
}

// Перевіряємо та заповнюємо поля форми при завантаженні сторінки
window.addEventListener('load', fillFormFields);
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Очищаємо локальне сховище
  localStorage.removeItem('feedback-form-state');

  // Очищаємо поля форми
  feedbackForm.querySelector('input[name="email"]').value = '';
  feedbackForm.querySelector('textarea[name="message"]').value = '';

  // Отримуємо дані з полів форми та виводимо у консоль
  const formData = {
    email: feedbackForm.querySelector('input[name="email"]').value,
    message: feedbackForm.querySelector('textarea[name="message"]').value,
  };
  console.log(formData);
});
