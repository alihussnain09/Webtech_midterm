
const show = document.querySelectorAll('.faq-toggle')
console.log(show)
show.forEach(toggle =>{
    toggle.addEventListener('click',()=>{
    toggle.parentNode.classList.toggle('active')
    })
})

function AddQuestion() {
    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer").value;
    var faqItem = document.createElement("div");
    faqItem.className = "faq";
    var faqTitle = document.createElement("h3");
    faqTitle.className = "faq-title";
    faqTitle.textContent = question;
    var faqText = document.createElement("p");
    faqText.className = "faq-text";
    faqText.textContent = answer;    
    var faqToggle = document.createElement("button");
    faqToggle.className = "faq-toggle";
    var iconDown = document.createElement("i");
    iconDown.className = "fas fa-chevron-down";
    var iconTimes = document.createElement("i");
    iconTimes.className = "fas fa-times";
    faqToggle.appendChild(iconDown);    
    faqToggle.appendChild(iconTimes);
    faqItem.appendChild(faqTitle);
    faqItem.appendChild(faqText);
    faqItem.appendChild(faqToggle);
    var faqContainer = document.querySelector(".faq-container");
    faqContainer.appendChild(faqItem);
    const toggles = document.querySelectorAll('.faq-toggle')

show.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
}
