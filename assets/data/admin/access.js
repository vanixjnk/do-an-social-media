const access = [{
        id: 1,
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        role: "Developer",
    },
    {
        id: 2,
        fullname: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        role: "Content Management",
    },
    {
        id: 3,
        fullname: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        role: "Analytics and Reports",
    },
    {
        id: 4,
        fullname: "Dang Truong Vu",
        avatar: "/assets/img/avatar/vudang.jpg",
        role: "Configurations",
    }
];

const usersPerPage = 10;
let currentPage = 1;
let currentData = access;

function searchAccessUsers() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    currentData = access.filter(user =>
        user.username.toLowerCase().includes(searchInput) ||
        user.fullname.toLowerCase().includes(searchInput) ||
        user.email.toLowerCase().includes(searchInput) ||
        user.role.toLowerCase().includes(searchInput)
    );
    currentPage = 1;

    if (currentData.length === 0) {
        const userDatatableBody = document.getElementById('usersDataTable');
        userDatatableBody.innerHTML = `
        <tr>
            <td colspan="5">
                <div class="text-center my-4 mt-3">
                    <div class="icon"><i class="fa-7x fad fa-engine-warning text-primary"></i></div>
                    <h4 class="fw-bold my-2 mt-3">No result</h4>
                    <p class="mb-0 text-muted fs-14">
                        Please check again!
                    </p>
                </div>
            </td>
        </tr>
    `;
        document.querySelector('.pagination').innerHTML = '';
    } else {
        renderAccessUsers(currentPage, currentData);
    }
}

function renderAccessUsers(page, data = currentData) {
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
                                <label for="role">Role:</label>
                                <select id="role" name="role" class="form-control">
                                    <option value="1">Developer</option>
                                    <option value="2">Content Management</option>
                                    <option value="3">Analytics and Reports</option>
                                    <option value="4">Configurations</option>
                                </select>
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
        <td>
            <div class="d-flex align-items-center">
                <img width="24" height="24" alt="" src="${user.avatar}" class="img-navbar rounded-circle shadow-sm me-1">
                <div class="ms-1">${user.fullname}</div>
            </div>
        </td>
        <td>${user.role}</td>
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
    renderAccessUsers(currentPage, currentData);
}

renderAccessUsers(currentPage, currentData);