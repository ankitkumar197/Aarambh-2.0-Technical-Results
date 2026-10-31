const eventsData = [
    {
        id: "web-hackathon",
        name: "Web Hackathon",
        image: "images/hackathon.png",
        type: "team",
        winner: {
            badgeText: "🏆 Winning Team (Gold Medal)",
            teamName: "APEX",
            members: [
                { name: "Aditya Prakash", roll: "26-MnC-53" },
                { name: "Pragya Kumar", roll: "26-MnC-18" },
                
            ]
        },
        runnerUp: {
            badgeText: "🥈 Runner-Up Team (Silver Medal)",
            teamName: "SAARTHI",
            members: [
                { name: "Bashu Raj", roll: "26-CSE-93" },
                { name: "Prabhat kumar", roll: "26-CSE-84" },
              
            ]
        }
    },
    {
        id: "debugging",
        name: "Debugging",
        image: "images/debugging.png",
        type: "individual",
        winner: {
            badgeText: "🏆 Winner (Gold Medal)",
            name: "Md. Anash",
            roll: "26-CSE-03"
        },
        runnerUp: {
            badgeText: "🥈 Runner-Up (Silver Medal)",
            name: "Neha Kumari",
            roll: "26-CSE-37"
        }
    },
    {
        id: "blind-coding",
        name: "Blind Coding",
        image: "images/blind-coding.png",
        type: "individual",
        winner: {
            badgeText: "🏆 Winner (Gold Medal)",
            name: "Ankit Kunwar Singh",
            roll: "26-CSE-81"
        },
        runnerUp: {
            badgeText: "🥈 Runner-Up (Silver Medal)",
            name: "Rohit Kumar",
            roll: "26-CSE-48"
        }
    },
    {
        id: "technical-quiz",
        name: "Technical Quiz",
        image: "images/technical-quiz.png",
        type: "individual",
        winner: {
            badgeText: "🏆 Winner (Gold Medal)",
            name: "Komal Krishna Mishra",
            roll: "26-CSE-58"
        },
        runnerUp: {
            badgeText: "🥈 Runner-Up (Silver Medal)",
            name: "Rohit Kumar",
            roll: "26-CSE-48"
        }
    },
    {
        id: "circuitron",
        name: "Circuitron",
        image: "images/circuitron.png",
        type: "individual",
        winner: {
            badgeText: "🏆 Winner (Gold Medal)",
            name: "Prem Bhardwaj",
            roll: "26-EEE-04"
        },
        runnerUp: {
            badgeText: "🥈 Runner-Up (Silver Medal)",
            name: "Aditya Kumar Patel",
            roll: "26-CSE-75"
        }
    }
];

let activeEventId = "web-hackathon";

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    renderEventTabs();
    renderEventComposition(activeEventId);
});


function initParticles() {
    const container = document.getElementById("particlesContainer");
    const particleCount = 28;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 4}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}


function renderEventTabs() {
    const tabsContainer = document.getElementById("eventTabs");
    tabsContainer.innerHTML = "";
    
    eventsData.forEach(event => {
        const button = document.createElement("button");
        button.className = `event-tab-btn ${event.id === activeEventId ? 'active' : ''}`;
        button.textContent = event.name;
        button.setAttribute("data-id", event.id);
        button.addEventListener("click", () => {
            if (activeEventId !== event.id) {
                activeEventId = event.id;
                updateActiveTabUI();
                renderEventComposition(activeEventId);
            }
        });
        tabsContainer.appendChild(button);
    });
}

function updateActiveTabUI() {
    const buttons = document.querySelectorAll(".event-tab-btn");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-id") === activeEventId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}


function renderEventComposition(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const container = document.getElementById("eventCompositionCard");
    
    if (!event) return;

   
    container.style.animation = 'none';
    container.offsetHeight; 
    container.style.animation = 'fadeInComposition 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';

    let winnerHTML = "";
    let runnerUpHTML = "";

    if (event.type === "team") {
       
        const winnerMembersList = event.winner.members.map(m => `
            <li class="team-member-item">
                <span class="member-name">${m.name}</span>
                <span class="member-roll">(${m.roll})</span>
            </li>
        `).join("");

        winningsHTML = `
            <div class="result-card winner-card">
                <div class="card-header-row">
                    <div class="medal-badge winner-badge">${event.winner.badgeText}</div>
                </div>
                <h4 class="team-name-title">TEAM: ${event.winner.teamName.toUpperCase()}</h4>
                <ul class="team-members-list">${winnerMembersList}</ul>
            </div>
        `;

     
        const runnerMembersList = event.runnerUp.members.map(m => `
            <li class="team-member-item" style="border-left-color: #A0A0A0;">
                <span class="member-name">${m.name}</span>
                <span class="member-roll">(${m.roll})</span>
            </li>
        `).join("");

        runnerUpHTML = `
            <div class="result-card runner-card">
                <div class="card-header-row">
                    <div class="medal-badge runner-badge">${event.runnerUp.badgeText}</div>
                </div>
                <h4 class="team-name-title" style="color: #E0E0E0;">TEAM: ${event.runnerUp.teamName.toUpperCase()}</h4>
                <ul class="team-members-list">${runnerMembersList}</ul>
            </div>
        `;
    } else {
      
        winningsHTML = `
            <div class="result-card winner-card">
                <div class="card-header-row">
                    <div class="medal-badge winner-badge">${event.winner.badgeText}</div>
                </div>
                <div class="participant-name">${event.winner.name} <span class="roll-number">(${event.winner.roll})</span></div>
            </div>
        `;

   
        runnerUpHTML = `
            <div class="result-card runner-card">
                <div class="card-header-row">
                    <div class="medal-badge runner-badge">${event.runnerUp.badgeText}</div>
                </div>
                <div class="participant-name">${event.runnerUp.name} <span class="roll-number">(${event.runnerUp.roll})</span></div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="event-layout-grid">
            <!-- Left Column: PNG Illustration & Event Title -->
            <div class="event-visual-box">
                <img src="${event.image}" alt="${event.name} Illustration" class="event-illustration" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'">
                <h3 class="event-title-badge">${event.name}</h3>
                <div class="event-type-indicator">${event.type === 'team' ? '👥 Team Competition' : '👤 Individual Competition'}</div>
            </div>

            <!-- Right Column: Winner & Runner-Up Cards -->
            <div class="event-results-column">
                ${winningsHTML}
                ${runnerUpHTML}
            </div>
        </div>
    `;
}