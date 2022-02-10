// using function
function justHandleFunctionClick (){
    const p = document.getElementById('clicking-method');
    p.innerText = 'set by using function';
}

// direct (etai beshi kora hobe)
document.getElementById('handle-event').addEventListener('click', function(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'set directly by addEventListener';
})
// direct for input field
document.getElementById('update-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const p = document.getElementById('clicking-method');
    p.innerText = nameField.value;
    nameField.value = ''; // type korle output dekhaye shei type shoraye dibe
})