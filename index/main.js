// В index.html
//
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(response => response.json())
    .then(users => {
        // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
        let usersContainer = document.getElementById('users-container');
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            //Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            let link = document.createElement('a');
            link.innerText = ` ${user.id} - ${user.name}`;
            link.href = `user-details.html?info=` + JSON.stringify(user);
        userBlock.appendChild(link);
        usersContainer.appendChild(userBlock);
    }
    });

//


