var audio = new Audio('yk.mp3'); // Create the audio object outside the click event listener

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }
});
const REVIEWS = [
    {
        id: 6,
        name: 'Alice',
        role: 'Data Scientist',
        avatar: 'https://i.pravatar.cc/150?img=23',
        review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
    },
    {
        id: 0,
        name: 'Bob',
        role: 'Architect',
        avatar: 'https://i.pravatar.cc/150?img=13',
        review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
    },
    {
        id: 2,
        name: 'Charlie',
        role: 'DevOps Engineer',
        avatar: 'https://i.pravatar.cc/150?img=8',
        review: `Results speak louder than words. I've never seen progress like this. The workflows are challenging but oh-so-rewarding. Kudos!`,
    },
    {
        id: 3,
        name: 'Diana',
        role: 'Product Manager',
        avatar: 'https://i.pravatar.cc/150?img=41',
        review: `It's very easy to customize and categorize lists for new projects/task categories.`,
    },
    {
        id: 13,
        name: 'Ethan',
        role: 'Software Engineer',
        avatar: 'https://i.pravatar.cc/150?img=57',
        review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
    },
    {
        id: 4,
        name: 'Fiona',
        role: 'Marketing Specialist',
        avatar: 'https://i.pravatar.cc/150?img=42',
        review: `Plan, create, and explore seamlessly. This service made my creative dreams a reality. Smooth navigation, and the recommendations were spot on.`,
    },
    {
        id: 10,
        name: 'George',
        role: 'Software Developer',
        avatar: 'https://i.pravatar.cc/150?img=21',
        review: `A game-changer for organization. Tasks, calendars, notes – everything neatly synced. My life has never been this streamlined. Pure genius!`,
    },
    {
        id: 11,
        name: 'Hannah',
        role: 'Graphic Designer',
        avatar: 'https://i.pravatar.cc/150?img=18',
        review: `Drowning in a sea of creativity. The content here is a visual feast. An endless source of inspiration for my artistic endeavors.`,
    },
    {
        id: 5,
        name: 'Ian',
        role: 'CTO',
        avatar: 'https://i.pravatar.cc/150?img=33',
        review: `Discovering new beats is addictive with this service. The curated playlists are spot-on, and the personalized recommendations are eerily accurate. A music lover's paradise!`,
    },
];

// common vars
let currentCard;

// add reviews to DOM
function renderReviews() {
    const tplCard = document.querySelector("#tpl-card");
    const listCards = document.querySelector("#list-cards");

    REVIEWS.forEach((r, idx) => {
        const clone = tplCard.content.cloneNode(true);
        clone.querySelector("blockquote").innerText = `"${r.review}"`;
        clone.querySelector("[review-name]").innerText = r.name;
        clone.querySelector("[review-role]").innerText = r.role;
        clone.querySelector("[review-img]").src = r.avatar;
        if (idx === 0) {
            /// remove translate on first card
            clone.querySelector("div").classList.remove("opacity-0")
            clone.querySelector("blockquote").classList.remove("scale-0", "before:-translate-y-full")
            clone.querySelector(".details").classList.remove("scale-0", "translate-y-[150px]")
            currentCard = clone.querySelector("div");
        }
        listCards.append(clone)
    })
}

// SLIDER
function sliderInit() {
    // add reviews to DOM
    renderReviews()

    let currentİndex = 0;
    const slider = document.querySelector("#slider");
    const slides = slider.querySelectorAll(".card");
    const totalSlides = REVIEWS.length;
    const sliderButtons = document.querySelectorAll("[data-slide]");

    sliderButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {

            sliderButtons[0].classList.add("translate-x-20")
            sliderButtons[1].classList.add("-translate-x-20")
           
            // slide out old current card
            currentCard.querySelector("blockquote").classList.add("scale-0", "before:-translate-y-full")
            currentCard.querySelector(".details").classList.add("scale-0", "translate-y-[150px]")

            // move currentİndex forwards or backwards
            if (btn.getAttribute("data-slide") === "prev") {
                currentİndex = (totalSlides + currentİndex - 1) % totalSlides;
            } else {
                currentİndex = (totalSlides + currentİndex + 1) % totalSlides;
            }
            // slide in new current card
            setTimeout(() => {
                currentCard = slides[currentİndex];
                currentCard.classList.remove("opacity-0")
                currentCard.querySelector("blockquote").classList.remove("scale-0","before:-translate-y-full")
                currentCard.querySelector(".details").classList.remove("scale-0", "translate-y-[150px]");

                sliderButtons[0].classList.remove("translate-x-20")
                sliderButtons[1].classList.remove("-translate-x-20")
            }, 500)
        })
    })
}

sliderInit();