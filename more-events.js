document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
})
// focus (event handler)
document.getElementById('delete-confirm').addEventListener('focus', function(){
    document.body.style.backgroundColor = 'coral';
})
// blur (event handler)
document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})
// keyup
document.getElementById('delete-confirm').addEventListener('keyup', function(event) {
    const deleteBtn = document.getElementById('delete-btn');
    if(event.target.value == 'delete'){
       deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
});