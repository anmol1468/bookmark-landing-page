
//////////// code for features section  

let featuresInfo = [
    {
        index: 1,
        imgSRC: "./images/illustration-features-tab-1.svg",
        heading: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },

    {
        index: 2,
        imgSRC: "./images/illustration-features-tab-2.svg",
        heading: "Intelligent search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },

    {
        index: 3,
        imgSRC: "./images/illustration-features-tab-3.svg",
        heading: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
];



let selector1 = document.querySelector('#selector-1');
let selector2 = document.querySelector('#selector-2');
let selector3 = document.querySelector('#selector-3');

selector1.addEventListener('click', () => {

    selector1.classList.add('active-feature');
    selector2.classList.remove('active-feature');
    selector3.classList.remove('active-feature');

    let h1 = document.querySelector("#feature-heading");
    let text = document.querySelector("#feature-para");
    let img = document.querySelector("#feature-img");

    h1.innerText = featuresInfo[0].heading;
    text.innerText = featuresInfo[0].text;
    img.setAttribute("src", featuresInfo[0].imgSRC);
});

selector2.addEventListener('click', () => {

    selector1.classList.remove('active-feature');
    selector2.classList.add('active-feature');
    selector3.classList.remove('active-feature');

    let h1 = document.querySelector("#feature-heading");
    let text = document.querySelector("#feature-para");
    let img = document.querySelector("#feature-img");

    h1.innerText = featuresInfo[1].heading;
    text.innerText = featuresInfo[1].text;
    img.setAttribute("src", featuresInfo[1].imgSRC);
})

selector3.addEventListener('click', () => {

    selector1.classList.remove('active-feature');
    selector2.classList.remove('active-feature');
    selector3.classList.add('active-feature');

    let h1 = document.querySelector("#feature-heading");
    let text = document.querySelector("#feature-para");
    let img = document.querySelector("#feature-img");

    h1.innerText = featuresInfo[2].heading;
    text.innerText = featuresInfo[2].text;
    img.setAttribute("src", featuresInfo[2].imgSRC);
})


//////////// questions section code

let questions = [...document.querySelectorAll(".question")];
let answers = [...document.querySelectorAll(".answer")];



// questions.forEach((el) => {
//     el.addEventListener('click', () => {

// answers.forEach((el) => {
//     el.classList.remove('active-answer');
// })
// questions.forEach((el) => {
//     let downLogo = el.querySelector('i')
//     downLogo.classList.remove('active-i');
// })

// let ans = el.nextElementSibling;
// let downLogo = el.querySelector('i');

// ans.classList.toggle('active-answer');
// downLogo.classList.toggle('active-i');
//     })
// })

for (let i = 0; i < questions.length; i++) {

    questions[i].addEventListener('click', () => {

        for (let j = 0; j < answers.length; j++) {
            if (j !== i) {
                answers[j].classList.remove('active-answer');
            }
        }

        for (let j = 0; j < questions.length; j++) {
            if (j !== i) {
                let downLogo = questions[j].querySelector('i')
                downLogo.classList.remove('active-i');
            }
        }

        let ans = questions[i].nextElementSibling;
        let downLogo = questions[i].querySelector('i');

        ans.classList.toggle('active-answer');
        downLogo.classList.toggle('active-i');
    })
}


///////////// code related to hamburger menu

let openBtn = document.querySelector("#ham-open");
let closeBtn = document.querySelector("#ham-close");

openBtn.addEventListener('click', () => {
    let dropHam = document.querySelector('.hamburger');
    let nav = document.querySelector('#nav');

    dropHam.classList.add('ham-active');
    nav.classList.add('nav-disable');
})

closeBtn.addEventListener('click', () => {
    let dropHam = document.querySelector('.hamburger');
    let nav = document.querySelector('#nav');

    dropHam.classList.remove('ham-active');
    nav.classList.remove('nav-disable');
})