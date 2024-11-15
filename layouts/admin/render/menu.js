async function loadMenu() {
    try {
        const response = await fetch('/layouts/admin/menu/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('menu').innerHTML = html;

            const currentPath = window.location.pathname.replace(/\/+$/, '');

            document.querySelectorAll(".seller-menu li a").forEach((link) => {
                const linkPath = link.getAttribute("href").replace(/\/+$/, '');
                const li = link.closest("li");

                if (linkPath === currentPath) {
                    li.classList.add("active");
                    link.classList.add("nuxt-link-exact-active", "nuxt-link-active");
                } else if (currentPath.startsWith(linkPath) && linkPath !== "/") {
                    link.classList.add("nuxt-link-active");
                    li.classList.remove("active");
                } else {
                    li.classList.remove("active");
                    link.classList.remove("nuxt-link-exact-active", "nuxt-link-active");
                }
            });
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadMenu();