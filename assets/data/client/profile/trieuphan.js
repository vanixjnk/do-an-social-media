function generateRandomForEachElement(className) {
    let elements = document.querySelectorAll(className);

    if (elements.length === 0) {
        console.log('No elements with the class ' + className);
        return;
    }

    elements.forEach(element => {
        let randomNumber = Math.floor(Math.random() * 1000) + 1;
        element.innerText = randomNumber;
    });
}



const profile = {
    fullname: "Trieu Phan",
    avatar: "/assets/img/avatar/trieuphan.jpg",
    cover: "/assets/img/cover/trieuphan.jpg",
    bio:" Rồi chúng ta sẽ ổn, với những chuyện đã từng không ổn. ",
    study: "Freshman at HCMUE",
    location: "Live at District 6",
    status: "Dating",
    followers: "12351",
};

const posts = [{
        time: "June 12 at 8:42 AM",
        content:"Nobody have not ever makes mistakes",
    },
];

function renderProfile() {
    const profileContainer = document.getElementById("profile-container");
    profileContainer.innerHTML = `
        <div class="vani-cover" style="background-image: url('${profile.cover}');">
            <div class="vani-avatar">
                <img src="${profile.avatar}" alt="avatar" class="rounded-circle border img-thumbnail border-light shadow-sm">
            </div>
        </div>
        <div class="vani-mt-10">
            <div class="d-flex align-items-center justify-content-center mb-3">
                <h2 class="me-2">${profile.fullname}</h2>
                <img src="/assets/img/verified.svg" class="verified" alt="verified">
            </div>
            <div class="text-center">
                <p>${profile.bio}</p>
            </div>
            <div class="d-flex align-items-center justify-content-center mb-3">
                <button class="btn btn-light text-main fw-bold me-2">
                    <i class="fad fa-star text-primary"></i> Follow
                </button>
                <button class="btn btn-light text-main fw-bold me-2">
                    <i class="fad fa-comments-alt text-primary"></i> Message
                </button>
                <div class="dropdown">
                    <button type="button" data-bs-toggle="dropdown" class="btn btn-light" title="More Options">
                        <i class="fa fa-ellipsis-h text-primary"></i> More
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end mt-2">
                        <li>
                            <a href="javascript:void(0)" class="dropdown-item text-secondary" onclick="copy()">
                                <i class="fad fa-link"></i> Copy
                            </a>
                            <a href="javascript:void(0)" class="dropdown-item text-secondary">
                                <i class="fad fa-phone"></i> Call
                            </a>
                            <a href="javascript:void(0)" class="dropdown-item text-secondary">
                                <i class="fad fa-video"></i> Video Call
                            </a>
                            <a href="javascript:void(0)" class="dropdown-item text-secondary" onclick="report()">
                                <i class="fad fa-exclamation-triangle"></i> Report
                            </a>
                            <a href="javascript:void(0)" class="dropdown-item text-secondary" onclick="block()">
                                <i class="fad fa-ban"></i> Block
                            </a>
                            <div id="copy" class="d-none"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function renderProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    profileMenu.innerHTML = `
        <div class="card shadow-none border bg-transparent">
            <div class="card-body shadow-none pt-2 pb-0">
                <ul class="seller-menu ps-0">
                    <li class="item"><a><i class="fad fa-graduation-cap text-primary"></i> ${profile.study}</a></li>
                    <li class="item"><a><i class="fad fa-map-marker-alt text-primary"></i> ${profile.location}</a></li>
                    <li class="item"><a><i class="fad fa-heart text-primary"></i> ${profile.status}</a></li>
                    <li class="item"><a><i class="fad fa-users text-primary"></i> ${profile.followers} Followers</a></li>
                </ul>
            </div>
        </div>
    `;
}

function renderPosts() {
    const postsContainer = document.getElementById("posts-container");
    posts.forEach((post) => {
                const postElement = document.createElement("div");
                postElement.className = "post shadow-sm bg-white rounded mb-3 border";
                postElement.innerHTML = `
            <div class="post-context p-3">
                <div class="post-header">
                    <div class="user mb-2">
                        <div class="avatar">
                            <img alt="Profile" class="vanixjnk rounded-circle shadow-sm" src="${profile.avatar}">
                        </div>
                        <div class="info ps-2">
                            <h4 class="fs-15 mb-0">
                                <a href="javascript:void(0)">
                                    <span class="name">${profile.fullname} <img src="/assets/img/verified.svg" class="verified" alt="verified"></span>
                                </a>
                            </h4>
                            <a href="javascript:void(0)" class="text-secondary hover-line fs-13">${post.time}</a>
                        </div>
                    </div>
                    <div class="action d-flex align-items-center">
                        <div class="dropdown">
                            <button type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" class="btn btn-light btn-action" title="More Options">
                                <i class="fa fa-ellipsis-h"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end mt-2">
                                <li>
                                    <a href="javascript:void(0)" onclick="copy()" class="dropdown-item text-secondary">
                                        <i class="fad fa-link"></i> Copy
                                    </a>
                                    <div id="copy" class="d-none"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p class="post-content my-2 fs-14 text-pre-wrap">${post.content}</p>
                ${post.image ? `<img src="${post.image}" class="card-img-top" alt="post image">` : ''}
            </div>
            <div class="post-action border-top border-bottom">
                <form class="action like cursor-pointer" id="likeForm">
                    <button type="button" style="all:unset" onclick="love(event)">
                        <i class="fal fa-heart"></i>
                        <b class="count randomNumber"></b>
                        <span class="text">Thích</span>
                    </button>
                </form>
                <div class="action">
                    <a style="all:unset" href="javascript:void(0)">
                        <i class="fal fa-comment"></i>
                        <b class="count randomNumber"></b>
                        <span class="text">Comments</span>
                    </a>
                </div>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
    generateRandomForEachElement(".randomNumber");
}

document.addEventListener("DOMContentLoaded", () => {
    renderProfile();
    renderProfileMenu();
    renderPosts();
});

function love(event) {
    let likeButton = event.currentTarget;
    let likeForm = likeButton.closest('form');
    likeForm.classList.toggle('active');
    if (likeForm.classList.contains('active')) {
        noti('success', "Đã thích bài viết");
    } else {
        noti('error', "Đã bỏ thích bài viết");
    }
}