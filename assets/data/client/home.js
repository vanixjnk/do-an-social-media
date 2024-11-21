const posts = [{
    userName: "Nguyen Dinh Bao",
    userProfile: "/profile/vanixjnk",
    userAvatar: "/assets/img/avatar/vani2.jpg",
    verifiedIcon: "/assets/img/verified.svg",
    timeAgo: "9 tháng trước",
    content: "Mới mua các bác ạ",
    imageUrl: "https://kientrucvadoisong.net/Upload/News/porsche-viet-nam-gioi-thieu-dong-xe-cayenne-moi.jpg"
}, {
    userName: "Nguyen Dinh Bao",
    userProfile: "/profile/vanixjnk",
    userAvatar: "/assets/img/avatar/vani2.jpg",
    verifiedIcon: "/assets/img/verified.svg",
    timeAgo: "1 tháng trước",
    content: "Siêu xe",
    imageUrl: "https://winauto.vn/wp-content/uploads/2024/08/lamborghini-aventador.jpg"
}];

function renderPosts(posts) {
    const postContainer = document.querySelector('.col-lg-8');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post shadow-sm bg-white rounded mb-3 border';
        postElement.innerHTML = `
            <div class="post-context p-3">
                <div class="post-header">
                    <div class="user mb-2">
                        <div class="avatar">
                            <img alt="Profile" class="vanixjnk rounded-circle shadow-sm ta-lz-load ta-lz-loaded" src="${post.userAvatar}">
                        </div>
                        <div class="info ps-2">
                            <h4 class="fs-15 mb-0">
                                <a href="${post.userProfile}" class="">
                                    <span class="name">${post.userName} <img src="${post.verifiedIcon}" class="verified" alt="verified"></span>
                                </a>
                                <span></span>
                            </h4>
                            <a href="javascript:void(0)" class="text-secondary hover-line fs-13">
                                ${post.timeAgo}
                            </a>
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
                <img src="${post.imageUrl}" class="card-img-top" alt="post image">
            </div>
            <div class="post-action border-top border-bottom">
                <form class="action like cursor-pointer" id="likeForm">
                    <button type="button" style="all:unset" onclick="love(event)">
                        <i class="fal fa-heart"></i>
                        <b class="count randomNumber">${Math.floor(Math.random() * 1000) + 1}</b>
                        <span class="text">Thích</span>
                    </button>
                </form>
                <div class="action">
                    <a style="all:unset" href="javascript:void(0)">
                        <i class="fal fa-comment"></i>
                        <b class="count randomNumber">${Math.floor(Math.random() * 1000) + 1}</b>
                        <span class="text">Comments</span>
                    </a>
                </div>
            </div>
        `;
        postContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts(posts);
});