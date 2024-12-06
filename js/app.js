// Create the navigation dynamically
const createNavComponent = () => {
  // create empty array to store the nav links names
  const navNames = [];
  // get sections names and append them to navNames
  document.querySelectorAll('section').forEach((el) => navNames.push(el.id));
  // create the nav list (ul appended to nav)
  const navListEl = document.createElement('ul');
  navListEl.className = 'navList';
  navNames.forEach((name) => {
    let liEl = '';
    if (name === 'home') {
      // add active class initially
      liEl = `<li><a class="navLink active" href="#${name}">${name}</a></li>`;
    } else {
      liEl = `<li><a class="navLink" href="#${name}">${name}</a></li>`;
    }
    navListEl.insertAdjacentHTML('beforeend', liEl);
  });
  navListEl.insertAdjacentHTML('beforeend', '<li><a class="btn-cta" href="#">Sign Up</a></li>');
  document.querySelector('.header__nav').append(navListEl);
};
createNavComponent();

// Create the process component dynamically
const steps = [
  {
    iconUrl: '../assets/icons/step1.svg', iconName: 'a rocket ison', title: 'Start Project', description: 'Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience',
  },
  {
    iconUrl: '../assets/icons/step2.svg', iconName: 'a bulb light ison', title: 'Craft', description: 'Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space',
  },
  {
    iconUrl: '../assets/icons/step3.svg', iconName: 'a checkmark ison', title: 'Execute', description: 'Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space',
  },
];
const createProcessComponent = () => {
  const processEl = document.createElement('ul');
  processEl.className = 'process';
  steps.forEach((obj) => {
    const liEl = `
          <li class="step">
            <div class="step__iconWrapper">
              <img class="step__icon" src="${obj.iconUrl}" alt="${obj.iconName}" />
            </div>
            <h3 class="step__title">${obj.title}</h3>
            <div class="step__line"></div>
            <p class="description">${obj.description}</p>
          </li>`;
    processEl.insertAdjacentHTML('beforeend', liEl);
  });
  document.querySelector('.section-process .txt-box').append(processEl);
};
createProcessComponent();

/// ////////////////////////////////////////////////////////////
// Highlight nav link when its section appears on screen

const sectionsObserverCb = (entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    document.querySelector('.highlight').classList.remove('highlight');
    entry.target.classList.add('highlight');
    // remove the previously active nav link and style the currently active one
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`[href="#${entry.target.id}"]`).classList.add('active');
  }
};
const sectionsObserver = new IntersectionObserver(sectionsObserverCb, { threshold: 0.3 });
document.querySelectorAll('section').forEach((section) => sectionsObserver.observe(section));
// ////////////////////////////////////////////////////////////
//
function highlightSectionOnScroll() {
  // Select all sections
  const sections = document.querySelectorAll('section');
  // This function checks which section is visible
  function checkVisibleSection() {
    let maxVisibleHeight = 0; // Tracks the max height of a visible section
    let highlightedSection = null; // The section with the most visible area
    // Iterate over sections to calculate visibility within the viewport
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect(); // Get section's position and size
      // Calculate height of the section visible in the viewport
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      // Update if this section is more visible than the previous one
      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        highlightedSection = section;
      }
    });
    // If a section with the most visible area is found, update the highlight
    if (highlightedSection) {
      // Remove 'highlight' class from previously highlighted section
      document.querySelector('.highlight')?.classList.remove('highlight');
      // Add 'highlight' class to the most visible section
      highlightedSection.classList.add('highlight');
    }
  }
  // listen to scroll event and check visibility
  window.addEventListener('scroll', checkVisibleSection);
  // Initial run to highlight the visible section on page load
  checkVisibleSection();
}

highlightSectionOnScroll();

// ////////////////////////////////////////////////////////////
// Mobile Navigation
const headerEl = document.querySelector('.header');
const menuBtnsWrapper = document.querySelector('.menuBtns-wrapper');
menuBtnsWrapper.addEventListener('click', () => headerEl.classList.toggle('open-nav'));

// ////////////////////////////////////////////////////////////
// Hides headerEl 3sec after user stops scrolling and make it visible again when they scroll.

// This function toggles a class on a given element based on the user's scrolling activity
function toggleElementOnScroll(element, className, delay) {
  let timeout;
  let isThrottled = false;

  // Throttled function to add a className
  function addFixedClass() {
    if (!isThrottled) {
      element.classList.add(className);
      isThrottled = true;

      // Throttle timeout
      setTimeout(() => {
        isThrottled = false;
      }, delay); // Adjust the throttle delay as needed
    }
  }

  // Main scroll event handler
  window.addEventListener('scroll', () => {
    // Call the throttled add function
    addFixedClass();

    // Clear any existing timeout
    clearTimeout(timeout);
    // Remove the className after 2 seconds of no scrolling
    timeout = setTimeout(() => {
      if (!headerEl.classList.contains('open-nav')) {
        element.classList.remove(className);
      }
    }, 2000);
  });
}

toggleElementOnScroll(document.body, 'fixed', 4000);
