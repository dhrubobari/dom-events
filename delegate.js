const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(event){
//         // system 1
//         // document.getElementById('item-container').removeChild(item);
//         // system 2: event
//         event.target.parentNode.removeChild(event.target); // li gulote click korle ekta kore gayeb hocche for removeChild and .target
//     })
    document.getElementById('add-item').addEventListener('click', function(){
        const li = document.createElement('li');
        li.innerText = 'Brand New Item';
        li.classList.add('item');
        const parent = document.getElementById('item-container');
        parent.appendChild(li);    
    })
    document.getElementById('item-container').addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
        // event take ami deligate kore disi, upore pathay disi.
    });