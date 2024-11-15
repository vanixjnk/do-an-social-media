const users = [{
        id: 1,
        username: "vanixjnk",
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        email: "vanixjnk@gmail.com",
        status: "Hoạt động",
        time: "1 giờ trước"
    },
    {
        id: 2,
        username: "dohung",
        fullname: "Do Hung",
        avatar: "/assets/img/avatar/dohungavt.jpg",
        email: "dohung@gmail.com",
        status: "Hoạt động",
        time: "2 ngày trước"
    },
    {
        id: 3,
        username: "minhlam",
        fullname: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        email: "minhlam@gmail.com",
        status: "Hoạt động",
        time: "1 giờ trước"
    },
    {
        id: 4,
        username: "trieuphan",
        fullname: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        email: "trieuphan@gmail.com",
        status: "Hoạt động",
        time: "3 giờ trước"
    },
    {
        id: 5,
        username: "vudang",
        fullname: "Dang Truong Vu",
        avatar: "/assets/img/avatar/vudang.jpg",
        email: "vudang@gmail.com",
        status: "Hoạt động",
        time: "4 giờ trước"
    },
    {
        id: 6,
        username: "elonmusk",
        fullname: "Elon Musk",
        avatar: "/assets/img/avatar/elonmusk.jpg",
        email: "elonmusk@gmail.com",
        status: "Hoạt động",
        time: "5 giờ trước"
    },
    {
        id: 7,
        username: "hcmue",
        fullname: "HCMUE",
        avatar: "/assets/img/avatar/hcmue.jpg",
        email: "hcmue@gmail.com",
        status: "Hoạt động",
        time: "6 giờ trước"
    },
    {
        id: 8,
        username: "vietphuong",
        fullname: "Viet Phuong",
        avatar: "/assets/img/avatar/vietphuong.jpg",
        email: "vietphuong@gmail.com",
        status: "Hoạt động",
        time: "7 giờ trước"
    },
    {
        id: 9,
        username: "trump",
        fullname: "Donald Trump",
        avatar: "/assets/img/avatar/trump.jpg",
        email: "trump@gmail.com",
        status: "Hoạt động",
        time: "8 giờ trước"
    },
    {
        id: 10,
        username: "minhhien",
        fullname: "Minh Hien",
        avatar: "/assets/img/avatar/minhhien.jpg",
        email: "minhhien@gmail.com",
        status: "Hoạt động",
        time: "9 giờ trước"
    },
    {
        id: 11,
        username: "zuck",
        fullname: "Mark Zuckerberg",
        avatar: "/assets/img/avatar/zuck.jpg",
        email: "markzuckerberg@gmail.com",
        status: "Hoạt động",
        time: "10 giờ trước"
    }
]

const usersPerPage = 10;
let currentPage = 1;
let currentData = users;

function searchUsers() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    currentData = users.filter(user =>
        user.username.toLowerCase().includes(searchInput) ||
        user.fullname.toLowerCase().includes(searchInput) ||
        user.email.toLowerCase().includes(searchInput)
    );
    currentPage = 1;
    renderUsers(currentPage, currentData);
}

function renderUsers(page, data = currentData) {
    const userDatatableBody = document.getElementById('usersDataTable');
    userDatatableBody.innerHTML = '';

    const start = (page - 1) * usersPerPage;
    const end = start + usersPerPage;
    const usersToShow = data.slice(start, end);

    usersToShow.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>
                <button type="button" class="btn btn-primary btn-action" data-bs-toggle="modal" data-bs-target="#showEditModal_${user.id}">
                    <i class="fa fa-pencil-alt"></i>
                </button>
                <div class="modal" id="showEditModal_${user.id}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit <b class="text-primary">#${user.fullname}</b></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="fullname">Full name:</label>
                                    <input type="text" class="form-control" placeholder="Enter your full name" value="${user.fullname}">
                                </div>
                                <div class="form-group">
                                    <label for="username">Username:</label>
                                    <input type="text" class="form-control" placeholder="Enter your username" value="${user.username}">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address:</label>
                                    <input type="email" class="form-control" placeholder="Enter your email address" value="${user.email}">
                                </div>
                                <div class="alert alert-danger mt-2">
                                    Make sure to check it carefully before updating the user!
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-main btn-primary">Update</button>
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-danger btn-action" onclick="deleteUser()">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
            <td>${user.username}</td>
            <td>
                <div class="d-flex align-items-center">
                    <img width="24" height="24" alt="" src="${user.avatar}" class="img-navbar rounded-circle shadow-sm me-1">
                    <div class="ms-1">${user.fullname}</div>
                </div>
            </td>
            <td>${user.email}</td>
            <td><span class="badge bg-success">${user.status}</span></td>
            <td>${user.time}</td>
        `;
        userDatatableBody.appendChild(row);
    });

    renderPagination(data);
}

function renderPagination(data = currentData) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / usersPerPage);

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
    renderUsers(currentPage, currentData);
}

renderUsers(currentPage, currentData);