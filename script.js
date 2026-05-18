const tabs = document.querySelectorAll(".tab-btn");
const projects = document.querySelectorAll(".project-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    projects.forEach(project => {
      if (category === "all" || project.dataset.category === category) {
        project.classList.remove("hidden");
        project.style.animation = "fadeIn 0.5s ease";
      } else {
        project.classList.add("hidden");
      }
    });
  });
});
document.querySelectorAll('.expandable').forEach(el => {
  el.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    let fullContent;
    if (el.dataset.type === "image") {
      fullContent = document.createElement('img');
      fullContent.src = el.src;
    } else if (el.dataset.type === "video") {
      fullContent = document.createElement('video');
      fullContent.src = el.src;
      fullContent.controls = true;
      fullContent.autoplay = true;
    }

    lightbox.appendChild(fullContent);
    document.body.appendChild(lightbox);

    // Close when clicking anywhere outside
    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});
