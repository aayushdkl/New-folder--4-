document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu-link');
    const parentContent = document.getElementById('parentContent');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageURL = e.target.getAttribute('href');

            fetch(pageURL)
                .then(response => response.text())
                .then(html => {
                    parentContent.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error fetching the page: ', error);
                });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    const profileMenu = document.getElementById('profileMenu');

    profileImage.addEventListener('click', function() {
        profileMenu.style.display = (profileMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Hide the profile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!profileImage.contains(event.target)) {
            profileMenu.style.display = 'none';
        }
    });

    // Implement actions for view profile and logout
    const viewProfile = document.getElementById('viewProfile');
    const logout = document.getElementById('logout');

    viewProfile.addEventListener('click', function(e) {
        e.preventDefault();
        // Add functionality to view profile
        console.log('View Profile clicked');
    });

    logout.addEventListener('click', function(e) {
        e.preventDefault();
        // Add functionality for logout
        console.log('Logout clicked');
    });
});
