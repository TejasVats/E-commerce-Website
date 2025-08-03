const navbarWishlistCount = document.querySelector('.wishlist-count');

// Attach to every product card wishlist button
document.querySelectorAll('.wishlist-btn').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.wishlist-icon');

    // Toggle filled/outline icon
    if (icon.getAttribute('name') === 'heart-outline') {
      icon.setAttribute('name', 'heart');
    } else {
      icon.setAttribute('name', 'heart-outline');
    }

    // Increment navbar count only if adding
    if (icon.getAttribute('name') === 'heart') {
      navbarWishlistCount.textContent = parseInt(navbarWishlistCount.textContent) + 1;
    } else {
      // Optional: Decrement if un-wishlist
      navbarWishlistCount.textContent = Math.max(0, parseInt(navbarWishlistCount.textContent) - 1);
    }
  });
});


// JS to Switch Content in User Profile
const menu = document.getElementById('sidebarMenu');
const sections = {
  account: document.getElementById('section-account'),
  security: document.getElementById('section-security'),
  privacy: document.getElementById('section-privacy'),
  apps: document.getElementById('section-apps'),
};

menu.addEventListener('click', function (e) {
  if (e.target && e.target.dataset.section) {
    // Remove 'active' from all buttons
    Array.from(menu.children).forEach(btn => btn.classList.remove('active'));
    // Add 'active' to clicked button
    e.target.classList.add('active');

    // Hide all sections
    Object.values(sections).forEach(sec => sec.style.display = 'none');
    // Show selected section
    const selId = e.target.dataset.section;
    sections[selId].style.display = 'block';
  }
});