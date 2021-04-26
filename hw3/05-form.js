//function handleSubmit(event) {
  // Add your code here


  let form = document.querySelector("form");


  form.addEventListener("submit", event => {
    event.preventDefault();
    console.group('Form Submission');
    console.log('Name: ', form.elements.name.value);
    console.log('Email', form.elements.email.value);

    if (form.elements.comment.value.length > 0) {
      console.log('Feedback: ', form.elements.comment.value);
    
    
      if (form.elements.checkbox1.checked) {
        console.log('Newsletter: Yes I would like to join the newsletter.');
      }
      else
        console.log('Newsletter: No, I would not like to join the newsletter');
    }
    console.groupEnd();
  });

