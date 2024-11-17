const comments = [{
    id: 1,
    username: "vanixjnk",
    fullname: "Nguyen Dinh Bao",
    avatar: "/assets/img/avatar/vani2.jpg",
    comment: "I have a new car",
    image: "https://kientrucvadoisong.net/Upload/News/porsche-viet-nam-gioi-thieu-dong-xe-cayenne-moi.jpg",
    url: "localhost",
    time: "1 giờ trước"
}, {
    id: 2,
    username: "dohung",
    fullname: "Do Hung",
    avatar: "/assets/img/avatar/dohungavt.jpg",
    comment: "Just got a new job",
    image: null,
    url: "localhost",
    time: "2 giờ trước"
}, {
    id: 3,
    username: "trieuphan",
    fullname: " Trieu Phan",
    avatar: "/assets/img/avatar/trieuphan.jpg",
    comment: "Excited for the weekend",
    image: null,
    url: "localhost",
    time: "3 giờ trước"
}, {
    id: 4,
    username: "minhlam",
    fullname: "Minh Lam",
    avatar: "/assets/img/avatar/minhlam.jpg",
    comment: "Just finished a project",
    image: null,
    url: "localhost",
    time: "4 giờ trước"
}, {
    id: 5,
    username: "minhhien",
    fullname: "Minh Hien",
    avatar: "/assets/img/avatar/minhhien.jpg",
    comment: "Planning a trip",
    image: "https://www.yardbarker.com/media/4/2/422c917a5d3d306a7b992a5dd256dbe25916d183/thumb_16x9/20-essential-tips-successful-road-trip.jpg?v=1",
    url: "localhost",
    time: "5 giờ trước"
}, {
    id: 6,
    username: "vietphuong",
    fullname: "Viet Phuong",
    avatar: "/assets/img/avatar/vietphuong.jpg",
    comment: "New phone, who dis?",
    image: "https://i.insider.com/669a718f80d4d5da13d5524a?width=700",
    url: "localhost",
    time: "6 giờ trước"
}, {
    id: 7,
    username: "vudang",
    fullname: "Vu Dang",
    avatar: "/assets/img/avatar/vudang.jpg",
    comment: "Just learned something new",
    image: "https://cloud.z.com/vn/wp-content/uploads/2023/05/photo-1619410283995-43d9134e7656.jpeg",
    url: "localhost",
    time: "7 giờ trước"
}]

const commentsPerPage = 10;
let currentPage = 1;
let currentData = comments;

function searchComments() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    currentData = comments.filter(comment =>
        comment.username.toLowerCase().includes(searchInput) ||
        comment.fullname.toLowerCase().includes(searchInput) ||
        comment.comment.toLowerCase().includes(searchInput)
    );
    currentPage = 1;

    if (currentData.length === 0) {
        const commentDatatableBody = document.getElementById('commentsDataTable');
        commentDatatableBody.innerHTML = `
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
        renderComments(currentPage, currentData);
    }
}

function renderComments(page, data = currentData) {
    const commentDatatableBody = document.getElementById('commentsDataTable');
    commentDatatableBody.innerHTML = '';

    const start = (page - 1) * commentsPerPage;
    const end = start + commentsPerPage;
    const commentsToShow = data.slice(start, end);

    commentsToShow.forEach((comment) => {
                const row = document.createElement("tr");

                row.innerHTML = `
        <td>${comment.id}</td>
        <td>
            <button type="button" class="btn btn-light btn-action" data-bs-toggle="modal" data-bs-target="#viewcomment_${comment.id}">
                <i class="fa fa-eye"></i>
            </button>
            <div class="modal" id="viewcomment_${comment.id}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">View <b class="text-primary">#${comment.id}</b></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p class="comment-content my-2 fs-14 text-pre-wrap">${comment.comment}</p>
                                ${comment.image ? `<img src="${comment.image}" class="card-img-top" alt="${comment.id}">` : ""}
                            <button type="button" class="btn btn-main w-100 mt-3" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-danger btn-action" onclick="deleteUser()">
                <i class="fa fa-trash"></i>
            </button>
        </td>
        <td>${comment.username}</td>
        <td>
            <div class="d-flex align-items-center">
                <img width="24" height="24" alt="" src="${comment.avatar}" class="img-navbar rounded-circle shadow-sm me-1">
                <div class="ms-1">${comment.fullname}</div>
            </div>
        </td>
        <td>${comment.comment}</td>
        <td>
            <span class="badge bg-teal">${comment.url}</span>
        </td>
        <td>${comment.time}</td>
    `;
        commentDatatableBody.appendChild(row);
    });

    renderPagination(data);
}


function renderPagination(data = currentData) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / commentsPerPage);

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
    renderComments(currentPage, currentData);
}


function goToPage(page) {
currentPage = page;
renderComments(currentPage, currentData);

}

renderComments(currentPage, currentData);