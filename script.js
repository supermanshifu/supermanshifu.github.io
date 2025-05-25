const content = document.getElementById("content");
const buttons = document.querySelectorAll("nav button");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const sections = {
  about: `
    <h2>About Me</h2>
    <p>I'm a video editor with a passion for storytelling and visuals. I create fast-paced social media edits and cinematic narratives that engage and inspire.</p>
  `,
  projects: `
    <h2>Projects</h2>
    <div class="project-card">
      <h3>Project 1</h3>
      <p>Description of project 1.</p>
    </div>
    <div class="project-card">
      <h3>Project 2</h3>
      <p>Description of project 2.</p>
    </div>
    <div class="project-card">
      <h3>Project 3</h3>
      <p>Description of project 3.</p>
    </div>
  `,
  contact: `
    <h2>Contact</h2>
    <p>Email me at: <a href="mailto:yourname@example.com">yourname@example.com</a></p>
    <div>
      <a href="https://github.com/yourhandle" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/yourhandle" target="_blank">LinkedIn</a>
    </div>
  `
};

function setSection(section) {
  content.innerHTML = sections[section];
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section");
    setSection(section);
  });
});

// Load About section by default
setSection("about");
