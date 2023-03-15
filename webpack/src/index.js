"use strict";
const interestingLinks = () => {
    const LINKS = DATA.links.map((link) => {
        const { name, url, color, emoji } = link;
        const FINAL_LINK = `<a class="interesting-links-container__links interesting-links-container__${color}" href="${url}" target="_blank">
		${name}<span>${emoji}</span></a>`;
        return FINAL_LINK;
    });
    LINKS_CONTAINER.innerHTML = LINKS.join('');
};
const socialMedia = () => {
    const SOCIAL_MEDIA = DATA.social.map((socialMedia) => {
        const { name, url, username, icon } = socialMedia;
        const ICON = `<a class="social-media-container__icons social-media-container__${name}" href="${url}/${username}" target="_blank">${icon}`;
        return ICON;
    });
    SOCIAL_MEDIA_CONTAINER.innerHTML = SOCIAL_MEDIA.join('');
};
const footer = () => {
    const { footer } = DATA;
    FOOTER.innerHTML = `<p>${footer}</p>`;
};
const DATA = {
    name: 'Galeed Gutierrez 🇦🇷',
    nickname: 'galeedgutierrez',
    description: 'Frontend Developer | #JavaScript | #TypeScript',
    avatar: 'https://avatars.githubusercontent.com/u/60163346?v=4',
    social: [
        {
            name: 'platzi',
            url: 'https://platzi.com/p',
            username: 'galeedgutierrez',
            icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Platzi</title><path d="M10.6392 1.127L2.486 9.282a3.842 3.842 0 000 5.4361l8.1552 8.1552a3.842 3.842 0 005.4361 0l2.719-2.718-2.719-2.7181-2.718 2.718-8.1562-8.1551 8.1552-8.1552 5.437 5.4371-5.437 5.4361 2.718 2.719 5.4371-5.437a3.842 3.842 0 000-5.4372l-5.448-5.436a3.828 3.828 0 00-5.4252 0z"></path></svg>'
        },
        // {
        // 	name     : 'youtube',
        // 	url      : 'https://www.youtube.com/channel/UCWnDssLZtvoRYf7XHILtyug',
        // 	username : '',
        // 	icon     : '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>'
        // },
        {
            name: 'github',
            url: 'https://github.com',
            username: 'galeedgutierrez',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>GitHub</title><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com',
            username: 'galeedgutierrez',
            icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>'
        },
        {
            name: 'twitter',
            url: 'https://twitter.com',
            username: 'gutierrezgaleed',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in',
            username: 'galeedgutierrez',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title>LinkedIn</title><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>'
        },
        // {
        // 	name     : 'twitch',
        // 	url      : 'https://www.twitch.tv',
        // 	username : 'galeedgutierrez',
        // 	icon     : '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path></svg>'
        // },
        {
            name: 'discord',
            url: 'https://discordapp.com/users/828700876507185153',
            username: '',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Discord</title><path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"></path></svg>'
        },
        // {
        // 	name     : '',
        // 	url      : '',
        // 	username : '',
        // 	icon     : ''
        // },
    ],
    links: [
        {
            name: 'Mi web personal',
            url: 'https://galeedgutierrez.com/',
            color: 'green',
            emoji: '📖',
        },
        {
            name: 'Sponsors',
            url: 'mailto:galeedgutierrez@hotmail.com?Subject=Sponsor',
            color: 'rose',
            emoji: '🚀',
        },
        {
            name: 'Obtén un mes gratis en Platzi',
            url: 'https://platzi.com/r/galeedgutierrez',
            color: 'sky',
            emoji: '🎁',
        },
    ],
    footer: 'Made with ❤️ in Argentina 🇦🇷',
};
const NAME = document.createTextNode(DATA.name);
const LINKS_CONTAINER = document.getElementById('links');
const NAME_CONTAINER = document.querySelector('#name');
const SOCIAL_MEDIA_CONTAINER = document.querySelector('#social-media');
const FOOTER = document.querySelector('#footer');
socialMedia();
interestingLinks();
footer();
NAME_CONTAINER.appendChild(NAME);
//# sourceMappingURL=index.js.map