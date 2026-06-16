// Modal functionality for image gallery
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.getElementById('imageModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Force portrait orientation on video fullscreen
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement) {
            screen.orientation.lock('portrait').catch(() => {});
        } else {
            screen.orientation.unlock();
        }
    });
});

// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');

    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpen.classList.add('hidden');
        menuClose.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpen.classList.remove('hidden');
        menuClose.classList.add('hidden');
    }
}
