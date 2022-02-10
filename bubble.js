document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second item')
    // event.stopPropagation();
    event.stopImmediatePropagation(); // ashe pashe jabe na, immediate stop hobe.
})
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second2 item')
    
})
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second3 item')
    
})
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second4 item')
    
})
// event handler ul
document.getElementById('list-container').addEventListener('click', function(){
    console.log('ul clicked')
})
// section 
document.getElementById('section-container').addEventListener('click', function(){
    console.log('section clicked')
})