// const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
// const skillsSection = document.getElementById('skills-section') as HTMLElement;

// toggleSkillsBtn.addEventListener('click', () => {
//     if (skillsSection.style.display === 'none') {
//         skillsSection.style.display = 'block';
//         toggleSkillsBtn.textContent = 'Hide Skills';
//     } else {
//         skillsSection.style.display = 'none';
//         toggleSkillsBtn.textContent = 'Show Skills';
//     }
// });

const toggle = document.getElementById('toggle-skills-btn')as HTMLButtonElement;
const hiddenSec = document.getElementById('skills-id')as HTMLElement;

toggle.addEventListener("click", () => {
    if(hiddenSec.style.display === 'none'){
        hiddenSec.style.display = 'block';
        toggle.textContent = 'Hide Skills';
    }
    else{
        hiddenSec.style.display = 'none';
        toggle.textContent = 'Show Skills';
    }
});