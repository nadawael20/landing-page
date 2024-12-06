# Landing Page Project

This project is a fully responsive **Landing Page** consisting of four sections: **Home**, **Services**, **Process**, and **Subscribe**. It is based on a design by [_DS CODE_](https://www.figma.com/community/file/1310476524488460352).

## Table of Contents

1. [Features](#features)
2. [Sections](#sections)
3. [Design](#design)
4. [Usage](#usage)

## Features

This landing page includes the following features:

1. **Dynamic Navigation**:

   - The navigation bar is created dynamically based on the sections of the page, allowing easy updates if new sections are added.

2. **Dynamic Process Section**:

   - The **Process** section is built dynamically using JavaScript, making it easy to update the content without modifying the HTML.

3. **Smart Navigation Visibility**:

   - The fixed navigation bar hides when the user stops scrolling and reappears when scrolling resumes.
   - To improve performance, both **throttling** and **debouncing** techniques are implemented.

4. **Section Highlighting**:

   - Sections are automatically highlighted when they enter the viewport. This is achieved by adding a **`highlight`** class to the section in view, providing clear visual feedback to users as they scroll.

5. **Responsive Design**:

   - The layout adjusts seamlessly for different screen sizes, ensuring a smooth experience on mobile, tablet, and desktop devices.

## Sections

1. **Home**: The introductory section of the page, including a welcoming message and primary call-to-action.
2. **Services**: A section outlining the key services offered, with attractive visuals.
3. **Process**: A step-by-step breakdown of the working process, dynamically generated to make updates straightforward.
4. **Subscribe**: A final section encouraging users to subscribe to a newsletter or service.

## Design

The landing page design is based on a template by [_DS CODE_](https://www.figma.com/community/file/1310476524488460352) and follows a modern and clean style with engaging visuals.

## Usage

- Open index.html in your web browser or use a local server. The page automatically adapts to your screen size.
- Scroll through the sections and interact with the navigation to explore the dynamic features.
