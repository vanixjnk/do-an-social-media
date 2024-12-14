$(document).ready(function() {
    $("a.collapsed.csm-ecd1").on("click", function() {
        $(this).closest("li").toggleClass("csm-1199");
    });
});
$(document).ready(function() {
    if (window.innerWidth >= 768) {
        $("aside.csm-6fe5").removeClass("csm-86d1");
        $("section#csm-content").addClass("is-collapse");
        $("section#csm-navbar").addClass("csm-c049");
    }

    $(".toggle button").click(function() {
        $("aside.csm-6fe5").toggleClass("csm-86d1");
        $("section#csm-content").toggleClass("is-collapse");
        $("section#csm-navbar").toggleClass("csm-c049");
    });
});

function noti(status, message, delay = 1500) {
    const statuss = status === 'error' ? 'danger' : status === 'default' ? 'default' : 'success';
    const icon = status === 'error' ?
        '<i class="fad fa-times-circle"></i>' :
        status === 'default' ?
        '<i class="fal fa-bell"></i>' :
        '<i class="fad fa-check-circle"></i>';

    const date = new Date().getTime();
    const toastHTML = `
        <div role="alert" aria-live="assertive" toasts-id="${date}" data-bs-delay="${delay}" aria-atomic="true" class="toast fade show csm-shadow bd-${statuss}">
            <div class="border size rounded shadow-sm">
                <div class="d-flex align-items-center">
                    <div class="p-2 rounded-circle icon-c ${status === 'default' ? 'bg-light' : 'bg-light-' + statuss}">${icon}</div>
                    <div class="ps-3"><span class="fs-14 text-muted">${message}</span></div>
                </div>
            </div>
        </div>`;

    if ($(".toast-container").length === 0) {
        $("body").append('<div class="toast-container position-fixed start-50 p-3"></div>');
    }

    $(".toast-container").append(toastHTML);

    setTimeout(() => {
        $(`[toasts-id="${date}"]`).remove();
        if ($(".toast-container").is(':empty')) {
            $(".toast-container").remove();
        }
    }, delay);
}