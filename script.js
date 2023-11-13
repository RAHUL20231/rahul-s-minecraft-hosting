document.addEventListener('DOMContentLoaded', function () {
    // Typewriter effect
    const typewriter = document.getElementById('typewriter');
    const text = typewriter.innerText;
    typewriter.innerText = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.innerHTML = text[i];
        typewriter.appendChild(span);
    }

    // Sticky navigation
    window.onscroll = function () {
        stickyNav();
    };

    const navbar = document.querySelector('.sticky');
    const sticky = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    }

    // Get reference to the search form and plans
    const searchForm = document.querySelector('#search form');
    const plans = document.querySelectorAll('.plan');

    // Add event listener to the search form
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const searchTerm = event.target.elements.search.value.toLowerCase(); // Get the search term

        // Loop through plans and show/hide based on the search term
        plans.forEach(function (plan) {
            const planId = plan.id.toLowerCase();
            if (planId.includes(searchTerm)) {
                plan.style.display = 'block'; // Show the plan
            } else {
                plan.style.display = 'none'; // Hide the plan
            }
        });
    });
});
