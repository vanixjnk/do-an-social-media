// JavaScript để xử lý sự kiện khi nhấp vào ảnh
function chooseFile() {
    document.getElementById("fileInput").click();
}

function showSelectedFiles() {
    var input = document.getElementById("fileInput");
    var files = input.files;

    var imagePreviewsContainer = document.getElementById("imagePreviews");
    imagePreviewsContainer.innerHTML = ""; // Xóa các ảnh xem trước hiện tại

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = (function(file) {
            return function(e) {
                var imagePreview = document.createElement("img");
                imagePreview.className = "image-preview";
                imagePreview.src = e.target.result;

                imagePreviewsContainer.appendChild(imagePreview);
            };
        })(file);

        reader.readAsDataURL(file);
    }

    if (files.length > 0) {
        imagePreviewsContainer.style.display = "block"; // Hiển thị phần tử khi đã chọn ảnh
    } else {
        imagePreviewsContainer.style.display = "none"; // Ẩn phần tử khi chưa chọn ảnh
    }
}

$(document).ready(function() {
    $(document).on("submit", "form[submit-ajax]", function(e) {
        e.preventDefault();
        let _this = this;
        let url = $(_this).attr("action");
        let method = $(_this).attr("method");
        let enctype = "multipart/form-data";
        let href = $(_this).attr("href");
        let formData = new FormData(_this); // Sử dụng FormData để gửi dữ liệu hình ảnh
        let button = $(_this).find("button[type=submit]");
        if (button.attr("order")) {
            Swal.fire({
                title: "Xác Nhận!",
                text: button.attr("order"),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đồng Ý",
                cancelButtonText: "Thoát",
            }).then((result) => {
                if (result.isConfirmed) {
                    submitForm(url, method, href, formData, button);
                }
            });
        } else {
            submitForm(url, method, href, formData, button);
        }
    });
});

function reload(page) {
    page += (page.includes("?") ? "&" : "?") + "cache=" + Date.now();
    $.ajax({
        url: '/get/' + page,
        method: 'GET',
        success: function(data) {
            $('#content').html(data);
        },
        error: function() {
            alert('Không thể tải trang.');
        }
    });
}

function submitForm(url, method, href, formData, button) {
    let textButton = button.html().trim();
    let setting = {
        type: method,
        url,
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false, // Không đặt header Content-Type
        beforeSend: function() {
            button
                .prop("disabled", true)
                .html('<i class="fas fa-spinner fa-spin"></i> Đang xử lý...');
        },
        complete: function() {
            button.prop("disabled", false).html(textButton);
        },
        success: function(data) {
            if (data.error) {
                cuteToast({
                    type: "error",
                    message: data.msg,
                    timer: 50000
                });
            } else {
                cuteToast({
                    type: "success",
                    message: data.msg,
                    timer: 50000
                });
                if (!data.href) {
                    reload('home');
                } else {
                    reload(data.href);
                }
            }
        }
    };

    $.ajax(setting);
}