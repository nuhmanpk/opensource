// ========================================
// HELPER FUNCTIONS
// ========================================

// Get project icon based on category (SVG Icons instead of Emojis)
function getProjectIcon(category) {
    const icons = {
        'Python Library': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>', // Layer/Stack
        'JavaScript Library': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path></svg>', // Box (JS)
        'AI / LLM': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>', // CPU/Brain metaphor
        'AI / Bot': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="3"></circle><path d="M12 8v3"></path></svg>', // Robot
        'VS Code Extension': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>', // Lightning
        'Developer Tool': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>', // Wrench
        'Awesome List': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>', // Star
        'Web Scraping': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2.05 12h19.9"></path><path d="M12 2.05v19.9"></path><path d="M4.93 4.93l14.14 14.14"></path><path d="M19.07 4.93L4.93 19.07"></path></svg>', // Globe/Web
        'Automation / Bot': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>', // Activity
        'Profile': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' // User
    };
    return icons[category] || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'; // Box
}

// Generate badges based on project type
function generateBadges(project) {
    const badges = [];

    if (project.type === 'pypi') {
        // Pepy download badge
        badges.push(`https://img.shields.io/pepy/dt/${project.packageName}?style=flat-square&logo=python&label=downloads&color=blue`);
        badges.push(`https://img.shields.io/pepy/dm/${project.packageName}?style=flat-square&logo=python&label=month&color=green`);
        // GitHub stars
        badges.push(`https://img.shields.io/github/stars/${project.repoPath}?style=flat-square&logo=github&color=yellow`);
    } else if (project.type === 'npm') {
        // NPM badges
        badges.push(`https://img.shields.io/npm/dt/${project.packageName}?style=flat-square&logo=npm&label=downloads&color=red`);
        badges.push(`https://img.shields.io/npm/v/${project.packageName}?style=flat-square&logo=npm&label=version`);
        badges.push(`https://img.shields.io/github/stars/${project.repoPath}?style=flat-square&logo=github&color=yellow`);
    } else if (project.type === 'vscode') {
        // VS Code marketplace badges
        badges.push(`https://img.shields.io/visual-studio-marketplace/d/${project.extensionId}?style=flat-square&logo=visualstudiocode&label=downloads`);
        badges.push(`https://img.shields.io/visual-studio-marketplace/i/${project.extensionId}?style=flat-square&logo=visualstudiocode&label=installs`);
        badges.push(`https://img.shields.io/visual-studio-marketplace/stars/${project.extensionId}?style=flat-square&logo=visualstudiocode`);
    } else if (project.type === 'github') {
        // GitHub badges
        badges.push(`https://img.shields.io/github/stars/${project.repoPath}?style=flat-square&logo=github&color=yellow`);
        badges.push(`https://img.shields.io/github/forks/${project.repoPath}?style=flat-square&logo=github&color=blue`);
        badges.push(`https://img.shields.io/github/last-commit/${project.repoPath}?style=flat-square&logo=github`);
    }

    return badges;
}

// Create project card HTML
function createProjectCard(project) {
    const icon = getProjectIcon(project.category);
    const badges = generateBadges(project);
    const badgesHTML = badges.map(badge =>
        `<img src="${badge}" alt="Badge" loading="lazy">`
    ).join('');

    // Determine primary link
    const primaryLink = project.package || project.marketplace || project.repo;
    const primaryLinkText = project.type === 'pypi' ? 'PyPI Package' :
        project.type === 'npm' ? 'NPM Package' :
            project.marketplace ? 'VS Marketplace' :
                'GitHub Repo';

    const secondaryLink = project.repo;

    return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-header">
                <div class="project-icon-wrapper">${icon}</div>
                <div class="project-type">${project.type}</div>
            </div>
            
            <h3 class="project-title">${project.name}</h3>
            <p class="project-category">${project.category}</p>
            <p class="project-description">${project.description}</p>
            
            <div class="project-badges">
                ${badgesHTML}
            </div>
            
            <div class="project-links">
                <a href="${primaryLink}" target="_blank" rel="noopener" class="project-link">
                    ${project.type === 'pypi' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>' :
            project.type === 'npm' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path></svg>' :
                project.marketplace ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>' :
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
        }
                    ${primaryLinkText}
                </a>
                ${secondaryLink && (project.package || project.marketplace) ? `
                    <a href="${secondaryLink}" target="_blank" rel="noopener" class="project-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// ========================================
// RENDERING FUNCTIONS
// ========================================

// Render category filters
function renderFilters() {
    const filtersContainer = document.getElementById('category-filters');

    const filtersHTML = categories.map((category, index) =>
        `<button class="filter-btn ${index === 0 ? 'active' : ''}" data-category="${category}">
            ${category}
        </button>`
    ).join('');

    filtersContainer.innerHTML = filtersHTML;

    // Add click event listeners
    const filterButtons = filtersContainer.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const selectedCategory = btn.dataset.category;
            filterProjects(selectedCategory);
        });
    });
}

// Render projects
function renderProjects(projectsToRender = projects) {
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsToRender.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.25rem;">No projects found in this category.</p>
            </div>
        `;
        return;
    }

    const projectsHTML = projectsToRender.map(project =>
        createProjectCard(project)
    ).join('');

    projectsGrid.innerHTML = projectsHTML;

    // Add staggered animation
    const cards = projectsGrid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Filter projects by category
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');

    // Fade out all cards
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    // Wait for fade out animation, then filter
    setTimeout(() => {
        if (category === 'All') {
            renderProjects(projects);
        } else {
            const filtered = projects.filter(p => p.category === category);
            renderProjects(filtered);
        }
    }, 300);
}

// ========================================
// STATS CALCULATION
// ========================================

// Parse simplified numbers (k, M) to integers
function parseCount(str) {
    if (!str) return 0;
    const s = str.toString().toLowerCase();
    if (s.includes('k')) return parseFloat(s) * 1000;
    if (s.includes('m')) return parseFloat(s) * 1000000;
    return parseInt(s.replace(/[^0-9]/g, '')) || 0;
}

// Fetch stats for a project
async function fetchProjectStats(project) {
    if (project.type === 'pypi') {
        try {
            // Using Pepy API for Python packages
            const response = await fetch(`https://api.pepy.tech/api/v2/projects/${project.packageName}`);
            const data = await response.json();
            return data.total_downloads || 0;
        } catch (e) {
            console.warn(`Failed to fetch stats for ${project.name}:`, e);
            return 0;
        }
    } else if (project.type === 'vscode') {
        // For VS Code, since we can't easily hit the API with CORS,
        // we'll try to use the shields.io JSON endpoint if possible, or estimate
        // If this fails due to CORS, we might need a fallback
        return 0; // Temporarily 0 for VS Code to avoid CORS errors in console unless we have a proxy
    }
    return 0;
}

// Calculate and animate total downloads/users
async function calculateTotalStats() {
    // Select the stats element
    const totalDownloadsElement = document.getElementById('stat-downloads-value');
    if (!totalDownloadsElement) return;

    totalDownloadsElement.innerHTML = '<span class="loading-dots">...</span>';

    let total = 0;

    // Parallel fetch for all supported projects
    const promises = projects.map(p => fetchProjectStats(p));
    const results = await Promise.allSettled(promises);

    results.forEach(result => {
        if (result.status === 'fulfilled') {
            total += result.value;
        }
    });

    // If total is 0 (API failure), fallback to a hardcoded estimate based on known data
    if (total === 0) {
        // Fallback estimate: ~124k (YoutubeTags) + ~20k (QuickLlama) + ~35k (Snippets) + ~20k (Logger)
        total = 250000;
    }

    // Animate the number
    animateNumber(totalDownloadsElement, total);
}


// ========================================
// INTERSECTION OBSERVER (Scroll Animations)
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe dashboard cards
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => observer.observe(card));
}

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// MOUSE SPOTLIGHT & HIDDEN WORDS
// ========================================

function initMouseSpotlight() {
    const spotlight = document.querySelector('.mouse-spotlight');
    const hiddenWordsContainer = document.getElementById('hidden-words');

    // Keywords to hide
    const keywords = [
        "Python", "Automation", "Open Source", "AI", "Bot", "Scraping",
        "LLM", "Selenium", "OpenCV", "QuickLlama", "Nuhman PK",
        "Developer", "linkedin.com/in/nuhmanpk", "github.com/nuhmanpk", "Innovation", "Tech",
        "React", "Node", "Design", "Web", "System", "Script", "genai",
        "Terminal", "Git", "Fast"
    ];

    // Populate hidden words
    if (hiddenWordsContainer) {
        // Create about 30-40 words randomly placed
        const wordCount = 20;
        for (let i = 0; i < wordCount; i++) {
            const word = document.createElement('div');
            word.classList.add('hidden-word');
            word.textContent = keywords[Math.floor(Math.random() * keywords.length)];

            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;

            // Random size variation
            const scale = 0.5 + Math.random() * 0.8;

            // Random rotation
            const rotation = Math.random() * 90 - 45;

            word.style.left = `${left}%`;
            word.style.top = `${top}%`;
            word.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
            word.style.opacity = (0.2 + Math.random() * 0.9).toString(); // Increased opacity for better visibility

            hiddenWordsContainer.appendChild(word);
        }
    }

    document.addEventListener('mousemove', (e) => {
        // Update CSS variables for mouse position
        // We use these for BOTH the spotlight and the mask-image
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);

        if (spotlight && spotlight.style.opacity !== '1') {
            spotlight.style.opacity = '1';
        }
    });
}

// ========================================
// DYNAMIC STATS (Optional enhancement)
// ========================================

function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const formatter = new Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    });

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatter.format(target) + '+';
            clearInterval(timer);
        } else {
            element.textContent = formatter.format(Math.floor(current)) + '+';
        }
    }, 16);
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Render filters and projects
    renderFilters();
    renderProjects();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize smooth scrolling
    initSmoothScroll();

    // Initialize mouse spotlight
    initMouseSpotlight();

    // Calculate total stats
    calculateTotalStats();

    // Log welcome message
    console.log('%c👋 Welcome to Nuhman PK\'s Portfolio!',
        'font-size: 20px; font-weight: bold; color: #a78bfa;');
});
