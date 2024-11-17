document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".dac li");

    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            listItems.forEach((li) => li.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
            const messages = [{
                    username: "vanixjnk",
                    avatar: "/assets/img/avatar/vani2.jpg",
                    fullname: "Nguyen Dinh Bao",
                    message: "Definitely! Well, it sounds like you're managing it well. Keep it up!",
                    time: "1 năm trước",
                    status: true,
                    saw: true,
                    type: "all",
                },
                {
                    username: "dohung",
                    avatar: "/assets/img/avatar/dohungavt.jpg",
                    fullname: "Do Hung",
                    message: "That's great! Keep it up, you're on the right track!",
                    time: "2 ngày trước",
                    status: true,
                    saw: false,
                    type: "unread",
                },
                {
                    username: "trieuphan",
                    avatar: "/assets/img/avatar/trieuphan.jpg",
                    fullname: "Trieu Phan",
                    message: "Of course! I'd be happy to help anytime. Good luck with your portfolio!",
                    time: "2 ngày trước",
                    status: false,
                    saw: true,
                    type: "all",
                },
                {
                    username: "vudang",
                    avatar: "/assets/img/avatar/vudang.jpg",
                    fullname: "Dang Truong Vu",
                    message: "You're welcome! Best of luck with your portfolio, I’m sure it’s going to be amazing!",
                    time: "2 ngày trước",
                    status: true,
                    saw: true,
                    type: "all",
                },
                {
                    username: "minhlam",
                    avatar: "/assets/img/avatar/minhlam.jpg",
                    fullname: "Dang Minh Lam",
                    message: "No problem, happy to help! Good luck with your project!",
                    time: "2 ngày trước",
                    status: false,
                    saw: false,
                    type: "unread",
                },
                {
                    username: "hoitraidep",
                    avatar: "/assets/img/avatar/hoitraidep.jpg",
                    fullname: "Hội trai đẹp",
                    message: "Anytime! Good luck with your project!",
                    time: "3 giờ trước",
                    status: true,
                    saw: false,
                    type: "group",
                },
                {
                    username: "langthanggamcau",
                    avatar: "/assets/img/avatar/langthanggamcau.jpg",
                    fullname: "Lang Thang Gầm Cầu",
                    message: "Thanks, everyone! You’ve been really helpful. I’ll keep you updated!",
                    time: "3 giờ trước",
                    status: true,
                    saw: true,
                    type: "group",
                },
            ];

            const messagesContainer = document.querySelector(".ta-9bf8");
            const renderMessages = (filterType = "all") => {
                    const filteredMessages =
                        filterType === "all" ? messages : messages.filter((msg) => msg.type === filterType);
                    messagesContainer.innerHTML = filteredMessages
                        .map(
                            (msg) => `
        <a class="vanixinh" href="/messages/${msg.username}">
            <div class="p-2 ta-38a0 ${window.location.pathname.includes(msg.username) ? 'ta-5acf' : ''}">
                <div class="d-flex align-items-center">
                    <div class="ta-2ca1">
                        <div class="ta-5d62">
                            <i class="fa fa-circle fs-10 ${msg.status ? "text-success" : "text-danger"}"></i>
                        </div>
                        <img 
                            alt="messages" 
                            class="vanixjnk-message rounded-circle ta-lz-load ta-lz-loaded" 
                            src="${msg.avatar}">
                    </div>
                    <div class="ps-2">
                        <div class="d-flex align-items-baseline">
                            <h4 class="fs-14 mb-1 text-main">${msg.fullname}</h4>
                        </div>
                        <p class="mb-0 fs-12 text-muted text-truncate ta-1efc">
                        ${
                            msg.saw
                                ? `${msg.message}` 
                                : `<b>${msg.message}</b>` 
                        }
                        </p>
                    </div>
                </div>
                <span class="ta-cc16">${msg.time}</span>
            </div>
        </a>
        `
            )
            .join("");
    };
    const listItems = document.querySelectorAll(".dac li");
    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            listItems.forEach((li) => li.classList.remove("active"));
            item.classList.add("active");

            const type = item.classList.contains("text-success")
                ? "all"
                : item.classList.contains("text-danger")
                ? "unread"
                : "group";

            renderMessages(type);
        });
    });
    renderMessages();
});