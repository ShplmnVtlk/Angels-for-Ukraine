window.onload = function() {
    let listDonate = document.querySelectorAll('.wrap-form-donate .summDonate label'),
        inputDonate = document.querySelector('.wrap-input-label input');
    listDonate.forEach(e => {
        e.addEventListener('click', function(){
            inputDonate.value = e.dataset.value;
        })
    });
};