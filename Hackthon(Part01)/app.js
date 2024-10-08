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
var toggle = document.getElementById('toggle-skills-btn');
var hiddenSec = document.getElementById('skills-id');
toggle.addEventListener("click", function () {
    if (hiddenSec.style.display === 'none') {
        hiddenSec.style.display = 'block';
        toggle.textContent = 'Hide Skills';
    }
    else {
        hiddenSec.style.display = 'none';
        toggle.textContent = 'Show Skills';
    }
});
