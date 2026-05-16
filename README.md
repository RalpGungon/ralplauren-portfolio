# Portfolio Website

## Overview

This portfolio website is a single-page web experience built with vanilla HTML, CSS, and JavaScript. It is designed to showcase projects, skills, and contact information while providing a smooth interactive experience across desktop and mobile screens.

## System Design

The page is organized into these main sections:

- **Navigation**: Sticky top navigation with desktop links and a responsive mobile menu.
- **Hero**: Intro section with branding, role label, and call-to-action buttons.
- **Projects**: Featured work section with project cards and a modal video preview.
- **Skills**: Visual skill bars for languages, tools, and current learning.
- **About**: Personal summary and description.
- **Contact**: Email link, CV button, and social links.
- **Footer**: Back-to-top button and copyright notice.

### JavaScript Architecture

The JavaScript is responsible for page interaction, animation triggers, and responsive behavior.

Key components:

- **DOM selection**: Core elements are selected via `querySelector` and `querySelectorAll`.
- **Navigation handling**:
  - Desktop nav and mobile nav links are wired to scroll to target sections.
  - Mobile menu toggles open/close state using button icons.

- **Scroll behavior**:
  - `scrollRestoration` is set to `manual` so page reload always starts at the top.
  - Smooth scrolling is triggered when nav or CTA buttons are clicked.

- **Project count**:
  - JavaScript calculates the number of project cards and updates the project header text dynamically.

- **Video modal**:
  - A modal overlay opens when the project play button is clicked.
  - The video is reset and paused when the modal closes.

- **Intersection observers**:
  - Fade-up animations are applied to elements as they enter the viewport.
  - Skill bar fill animations are triggered on scroll when the skill section becomes visible.

## Functionality

### Navigation & mobile menu

- Desktop links scroll to `#section--1`, `#section--2`, `#section--3`, and `#section--4`.
- Mobile menu is expanded or hidden with the hamburger and close icons.
- Active navigation links are visually highlighted.

### Section reveal & animation

- Elements with the `.fade-up` class animate into view when scrolled into the viewport.
- Skill bar progress indicators animate only after the user scrolls to the skills section.

### Video modal

- Clicking the project play button opens the video modal.
- The modal plays the demo video from `./videos/demo_project.mp4` and closes cleanly when the close button is clicked.

### Contact actions

- The main CTA button and mobile CTA button both scroll to the contact section.
- Contact section includes email, CV download, and social icon links.

## Files

- `index.html` — page structure and content.
- `styles.css` — global styles, layout, and responsive design basics.
- `media.css` — media queries for smaller screens and mobile adaptation.
- `script.js` — interactive behavior, animations, and dynamic updates.
- `videos/` — video asset folder used by the project demo modal.

## Notes

- The website is intentionally built with plain JavaScript to keep the experience lightweight and easy to extend.
- The design supports both desktop navigation and a mobile-friendly menu state.
- The current implementation uses a single featured project card, but the structure can scale to multiple cards by adding additional `.project-card` elements.
