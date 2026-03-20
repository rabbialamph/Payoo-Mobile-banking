document.getElementById('login-btn').addEventListener('click', () => {
    const number = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;

    if(number === '01234567899' && pin === '1234'){
        window.location.assign('home.html');
    }else{
        alert('Invalid Number or Pin')
    }
});