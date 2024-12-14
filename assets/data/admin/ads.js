const ads = [{
        id: 1,
        placer: "Nguyen Dinh Bao",
        avatar: "/assets/img/avatar/vani2.jpg",
        startTime: "2024-01-01 00:00:00",
        endTime: "2024-01-01 00:00:00",
        content: "Content",
        image: "/assets/img/ads/ads1.jpg",
        price: 1000000,
        status: "Active",
    },
    {
        id: 2,
        placer: "Minh Lam",
        avatar: "/assets/img/avatar/minhlam.jpg",
        startTime: "2024-01-01 00:00:00",
        endTime: "2024-01-01 00:00:00",
        content: "Content",
        image: "/assets/img/ads/ads2.jpg",
        price: 1000000,
        status: "Active",
    },
    {
        id: 3,
        placer: "Trieu Phan",
        avatar: "/assets/img/avatar/trieuphan.jpg",
        startTime: "2024-01-01 00:00:00",
        endTime: "2024-01-01 00:00:00",
        content: "Content",
        image: "/assets/img/ads/ads3.jpg",
        price: 1000000,
        status: "Active",
    },
    {
        id: 4,
        placer: "Dang Truong Vu",
        avatar: "/assets/img/avatar/vudang.jpg",
        startTime: "2024-01-01 00:00:00",
        endTime: "2024-01-01 00:00:00",
        content: "Content",
        image: "/assets/img/ads/ads4.jpg",
        price: 1000000,
        status: "Active",
    }
];

const adsPerPage = 10;
let currentPage = 1;
let currentData = ads;

function searchAds() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    currentData = ads.filter(user =>
        user.placer.toLowerCase().includes(searchInput) ||
        user.startTime.toLowerCase().includes(searchInput) ||
        user.endTime.toLowerCase().includes(searchInput) ||
        user.price.toLowerCase().includes(searchInput) ||
        user.status.toLowerCase().includes(searchInput)
    );
    currentPage = 1;

    if (currentData.length === 0) {
        const adsDatatableBody = document.getElementById('adsDataTable');
        adsDatatableBody.innerHTML = `
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
        renderAds(currentPage, currentData);
    }
}

function renderAds(page, data = currentData) {
    const adsDatatableBody = document.getElementById('adsDataTable');
    adsDatatableBody.innerHTML = '';

    const start = (page - 1) * adsPerPage;
    const end = start + adsPerPage;
    const adsToShow = data.slice(start, end);

    adsToShow.forEach(ad => {
                const row = document.createElement('tr');
                row.innerHTML = `
    <td>${ad.id}</td>
    <td>
        <button type="button" class="btn btn-light btn-action" data-bs-toggle="modal" data-bs-target="#viewAd_${ad.id}">
                <i class="fa fa-eye"></i>
            </button>
            <div class="modal" id="viewAd_${ad.id}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">View <b class="text-primary">#${ad.id}</b></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p class="post-content my-2 fs-14 text-pre-wrap">${ad.content}</p>
                                ${ad.image ? `<img src="${ad.image}" class="card-img-top" alt="${ad.id}">` : ""}
                            <button type="button" class="btn btn-main w-100 mt-3" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        <button type="button" class="btn btn-danger btn-action" onclick="deleteAd()">
            <i class="fa fa-trash"></i>
        </button>
    </td>
    <td>
        <div class="d-flex align-items-center">
            <img width="24" height="24" alt="" src="${ad.avatar}" class="img-navbar rounded-circle shadow-sm me-1">
            <div class="ms-1">${ad.placer}</div>
        </div>
    </td>
    <td>${ad.startTime}</td>
    <td>${ad.endTime}</td>
    <td>${ad.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
    <td><span class="badge bg-${ad.status === 'Active' ? 'success' : 'danger'}">${ad.status}</span></td>
`;
        adsDatatableBody.appendChild(row);
    });

    renderPagination(data);
}

function renderPagination(data = currentData) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / adsPerPage);

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
    renderAds(currentPage, currentData);
}

renderAds(currentPage, currentData);