// Intro Animation Logic
const introOverlay = document.querySelector('.intro-overlay');
const greetings = document.querySelectorAll('.greeting-text');

// Function to handle the intro animation sequence
const handleIntroAnimation = () => {
    console.log('Starting intro animation');
    
    // Ensure the overlay is visible
    introOverlay.style.display = 'flex';
    introOverlay.style.opacity = '1';
    
    // Log each greeting text for debugging
    greetings.forEach((greeting, index) => {
        console.log(`Greeting ${index + 1}: ${greeting.textContent}`);
    });
    
    // After all greetings are shown (8s total), fade out the overlay
    setTimeout(() => {
        console.log('Fading out overlay');
        introOverlay.style.animation = 'fadeOut 0.5s ease-out forwards';
    }, 8000);
};

// Start the animation sequence when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    handleIntroAnimation();
});

// Backup check in case DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM already loaded, starting animation');
    handleIntroAnimation();
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Meme Items
const imageMemesItems = [
    {
        image: './img/Memes for Khoriya.png',
        title: 'Khoriya Memes'
    },
    {
        image: './img/memes2.png',
        title: 'Khoriya Memes'
    },

];

// Video Memes Items
const videoMemesItems = [
    {
        video: './img/memes_vid1.mp4',
        title: 'Meme Video 1'
    },
    {
        video: './img/memesvid24.mp4',
        title: 'Meme Video 2'
    },
    {
        video: './img/memesvid3.mp4',
        title: 'Meme Video 3'
    }
];

// Update Gallery Items
const galleryItems = [
    {
        image: './img/Aankhi.png',
        title: 'Aankhi'
    },
    {
        image: './img/chelikoHatiya.png',
        title: 'Cheliko Hatiya'
    },
    {
        image: './img/hatiya.png',
        title: 'Hatiya'
    },
    {
        image: './img/paper bag-final.png',
        title: 'Paper Bag Design'
    },
    {
        image: './img/Untitled-85.jpg',
        title: 'Design Project'
    },
    {
        image: './img/खोरिया को. (1).png',
        title: 'Khoriya Design'
    },
    {
        image: './img/EverestBaseCamp.png',
        title: 'Everest Base Camp'
    },
    {
        image: './img/Moksha at Muktinath.png',
        title: 'Moksha at Muktinath'
    },
    {
        image: './img/Boots andCAamps1.png',
        title: 'Boots and Camps'
    }
];

// Populate Gallery
const galleryGrid = document.querySelector('.gallery-grid');
galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-item-overlay">
            <h3>${item.title}</h3>
        </div>
    `;
    galleryGrid.appendChild(galleryItem);
});

// Populate Image Memes
const memesGrid = document.querySelector('.memes-grid');
imageMemesItems.forEach(item => {
    const memeItem = document.createElement('div');
    memeItem.className = 'gallery-item';
    memeItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-item-overlay">
            <h3>${item.title}</h3>
        </div>
    `;
    memesGrid.appendChild(memeItem);
});

// Populate Video Memes
const videoMemesGrid = document.querySelector('.video-memes-grid');
videoMemesItems.forEach(item => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
        <video loop playsinline controls>
            <source src="${item.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="video-item-overlay">
            <h3>${item.title}</h3>
        </div>
    `;

    const video = videoItem.querySelector('video');
    
    // Play/Pause on hover
    videoItem.addEventListener('mouseenter', () => {
        video.play();
        // Try to unmute - this may not work on all browsers due to autoplay policies
        video.muted = false;
    });
    
    videoItem.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

    // Add click handler to toggle mute
    videoItem.addEventListener('click', (e) => {
        if (!e.target.closest('video')) {
            video.muted = !video.muted;
        }
    });

    videoMemesGrid.appendChild(videoItem);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Organizations Items
const organizationsItems = [
    {
        logo: './img/logo1.png',
        name: 'King\'s College',
        role: 'BSCS Student',
        period: '2022 - Present'
    },
    {
        logo: './img/logo2.png',
        name: 'Khoriya',
        role: 'Digital Artist & Designer',
        period: '2021 - Present'
    },
    {
        logo: './img/logo3.png',
        name: 'Freelance',
        role: 'Web Developer',
        period: '2023 - Present'
    }
];

// Ensure DOM is loaded before populating organizations
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting to populate organizations');
    
    // Populate Organizations
    const orgGrid = document.querySelector('.org-grid');
    console.log('Found org-grid:', orgGrid);

    if (orgGrid) {
        console.log('Starting to populate organizations');
        organizationsItems.forEach((item, index) => {
            console.log(`Creating org item ${index + 1}:`, item);
            const orgItem = document.createElement('div');
            orgItem.className = 'org-item';
            orgItem.innerHTML = `
                <img src="${item.logo}" alt="${item.name} Logo" onerror="this.style.display='none'">
                <div class="org-item-overlay">
                    <h3>${item.name}</h3>
                    <p class="role">${item.role}</p>
                    <p class="period">${item.period}</p>
                </div>
            `;
            orgGrid.appendChild(orgItem);
        });
    } else {
        console.error('Could not find .org-grid element');
    }
}); 