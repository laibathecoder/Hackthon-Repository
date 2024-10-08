//step No : 01

const resumeholder = document.getElementById("resume-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
const resumeContainer = document.getElementById('resume-container') as HTMLElement;

    const FullnameElement = document.getElementById("name-input") as HTMLInputElement;
    const emailElement = document.getElementById("mail-input") as HTMLInputElement;
    const phoneElement = document.getElementById("number-input") as HTMLInputElement;
    const educationElement = document.getElementById("study-input") as HTMLInputElement;
    const workElement = document.getElementById("work-box") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills-box") as HTMLTextAreaElement;
    const achievementsElement = document.getElementById("award-input") as HTMLInputElement;
    const summaryElement = document.getElementById("summary-txtarea") as HTMLTextAreaElement;

    //step no : 02  Check if all fields are filled
    if (
        FullnameElement.value === "" ||
        emailElement.value === "" ||
        phoneElement.value === "" ||
        educationElement.value === "" ||
        workElement.value === "" ||
        skillsElement.value === "" ||
        achievementsElement.value === "" ||
        summaryElement.value === ""
    ) {
        console.error("Please fill all the fields of the form");
        // Stop execution if any field is empty
    }



    const name = FullnameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const workExperience = workElement.value;
    const skills = skillsElement.value;
    const achievements = achievementsElement.value;
    const summary = summaryElement.value;

    //step no : 03  Resume Output
    const resumeOutput = `
        <h2><u>RESUME</u></h2>
        <p contenteditable="true"><strong>Full Name:</strong><span> ${name} </span></p>
        <p contenteditable="true"><strong>Email:</strong><span> ${email} </span></p>
        <p contenteditable="true"><strong>Phone Number:</strong><span>  ${phone} </span></p>

        <h3>EDUCATION:</h3>
        <p contenteditable="true">${education.replace(/\n/g, '<br>')}</p>

        <h3>WORK EXPERIENCE:</h3>
        <p contenteditable="true">${workExperience.replace(/\n/g, '<br>')}</p>

        <h3>Skills:</h3>
        <p contenteditable="true">${skills.replace(/\n/g, '<br>')}</p>

        <h3>ACHIEVEMENTS/PROJECTS:</h3>
        <p contenteditable="true">${achievements.replace(/\n/g, '<br>')}</p>

        <h3>Summary</h3>
        <p contenteditable="true">${summary.replace(/\n/g, '<br>')}</p>
    `;

    const outputResume = document.getElementById("resumeOutput");
    if (outputResume) {
        outputResume.innerHTML = resumeOutput;
        makeditable();
    }
    else {
        console.error('one or more form elements are not filled');
    }
});

function makeditable(){
    const editableElement = document.querySelectorAll("Editable");
    editableElement.forEach(element =>{
        element.addEventListener("click",function(){
            const resentElement = element as HTMLElement;
            const resentvalue = resentElement.textContent || "";

            //replace text
            if(resentElement.tagName === "p" || resentElement.tagName === "span"){
                const input = document.createElement("input");
                input.type = "text";
                input .value = resentvalue;
                input.classList.add("editing-input");

                resentElement.style.display = "none";
                resentElement.parentNode?.insertBefore(input,resentElement);
                input.focus();
                
            }
        })
    }) 
}
