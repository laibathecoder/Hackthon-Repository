// step no : 01
document.getElementById("main-div")?.addEventListener("submit" , function(event) {
     event.preventDefault();
     alert("For Generate Resume Please Click The 'OK' :)");
                                                                                                                               
    // step no : 02  Type Assersion

    const FullnameElement = document.getElementById("name-input") as HTMLInputElement;
    const emailElement = document.getElementById("mail-input") as HTMLInputElement;
    const phoneElement = document.getElementById("number-input") as HTMLInputElement;
    const educationElement = document.getElementById("study-input") as HTMLInputElement;
    const workElement = document.getElementById("work-box") as HTMLInputElement;
    const skillsElement = document.getElementById("skills-box") as HTMLInputElement;
    const achievementsElement = document.getElementById("award-input") as HTMLInputElement;
    const summaryElement = document.getElementById("summary-txtarea") as HTMLInputElement;

    // condition
    if(
        FullnameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        workElement && 
        skillsElement && 
        achievementsElement && 
        summaryElement){

            const name = FullnameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const workExeprience = workElement.value;
            const skills = skillsElement.value;
            const achievements = achievementsElement.value;
            const summary = summaryElement.value;       
            
            //step no :03 Resume Output
            const resumeOutput = `
            <h2>RESUME</h2>           
            <p><strong>Full Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Phone Number</strong> ${phone}</p>


            <h3>EDUCATION</h3>
            <p>${education}</p>

            <h3>WORK EXPERIENCE</h3>
            <p>${workExeprience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>

            <h3>ACHIEVEMENTS/PROJECTS</h3>
            <p>${achievements}</p>

            <h3>Summary</h3>
            <p>${summary}</p>

            `;

            const outputResume = document .getElementById("resumeOutput");
            if(outputResume){
                outputResume .innerHTML = resumeOutput
            }
            else {
                console.error("Please fill this fields");
            }
    }
    else{
        console.error("please fill all the fields of form");
    }
});


