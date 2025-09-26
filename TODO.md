# TODO List for Mobile Responsiveness

- [x] Add id="home" to the hero section in app/page.js
- [x] Change background image div height from "720px" to "100%" in app/page.js
- [x] Change gradient overlay div height from "720px" to "100%" in app/page.js
- [x] Change id="launch" to id="gallery" in the Glimpses section in app/page.js
- [x] Add id="contact" to the Call to Action section in app/page.js
- [x] Change mobile menu href="#book" to href="#gallery" in app/page.js
- [x] Implement smooth scrolling functionality for all navbar links in app/page.js

- [ ] Update navigation: Adjust logo positioning (remove -ml-26), improve mobile menu overlay and z-index
- [ ] Update hero section: Make height responsive (min-h-screen), scale text (text-3xl sm:text-4xl md:text-5xl), fix book image sizing (w-full max-w-md on mobile), remove negative margins/translations, center content
- [ ] Update about section: Scale heading (text-4xl sm:text-5xl md:text-6xl), make image responsive (w-full max-w-sm on mobile), ensure vertical stacking on small screens
- [ ] Update authors section: Adjust image (w-full h-auto max-h-64 object-cover), scale heading, ensure text wraps
- [ ] Update gallery (ImageSlider): Reduce to 1 image on mobile (grid-cols-1), adjust heights (h-64 sm:h-96 md:h-[600px]), make buttons larger for touch
- [ ] Update news section: Ensure cards stack single-column on mobile, add padding for touch targets
- [ ] Update reviews section: Make flip cards shorter on mobile (h-80 sm:h-[300px]), truncate text earlier, ensure clickable areas larger
- [ ] Update contact section: Stack elements vertically on mobile, make buttons/inputs full-width with larger touch targets (py-4)
- [ ] Update footer: Stack grid to single column on mobile (grid-cols-1), adjust form inputs for mobile
- [ ] Update globals.css: Make flip-card height responsive (height: 250px base, larger on desktop)
