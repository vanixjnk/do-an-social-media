const violations = [{
        id: 1,
        username: "vanixjnk",
        fullname: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        email: "vanixjnk@gmail.com",
        reasons: "Spamming",
        status: "Warning",
        time: "1 giờ trước"
    },
    {
        id: 2,
        username: "dohung",
        fullname: "Do Hung",
        avatar: "/assets/img/avatar/dohungavt.jpg",
        email: "dohung@gmail.com",
        reasons: "Racist",
        status: "Banned",
        time: "2 ngày trước"
    },
];

const violationsPerPage = 10;
let currentPage = 1;
let currentData = violations;

function searchViolations() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    currentData = violations.filter(violation =>
        violation.username.toLowerCase().includes(searchInput) ||
        violation.fullname.toLowerCase().includes(searchInput) ||
        violation.email.toLowerCase().includes(searchInput) ||
        violation.reasons.toLowerCase().includes(searchInput)
    );
    currentPage = 1;

    if (currentData.length === 0) {
        const violationsDatatableBody = document.getElementById('violationsDataTable');
        violationsDatatableBody.innerHTML = `
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
        renderViolations(currentPage, currentData);
    }
}

function renderViolations(page, data = currentData) {
    const violationsDatatableBody = document.getElementById('violationsDataTable');
    violationsDatatableBody.innerHTML = '';

    const start = (page - 1) * violationsPerPage;
    const end = start + violationsPerPage;
    const violationsToShow = data.slice(start, end);

    violationsToShow.forEach(violation => {
        let statusClass = "";
        switch (violation.status) {
            case "Warning":
                statusClass = "bg-warning";
                break;
            case "Banned":
                statusClass = "bg-danger";
                break;
            default:
                statusClass = "bg-secondary";
        }
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${violation.id}</td>
        <td>
            <button type="button" class="btn btn-main btn-action" onclick="deleteUser()">
                <i class="fa fa-sensor-alert"></i>
            </button>
            <button type="button" class="btn btn-danger btn-action" onclick="deleteUser()">
                <i class="fa fa-times"></i>
            </button>
        </td>
        <td>${violation.username}</td>
        <td>
            <div class="d-flex align-items-center">
                <img width="24" height="24" alt="" src="${violation.avatar}" class="img-navbar rounded-circle shadow-sm me-1">
                <div class="ms-1">${violation.fullname}</div>
            </div>
        </td>
        <td>${violation.email}</td>
        <td>${violation.reasons}</td>
        <td><span class="badge ${statusClass}">${violation.status}</span></td>
        <td>${violation.time}</td>
    `;
        violationsDatatableBody.appendChild(row);
    });

    renderPagination(data);
}

function renderPagination(data = currentData) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / violationsPerPage);

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
    renderViolations(currentPage, currentData);
}

renderViolations(currentPage, currentData);