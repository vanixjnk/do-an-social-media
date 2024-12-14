async function loadSidebar() {
    try {
        const response = await fetch('/layouts/advertiser/sidebar/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('sidebar').innerHTML = html;
            let currentPath = window.location.pathname.replace(/\/+$/, '');
            document.querySelectorAll(".list-unstyled li").forEach((li) => {
                const link = li.querySelector("a");
                const linkPath = link.getAttribute("href").replace(/\/+$/, '');
                if (linkPath === currentPath) {
                    li.classList.add("vanidev");
                    link.classList.add("csm-1918", "csm-link-active");
                } else {
                    li.classList.remove("vanidev");
                    link.classList.remove("csm-1918", "csm-link-active");
                }
            });
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadSidebar();