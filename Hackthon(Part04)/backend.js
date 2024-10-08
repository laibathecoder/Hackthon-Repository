// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeContainer = document.getElementById('resume-container') as HTMLElement;
var _a;
// function generateResume(data: FormData) {
//     const name = data.get('name') as string;
//     const title = data.get('title') as string;
//     const email = data.get('email') as string;
//     const phone = data.get('phone') as string;
//     const website = data.get('website') as string;
//     const summary = data.get('summary') as string;
//     const education = data.get('education') as string;
//     const skills = data.get('skills') as string;
//     const experience = data.get('experience') as string;
//     const projects = data.get('projects') as string;
//     resumeContainer.innerHTML = `
//         <header>
//             <div class="personal-info" contenteditable="true">
//                 <h1>${name}</h1>
//                 <h2>${title}</h2>
//                 <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
//                 <p><b>Phone:</b> ${phone}</p>
//                 <p><b>Website:</b> <a href="${website}" target="_blank">${website}</a></p>
//             </div>
//         </header>
//         <section>
//             <h3>Summary</h3>
//             <p contenteditable="true">${summary}</p>
//         </section>
//         <section>
//             <h3>Education</h3>
//             <p contenteditable="true">${education.replace(/\n/g, '<br>')}</p>
//         </section>
//         <section>
//             <h3>Skills</h3>
//             <p contenteditable="true">${skills.replace(/\n/g, '<br>')}</p>
//         </section>
//         <section>
//             <h3>Work Experience</h3>
//             <p contenteditable="true">${experience.replace(/\n/g, '<br>')}</p>
//         </section>
//         <section>
//             <h3>Projects</h3>
//             <p contenteditable="true">${projects.replace(/\n/g, '<br>')}</p>
//         </section>
//         <!-- Add the red message after the resume -->
//         <p id="edit-message" class="red-message">
//             Please click on the specific area where you want to change anything in your generated resume.
//         </p>
//     `;
// }
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     generateResume(formData);
// });
//step No : 01
var resumeholder = (_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var resumeContainer = document.getElementById('resume-container');
    var FullnameElement = document.getElementById("name-input");
    var emailElement = document.getElementById("mail-input");
    var phoneElement = document.getElementById("number-input");
    var educationElement = document.getElementById("study-input");
    var workElement = document.getElementById("work-box");
    var skillsElement = document.getElementById("skills-box");
    var achievementsElement = document.getElementById("award-input");
    var summaryElement = document.getElementById("summary-txtarea");
    //step no : 02  Check if all fields are filled
    if (FullnameElement.value === "" ||
        emailElement.value === "" ||
        phoneElement.value === "" ||
        educationElement.value === "" ||
        workElement.value === "" ||
        skillsElement.value === "" ||
        achievementsElement.value === "" ||
        summaryElement.value === "") {
        console.error("Please fill all the fields of the form");
        // Stop execution if any field is empty
    }
    var name = FullnameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var workExperience = workElement.value;
    var skills = skillsElement.value;
    var achievements = achievementsElement.value;
    var summary = summaryElement.value;
    //step no : 03  Resume Output
    var resumeOutput = "\n        <h2><u>RESUME</u></h2>\n        <p contenteditable=\"true\"><strong>Full Name:</strong><span> ".concat(name, " </span></p>\n        <p contenteditable=\"true\"><strong>Email:</strong><span> ").concat(email, " </span></p>\n        <p contenteditable=\"true\"><strong>Phone Number:</strong><span>  ").concat(phone, " </span></p>\n\n        <h3>EDUCATION:</h3>\n        <p contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n\n        <h3>WORK EXPERIENCE:</h3>\n        <p contenteditable=\"true\">").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n\n        <h3>Skills:</h3>\n        <p contenteditable=\"true\">").concat(skills.replace(/\n/g, '<br>'), "</p>\n\n        <h3>ACHIEVEMENTS/PROJECTS:</h3>\n        <p contenteditable=\"true\">").concat(achievements.replace(/\n/g, '<br>'), "</p>\n\n        <h3>Summary</h3>\n        <p contenteditable=\"true\">").concat(summary.replace(/\n/g, '<br>'), "</p>\n    ");
    var outputResume = document.getElementById("resumeOutput");
    if (outputResume) {
        outputResume.innerHTML = resumeOutput;
        makeditable();
    }
    else {
        console.error('one or more form elements are not filled');
    }
});
function makeditable() {
    var editableElement = document.querySelectorAll("Editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var resentElement = element;
            var resentvalue = resentElement.textContent || "";
            //replace text
            if (resentElement.tagName === "p" || resentElement.tagName === "span") {
                var input = document.createElement("input");
                input.type = "text";
                input.value = resentvalue;
                input.classList.add("editing-input");
                resentElement.style.display = "none";
                (_a = resentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, resentElement);
                input.focus();
            }
        });
    });
}
