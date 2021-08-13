const pop_up = document.getElementById("pop-up");
const contact_us = document.getElementById("contact-us");
const form = document.getElementById("form");
const email = document.querySelector('input[name="email"]');
const first_name = document.querySelector('input[name="first-name"]');
const last_name = document.querySelector('input[name="last-name"]');
const check = document.querySelector('input[name="terms-and-conditions"]');
const buttonsWrapper = document.querySelector(".slides-container-navigator");
const slides = document.querySelector(".slides");

document.getElementById("default-tab").click();

contact_us.onclick = function () {
    pop_up.style.display = "block";
}

window.onclick = function (event) {
    if (event.target === pop_up) {
        email.value = "";
        first_name.value = "";
        last_name.value = "";
        pop_up.style.display = "none";
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(check.checked && email.value && first_name.value && last_name.value){
        const formData = new FormData();
        formData.append(
            'Email',
            email.value
        )
        formData.append(
            'First_Name',
            first_name.value
        )
        formData.append(
            'Last_Name',
            last_name.value
        )
        formData.append(
            'Terms_and_Conditions',
            check.checked
        )

        fetch("https://getform.io/f/3ecec769-3953-44b4-bc46-b0d4e4ca15a8", {
            method: "POST",
            body: formData,
        }).then(response =>{
            alert(`Response Sent...`);
            console.log(response);
        }).catch(error => console.log(error));
        email.value = "";
        first_name.value = "";
        last_name.value = "";
        pop_up.style.display = "none";
    }
    else {
        alert("Please fill all the fields and check the checkbox to proceed further.");
    }
});

function openTab(evt, tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-header-content");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "SPAN") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-340%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')){
            slides.style.transform = 'translatex(-680%)';
            e.target.classList.add('active');
        }
    }
});


