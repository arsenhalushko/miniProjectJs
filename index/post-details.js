let url = new URL(location.href);
let json = url.searchParams.get('info');
let post = JSON.parse(json);
let title = document.getElementById('postTitle');
let body = document.getElementById('postBody');
title.innerText = post.title;
body.innerText = post.body;

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    .then(value => value.json())
    .then(comments => {
        let postComments = document.getElementById('postComments');
        for (const comment of comments) {
            let div = document.createElement('div');
            div.classList.add('post-comment');
            div.innerHTML = `
                        <p>Name: ${comment.name}</p>
                        <p>Email: ${comment.email}</p>
                        <p>Body: ${comment.body}</p>
                    `;
            postComments.appendChild(div);
        }
    });