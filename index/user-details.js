let url = new URL(location.href);
let json = url.searchParams.get('info');
let user = JSON.parse(json);

let name = document.getElementById('userName');
name.innerText = user.name;
let username = document.getElementById('userUsername');
username.innerText = user.username;
let email = document.getElementById('userEmail');
email.innerText = user.email;
let phone = document.getElementById('userPhone');
phone.innerText = user.phone;
let website = document.getElementById('userWebsite');
website.innerText = user.website;

document.getElementById('postButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
            let postID = JSON.parse(user.id);
            for (const post of posts) {
                if (postID === post.userId) {
                    let block = document.createElement('div');
                    block.classList.add('link')
                    let link = document.createElement('a');
                    link.innerText = `${post.title}   `;
                    link.href = 'post-details.html?info=' + JSON.stringify(post);
                    block.appendChild(link)
                    document.body.appendChild(link);
                }
            }
        });
})