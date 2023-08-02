document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li");
    const sections = document.querySelectorAll("section");
  
    function changeActiveNavLink() {
      const currentScroll = window.pageYOffset;
  
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
  
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", changeActiveNavLink);
  });
  