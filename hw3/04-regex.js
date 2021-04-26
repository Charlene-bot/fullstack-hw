// Add your code here
/*function checkEmail(email) {
    var expression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (expression.test(email)) {
        return true;
    }
    else {
        return false;
    }
}*/
function emailcheck() {
    let email = document.getElementById('input').value;
    let output = document.getElementById('message');
    
    if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email))
    {
        output.className = ' font-weight-bold text-success';
        output.textContent = ('Thank you. This is a valid email address');
    }
    else
    {
        output.className = 'font-weight-bold text-danger';
        output.textContent = ('Error: Please enter valid email address.')
    }
};
