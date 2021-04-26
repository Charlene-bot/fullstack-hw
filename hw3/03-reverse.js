document.querySelector('#reverse').onclick = function () {
  // Add your code here
  let inputInfo = document.getElementById('input');
  let message = document.getElementById('message');

  message.textContent = '';
  //message.className = 'font-weight-bold form-group';
  
  let savedInfo = inputInfo.value

  if (savedInfo.length != 8) {
    message.className = 'text-danger'
    message.textContent = 'Error: Please enter an 8 digit number';
    return;
  }

  let reversed = inputInfo.value.split("").reverse().join("");
  message.className = 'text-success';
  message.textContent = savedInfo + '-->' + reversed; 
};
