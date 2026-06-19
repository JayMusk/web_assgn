# Turner & Torque Auto Repair

## Overview

This project is a simple auto repair website built with:

- `index.html`
- `services.html`
- `booking.html`
- `content.html`
- `CSS/style.css`
- `JS/script.js`
- IMAGES under `IMAGES/`

## Change Log

### 2026-05-29

- Created `index.html` homepage with header, navigation, and side IMAGES.
- Added link to `CSS/style.css` for shared styling.
- Updated homepage content with turbo and gearbox IMAGES.

### 2026-05-29

- Added `services.html` with service cards, working hours, and navigation.
- Styled service cards in `CSS/style.css`.

### 2026-05-29

- Added `booking.html` with vehicle info form, date picker, and cost calculator section.
- Included booking page structure and form fields.

### 2026-05-29

- Added `content.html` as an extra information page with site navigation.
- Ensured consistent header/nav layout across pages.

### 2026-05-29

- Updated `CSS/style.css` for:
  - header layout
  - button styles
  - page backgrounds
  - card styling
  - booking form layout
  - animated background effect

### 2026-05-29

- Added `.vscode/launch.json` to launch Chrome against `http://localhost:8080`.

## Notes

- Open `index.html` in a browser to view the homepage.
- All pages use `CSS/style.css` for styling consistency.

### 2026-06-19

* Updated `JS/script.js` to add a dynamic date display that updates automatically from the Month, Day, and Hour booking inputs.
* Added a default service cost of **R5000** to the booking cost calculator.
* Implemented automatic parts cost calculation based on the number of damaged vehicle parts entered in the "Visible parts destroyed" field.
* Set the parts charge rate to **R1000 per damaged part**.
* Added automatic total cost calculation combining the base service cost and parts cost.
* Updated the Book Now button to display a booking confirmation message showing the selected booking date and total repair cost.
