const birthdays = [{
    title: "Today",
    friends: [{
        name: "Nguyen Dinh Bao",
        username: "vanixjnk",
        avatar: "/assets/img/avatar/vani2.jpg",
        verified: true,
        profileLink: "/profile/vanixjnk"
    }, {
        name: "Elon Musk",
        username: "elonmusk",
        avatar: "/assets/img/avatar/elonmusk.jpg",
        verified: false,
        profileLink: "/profile/elonmusk"
    }]
}, {
    title: "Tomorrow",
    friends: [{
        name: "Mark Zuckerberg",
        username: "zuck",
        avatar: "/assets/img/avatar/zuck.jpg",
        verified: false,
        profileLink: "/profile/zuck"
    }, {
        name: "Phạm Nhật Vượng",
        username: "vuongvin",
        avatar: "/assets/img/avatar/vuongvin.png",
        verified: true,
        profileLink: "/profile/vuongvin"
    }, {
        name: "Minh Hien",
        username: "minhhien",
        avatar: "/assets/img/avatar/minhhien.jpg",
        verified: false,
        profileLink: "/profile/minhhien"
    }]
}, {
    title: "This month",
    friends: [{
        name: "Lê Việt Phương",
        username: "levietphuong",
        avatar: "/assets/img/avatar/vietphuong.jpg",
        verified: false,
        profileLink: "/profile/levietphuong"
    }, {
        name: "Dang Minh Lam",
        username: "minhlam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        verified: false,
        profileLink: "/profile/minhlam"
    }, {
        name: "Trieu Phan",
        username: "trieuphan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        verified: false,
        profileLink: "/profile/minhlam"
    }]
}, {
    title: "Next month",
    friends: [{
        name: "Dang Truong Vu",
        username: "vudang",
        avatar: "/assets/img/avatar/vudang.jpg",
        verified: false,
        profileLink: "/profile/vudang"
    }, {
        name: "Do Hung",
        username: "dohung",
        avatar: "/assets/img/avatar/dohungavt.jpg",
        verified: false,
        profileLink: "/profile/minhlam"
    }, {
        name: "Donald Trump",
        username: "trump",
        avatar: "/assets/img/avatar/trump.jpg",
        verified: false,
        profileLink: "/profile/trump"
    }, {
        name: "HCMUE",
        username: "hcmue",
        avatar: "/assets/img/avatar/hcmue.jpg",
        verified: false,
        profileLink: "/profile/hcmue"
    }]
}];

function renderBirthdays() {
    const container = document.getElementById('birthdays-container');
    birthdays.forEach(section => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'page-title d-flex align-items-center justify-content-between';
        sectionTitle.innerHTML = `<span>${section.title}</span>`;
        container.appendChild(sectionTitle);

        section.friends.forEach(friend => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-lg-4 col-md-4 col-sm-6 mb-3 mb-sm-4';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'shadow-sm bg-white rounded ta-3ea0';

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'ta-f0ac';

            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'avatar position-relative';
            avatarDiv.innerHTML = `<img title="Avatar" alt="Avatar" class="friends rounded border" src="${friend.avatar}">`;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'ta-802c';

            const nameDiv = document.createElement('div');
            nameDiv.className = 'd-flex align-items-center';
            nameDiv.innerHTML = `<h4 class="fs-15 m-0 fw-500 lh-sm text-truncate ta-92d0 me-1">${friend.name}</h4>`;
            if (friend.verified) {
                nameDiv.innerHTML += `<img src="/assets/img/verified.svg" class="verified" alt="verified">`;
            }

            const usernameSpan = document.createElement('span');
            usernameSpan.className = 'fs-12 text-secondary';
            usernameSpan.textContent = `@${friend.username}`;

            const ctaDiv = document.createElement('div');
            ctaDiv.className = 'cta';
            ctaDiv.innerHTML = `<a href="${friend.profileLink}" class="fs-12 text-dark">Preview <i class="fad fa-arrow-right lh-0 text-primary"></i></a>`;

            infoDiv.appendChild(nameDiv);
            infoDiv.appendChild(usernameSpan);
            infoDiv.appendChild(ctaDiv);

            cardBodyDiv.appendChild(avatarDiv);
            cardBodyDiv.appendChild(infoDiv);

            const cardFooterDiv = document.createElement('div');
            cardFooterDiv.className = 'border-top ta-698f';

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'd-flex justify-content-center flex-wrap';
            buttonDiv.innerHTML = `<button class="btn btn-sm text-main fw-bold me-2"><i class="fad fa-comments-alt text-primary"></i> Send greetings</button>`;

            cardFooterDiv.appendChild(buttonDiv);

            cardDiv.appendChild(cardBodyDiv);
            cardDiv.appendChild(cardFooterDiv);

            colDiv.appendChild(cardDiv);
            container.appendChild(colDiv);
        });
    });
}

document.addEventListener('DOMContentLoaded', renderBirthdays);