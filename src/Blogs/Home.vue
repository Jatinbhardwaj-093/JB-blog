<template>
    <div class="flex">
    <!-- Content -->
    <div class="w-[60vw] h-screen p-4 border-x-2 border-green-300 bg-grid">
        <h1 class="text-4xl font-bold my-4 font-raleway text-green-600">About Me</h1>
        <p class="mb-2 font-semibold font-merriweather">
            Hello! I’m Jatin Bhardwaj, a Data Science student at IIT-Madras. My passion lies in mathematics,
            computers and psychology.
        </p>
        <p class="mb-6  font-semibold font-merriweather"> 
            This website is a documentation of my learning journey — the projects I’m working on, the new concepts I’m
            discovering.
            Feel free to explore my blogs and resources. If you have any questions, suggestions, or just want to
            connect, don’t hesitate to reach out!
        </p>

        <!-- Social links -->
        <div class="social-links flex items-center gap-y-4 p-4">
            <a href="https://www.linkedin.com/in/jatin-bhardwaj-b5962921a/" class="social-link linkedin">
                <svg fill="#4b5563" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                    <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Jatinbhardwaj-093" class="social-link github">
                <svg fill="#4b5563" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                    <path
                        d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
            </a>
            <a href="https://x.com/Jatin0932" class="social-link twitter">
                <svg fill="#4b5563" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter</span>
            </a>
            <a :href="`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=bhardwajjatin093@gmail.com&su=${encodeURIComponent(
                'Hello'
            )}&body=${encodeURIComponent('I wanted to ask about...')}`" target="_blank" rel="noopener noreferrer"
                class="social-link gmail">
                <svg fill="#4b5563" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                    <path
                        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z">
                    </path>
                </svg>
                <span>Gmail</span>
            </a>
            <a href="https://jatinbhardwaj-093.github.io/JB-Portfolio/" class="social-link link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 14 14">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                </svg>
                <span>Portfolio</span>
            </a>
        </div>
    </div>
    <!-- Minimap -->
    <div class="h-screen w-[20vw] sticky top-0 bg-gray-200"></div>
</div>
</template>

<style scoped>
.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    color: #4b5563;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: .5rem;
    transition: all 0.3s ease;
}

.social-link svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
    fill: #4b5563;
}

.social-link span {
    position: absolute;
    bottom: -25px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    color: #4b5563;
    font-weight: 700;
    font-size: .9rem;
    pointer-events: none;
}

.social-link:hover span {
    opacity: 1;
    visibility: visible;
}

.social-link.github:hover {
    background: #171515;
}

.social-link.github:hover svg {
    fill: #fff;
}

.social-link.github:hover span {
    color: #171515;

}

.social-link.linkedin:hover {
    background: #0077b5;
}

.social-link.linkedin:hover svg {
    fill: #fff;
}

.social-link.linkedin:hover span {
    color: #0077b5;
}

.social-link.gmail:hover {
    background: #ea4335;
}

.social-link.gmail:hover svg {
    fill: #fff;
}

.social-link.gmail:hover span {
    color: #ea4335;

}

.social-link.twitter:hover {
    background: #000;
}

.social-link.twitter:hover svg {
    fill: #fff;
}

.social-link.twitter:hover span {
    color: #000;
}

.social-link.link:hover {
    background: #0077b5;
}

.social-link.link:hover svg {
    fill: #fff;
}

.social-link.link:hover span {
    color: #0077b5;
}

@media (max-width: 768px) {
    .social-links {
        right: 1rem;
        bottom: 1rem;
    }

    .social-link {
        height: 45px;
        width: 45px;
    }

    .social-link svg {
        width: 22px;
        height: 22px;
    }

    .social-link span {
        font-size: 12px;
    }
}

.bg-grid {
    background-image: linear-gradient(to right, #6d6b6b11 1px, transparent 1px), 
                      linear-gradient(to bottom, #6d6b6b11 1px, transparent 1px);
    background-size: 6px 6px; 
}
</style>
