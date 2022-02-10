// 1. event handler added
document.getElementById('submit-comment').addEventListener('click', function(){

    // 2. get user comment
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value;
    // console.log(commentBox.value);

    // 3. comment paragraph created
    const newComment = document.createElement('p')
    newComment.innerText = commentBox.value;
    commentBox.value = '';

    // 4. append the comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment); // connected to p
})