async function loadNavbar() {
    try {
        const response = await fetch('/layouts/client/navbar/');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('navbar').innerHTML = html;
            let currentPath = window.location.pathname.replace(/\/+$/, '');
            document.querySelectorAll(".navbar-main li").forEach((li) => {
                const link = li.querySelector("a");
                const linkPath = link.getAttribute("href").replace(/\/+$/, '');
                if (linkPath === currentPath) {
                    li.classList.add("active");
                    link.classList.add("nuxt-link-exact-active", "nuxt-link-active");
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

loadNavbar();