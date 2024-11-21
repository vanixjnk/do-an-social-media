const requests = [{
    name: "Nguyen Dinh Bao",
    username: "@vanixjnk",
    avatar: "/assets/img/avatar/vani2.jpg",
    verified: true
}, {
    name: "Elon Musk",
    username: "@elonmusk",
    avatar: "/assets/img/avatar/elonmusk.jpg",
    verified: false
}, {
    name: "Mark Zuckerberg",
    username: "@zuck",
    avatar: "/assets/img/avatar/zuck.jpg",
    verified: false
}, {
    name: "Phạm Nhật Vượng",
    username: "@vuongvin",
    avatar: "/assets/img/avatar/vuongvin.png",
    verified: true
}, {
    name: "Minh Hien",
    username: "@minhhien",
    avatar: "/assets/img/avatar/minhhien.jpg",
    verified: false
}, {
    name: "Lê Việt Phương",
    username: "@levietphuong",
    avatar: "/assets/img/avatar/vietphuong.jpg",
    verified: false
}];

const suggestions = [{
    name: "Dang Minh Lam",
    username: "@minhlam",
    avatar: "/assets/img/avatar/minhlam.jpg"
}, {
    name: "Trieu Phan",
    username: "@trieuphan",
    avatar: "/assets/img/avatar/trieuphan.jpg"
}, {
    name: "Dang Truong Vu",
    username: "@vudang",
    avatar: "/assets/img/avatar/vudang.jpg"
}, {
    name: "Do Hung",
    username: "@dohung",
    avatar: "/assets/img/avatar/dohungavt.jpg"
}, {
    name: "Donald Trump",
    username: "@trump",
    avatar: "/assets/img/avatar/trump.jpg"
}, {
    name: "HCMUE",
    username: "@hcmue",
    avatar: "/assets/img/avatar/hcmue.jpg"
}];

function renderCards(containerId, data, isRequest) {
    const container = document.getElementById(containerId);
    data.forEach(person => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-4 col-sm-6 mb-3 mb-sm-4';
        card.innerHTML = `
            <div class="shadow-sm bg-white rounded ta-3ea0">
                <div class="ta-f0ac">
                    <div class="avatar position-relative">
                        <img title="Avatar" alt="Avatar" class="friends rounded border" src="${person.avatar}">
                    </div>
                    <div class="ta-802c">
                        <div class="d-flex align-items-center">
                            <h4 class="fs-15 m-0 fw-500 lh-sm text-truncate ta-92d0 me-1">${person.name} ${person.verified ? '<img src="/assets/img/verified.svg" class="verified" alt="verified">' : ''}</h4>
                        </div>
                        <span class="fs-12 text-secondary">${person.username}</span>
                        <div class="cta"><a href="/profile/${person.username.slice(1)}" class="fs-12 text-dark">
                            Preview <i class="fad fa-arrow-right lh-0 text-primary"></i></a></div>
                    </div>
                </div>
                <div class="border-top ta-698f">
                    <div class="d-flex justify-content-center flex-wrap">
                        <button class="btn btn-sm text-main fw-bold me-2" onclick="handleButtonClick('${isRequest ? 'Đã chấp nhận lời mời kết bạn' : 'Đã gửi lời mời kết bạn'}')"><i class="fad fa-check text-success"></i> ${isRequest ? 'Accept' : 'Send Request'}</button>
                        <button class="btn btn-sm text-main fw-bold me-2" onclick="handleButtonClick('${isRequest ? 'Đã từ chối lời mời kết bạn' : 'Đã xóa gợi ý bạn'}')"><i class="fad fa-times text-danger"></i> ${isRequest ? 'Ignore' : 'Remove'}</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function handleButtonClick(action) {
    noti('success', `${action}`);
    event.target.closest('.col-lg-4').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards('requests-container', requests, true);
    renderCards('suggestions-container', suggestions, false);
});