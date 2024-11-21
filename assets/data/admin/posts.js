const posts = [{
        id: 1,
        username: "vanixjnk",
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        content: "I have a new car",
        image: "https://kientrucvadoisong.net/Upload/News/porsche-viet-nam-gioi-thieu-dong-xe-cayenne-moi.jpg",
        audience: "Public",
        time: "1 giờ trước"
    },
    {
        id: 2,
        username: "dohung",
        fullname: "Do Hung",
        avatar: "/assets/img/avatar/dohungavt.jpg",
        content: "good job",
        image: null,
        audience: "Friends",
        time: "2 ngày trước"
    },
    {
        id: 3,
        username: "minhlam",
        fullname: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        content: "nice car",
        image: null,
        audience: "Private",
        time: "1 giờ trước"
    },
    {
        id: 4,
        username: "trieuphan",
        fullname: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        content: "thanks",
        image: null,
        audience: "Public",
        time: "3 giờ trước"
    },
    {
        id: 5,
        username: "vudang",
        fullname: "Dang Truong Vu",
        avatar: "/assets/img/avatar/vudang.jpg",
        content: "hello",
        image: null,
        audience: "Public",
        time: "4 giờ trước"
    },
    {
        id: 6,
        username: "elonmusk",
        fullname: "Elon Musk",
        avatar: "/assets/img/avatar/elonmusk.jpg",
        content: "yo yo",
        image: null,
        audience: "Public",
        time: "5 giờ trước"
    },
    {
        id: 7,
        username: "hcmue",
        fullname: "HCMUE",
        avatar: "/assets/img/avatar/hcmue.jpg",
        content: "hcmue",
        image: null,
        audience: "Public",
        time: "6 giờ trước"
    },
    {
        id: 8,
        username: "vietphuong",
        fullname: "Viet Phuong",
        avatar: "/assets/img/avatar/vietphuong.jpg",
        content: "hcmue !!!",
        image: null,
        audience: "Public",
        time: "7 giờ trước"
    },
    {
        id: 9,
        username: "trump",
        fullname: "Donald Trump",
        avatar: "/assets/img/avatar/trump.jpg",
        content: "hello usa",
        image: null,
        audience: "Public",
        time: "8 giờ trước"
    },
    {
        id: 10,
        username: "minhhien",
        fullname: "Minh Hien",
        avatar: "/assets/img/avatar/minhhien.jpg",
        content: "hello world",
        image: null,
        audience: "Public",
        time: "9 giờ trước"
    },
    {
        id: 11,
        username: "zuck",
        fullname: "Mark Zuckerberg",
        avatar: "/assets/img/avatar/zuck.jpg",
        content: "bring the world together",
        image: null,
        audience: "Public",
        time: "10 giờ trước"
    },
    {
        id: 12,
        username: "vanixjnk",
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        content: "Just had a great day!",
        image: null,
        audience: "Public",
        time: "11 giờ trước"
    },
    {
        id: 13,
        username: "elonmusk",
        fullname: "Elon Musk",
        avatar: "/assets/img/avatar/elonmusk.jpg",
        content: "Excited for the next SpaceX launch!",
        image: null,
        audience: "Public",
        time: "10 giờ trước"
    },
    {
        id: 14,
        username: "zuck",
        fullname: "Mark Zuckerberg",
        avatar: "/assets/img/avatar/zuck.jpg",
        content: "Just had a great conversation with a friend!",
        image: null,
        audience: "Public",
        time: "9 giờ trước"
    },
    {
        id: 15,
        username: "minhhien",
        fullname: "Minh Hien",
        avatar: "/assets/img/avatar/minhhien.jpg",
        content: "Loving the new book I'm reading!",
        image: null,
        audience: "Public",
        time: "8 giờ trước"
    },
    {
        id: 16,
        username: "minhlam",
        fullname: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        content: "Just had a great workout!",
        image: null,
        audience: "Public",
        time: "7 giờ trước"
    },
    {
        id: 17,
        username: "vietphuong",
        fullname: "Viet Phuong",
        avatar: "/assets/img/avatar/vietphuong.jpg",
        content: "Excited for the weekend!",
        image: null,
        audience: "Public",
        time: "6 giờ trước"
    },
    {
        id: 18,
        username: "trieuphan",
        fullname: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        content: "Just learned something new today!",
        image: null,
        audience: "Public",
        time: "5 giờ trước"
    },
    {
        id: 19,
        username: "vanixjnk",
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        content: "Just watched a great movie!",
        image: null,
        audience: "Public",
        time: "4 giờ trước"
    },
    {
        id: 20,
        username: "elonmusk",
        fullname: "Elon Musk",
        avatar: "/assets/img/avatar/elonmusk.jpg",
        content: "Working on a new project!",
        image: null,
        audience: "Public",
        time: "3 giờ trước"
    },
    {
        id: 21,
        username: "zuck",
        fullname: "Mark Zuckerberg",
        avatar: "/assets/img/avatar/zuck.jpg",
        content: "Just had a great meeting!",
        image: null,
        audience: "Public",
        time: "2 giờ trước"
    },
    {
        id: 22,
        username: "minhhien",
        fullname: "Minh Hien",
        avatar: "/assets/img/avatar/minhhien.jpg",
        content: "Loving the new music I'm listening to!",
        image: null,
        audience: "Public",
        time: "1 giờ trước"
    },
    {
        id: 23,
        username: "minhlam",
        fullname: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        content: "Just had a great conversation with a friend!",
        image: null,
        audience: "Public",
        time: "12 giờ trước"
    },
    {
        id: 24,
        username: "vietphuong",
        fullname: "Viet Phuong",
        avatar: "/assets/img/avatar/vietphuong.jpg",
        content: "Excited for the new year!",
        image: null,
        audience: "Public",
        time: "11 giờ trước"
    },
    {
        id: 25,
        username: "trieuphan",
        fullname: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        content: "Just learned something new today!",
        image: null,
        audience: "Public",
        time: "10 giờ trước"
    },
    {
        id: 26,
        username: "dohung",
        fullname: "Do Hung",
        avatar: "/assets/img/avatar/dohungavt.jpg",
        content: "Just had a great day!",
        image: null,
        audience: "Public",
        time: "9 giờ trước"
    },
    {
        id: 27,
        username: "vanixjnk",
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        content: "Just watched a great TV show!",
        image: null,
        audience: "Public",
        time: "8 giờ trước"
    },
    {
        id: 28,
        username: "elonmusk",
        fullname: "Elon Musk",
        avatar: "/assets/img/avatar/elonmusk.jpg",
        content: "Working on a new project!",
        image: null,
        audience: "Public",
        time: "7 giờ trước"
    },
    {
        id: 29,
        username: "zuck",
        fullname: "Mark Zuckerberg",
        avatar: "/assets/img/avatar/zuck.jpg",
        content: "Just had a great meeting!",
        image: null,
        audience: "Public",
        time: "6 giờ trước"
    },
    {
        id: 30,
        username: "minhhien",
        fullname: "Minh Hien",
        avatar: "/assets/img/avatar/minhhien.jpg",
        content: "Loving the new book I'm reading!",
        image: null,
        audience: "Public",
        time: "5 giờ trước"
    },
    {
        id: 31,
        username: "minhlam",
        fullname: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        content: "Just had a great workout!",
        image: null,
        audience: "Public",
        time: "4 giờ trước"
    },
    {
        id: 32,
        username: "vietphuong",
        fullname: "Viet Phuong",
        avatar: "/assets/img/avatar/vietphuong.jpg",
        content: "Excited for the weekend!",
        image: null,
        audience: "Public",
        time: "3 giờ trước"
    },
    {
        id: 33,
        username: "trieuphan",
        fullname: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        content: "Just learned something new today!",
        image: null,
        audience: "Public",
        time: "2 giờ trước"
    },
    {
        id: 34,
        username: "dohung",
        fullname: "Do Hung",
        avatar: "/assets/img/avatar/dohungavt.jpg",
        content: "Just had a great conversation with a friend!",
        image: null,
        audience: "Public",
    }
]

const postsPerPage = 10;
let currentPage = 1;
let currentData = posts;

function searchPosts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    currentData = posts.filter(post =>
        post.username.toLowerCase().includes(searchInput) ||
        post.fullname.toLowerCase().includes(searchInput) ||
        post.content.toLowerCase().includes(searchInput)
    );
    currentPage = 1;

    if (currentData.length === 0) {
        const postDatatableBody = document.getElementById('postsDataTable');
        postDatatableBody.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="text-center my-4">
                        <div class="icon"><i class="fa-7x fad fa-engine-warning text-primary"></i></div>
                        <h4 class="fw-bold my-2 mt-3">No result</h4>
                        <p class="mb-0 text-muted fs-14">Please check again!</p>
                    </div>
                </td>
            </tr>
        `;
        document.querySelector('.pagination').innerHTML = '';
    } else {
        renderPosts(currentPage, currentData);
    }
}

function renderPosts(page, data = currentData) {
    const postDatatableBody = document.getElementById('postsDataTable');
    postDatatableBody.innerHTML = '';

    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToShow = data.slice(start, end);

    postsToShow.forEach((post) => {
                let audienceClass = "";
                switch (post.audience) {
                    case "Public":
                        audienceClass = "bg-success";
                        break;
                    case "Friends":
                        audienceClass = "bg-info";
                        break;
                    case "Private":
                        audienceClass = "bg-warning";
                        break;
                    case "Close Friends":
                        audienceClass = "bg-primary";
                        break;
                    default:
                        audienceClass = "bg-secondary";
                }

                const row = document.createElement("tr");

                row.innerHTML = `
        <td>${post.id}</td>
        <td>
            <button type="button" class="btn btn-light btn-action" data-bs-toggle="modal" data-bs-target="#viewPost_${post.id}">
                <i class="fa fa-eye"></i>
            </button>
            <div class="modal" id="viewPost_${post.id}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">View <b class="text-primary">#${post.id}</b></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p class="post-content my-2 fs-14 text-pre-wrap">${post.content}</p>
                                ${post.image ? `<img src="${post.image}" class="card-img-top" alt="${post.id}">` : ""}
                            <button type="button" class="btn btn-main w-100 mt-3" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-danger btn-action" onclick="deleteUser()">
                <i class="fa fa-trash"></i>
            </button>
        </td>
        <td>${post.username}</td>
        <td>
            <div class="d-flex align-items-center">
                <img width="24" height="24" alt="" src="${post.avatar}" class="img-navbar rounded-circle shadow-sm me-1">
                <div class="ms-1">${post.fullname}</div>
            </div>
        </td>
        <td>${post.content}</td>
        <td><span class="badge ${audienceClass}">${post.audience}</span></td>
        <td>${post.time}</td>
    `;
        postDatatableBody.appendChild(row);
    });

    renderPagination(data);
}

function renderPagination(data = currentData) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / postsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a href="#" class="page-link" onclick="goToPage(${i})">${i}</a>`;
        pagination.appendChild(li);
    }

    if (currentPage < totalPages) {
        const nextLi = document.createElement('li');
        nextLi.className = 'page-item';
        nextLi.innerHTML = `<a href="#" class="page-link" onclick="goToPage(${currentPage + 1})">Next</a>`;
        pagination.appendChild(nextLi);
    }
}

function goToPage(page) {
    currentPage = page;
    renderPosts(currentPage, currentData);
}

renderPosts(currentPage, currentData);