// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================================
// MOBILE MENU
// ======================================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ======================================
// PROJECT DATA
// ======================================

const projectData = {

    swachh: {

        label: "AI • COMPUTER VISION",

        title: "Swachh Tech",

        description:
            "Swachh Tech is an AI-based smart waste management system focused on detecting improper waste disposal and supporting automated violation monitoring.",

        details:
            "The project explores YOLO-based object detection, camera-based monitoring, person identification and violation association. It also includes a concept for digital notification and fine management for registered users."

    },


    habit: {

        label: "FULL-STACK DEVELOPMENT",

        title: "Personal Habit Coach",

        description:
            "Personal Habit Coach is a web application developed during my Full Stack Web Developer internship.",

        details:
            "The project provided practical exposure to web application development and helped develop experience with frontend and application development workflows."

    },


    spam: {

        label: "MACHINE LEARNING",

        title: "Spam Email Detection",

        description:
            "Spam Email Detection is a machine learning project developed during AI with Python training.",

        details:
            "The project focuses on identifying spam email messages using machine learning concepts and Python-based implementation."

    }

};


// ======================================
// MODAL
// ======================================

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalDetails =
    document.getElementById("modalDetails");


const learnButtons =
    document.querySelectorAll(".learn-btn");


learnButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project =
            projectData[
                button.dataset.project
            ];


        if (!project) {
            return;
        }


        modalLabel.textContent =
            project.label;

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;

        modalDetails.textContent =
            project.details;


        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    });

});


// ======================================
// CLOSE MODAL
// ======================================

function closeModal() {

    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);