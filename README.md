# Task Mini Clone Unsplash

![Project Screenshot](./public/ogp.jpg 'Project Screenshot')

This repository contains a mini-clone of [Unsplash](https://unsplash.com/), designed to showcase modern web development practices with React, TypeScript, and CSS. The project allows users to search for images via the Unsplash API and view image collections in a responsive, user-friendly interface.

## Features

- **Search Functionality**: Users can search for images by keyword using the Unsplash API.
- **Image Grid Display**: A responsive grid layout for displaying images dynamically.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Lightweight**: Built with modern tools for performance and scalability.

## Technologies Used

- **React**: Component-based UI development.
- **TypeScript**: Type-safe JavaScript for enhanced reliability and maintainability.
- **CSS**: Use module CSS.
- **Unsplash API**: High-quality, free image source.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SvitlanaZhovanik/task-mini-clone-unsplash.git
   cd task-mini-clone-unsplash
   ```
2. **Install dependencies**:Make sure you have [Node.js](https://nodejs.org/en) and npm (or Yarn) installed.
   ```bash
    npm install
   ```
3. **Set up the Unsplash API:**

   - Sign up or log in to Unsplash and create an application to obtain your API key.
   - Create a .env.local file in the root directory and add your Unsplash API key:

   ```makefile
       REACT_APP_UNSPLASH_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm un dev
   ```
5. **Access the application:** Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
task-mini-clone-unsplash/
├── public/          # Static assets
├── src/
│   ├── app/         # routing app
│   ├── components/  # Reusable components
│   ├── sections/    # Sections for pages
│   ├── data/        # text
│   └── types/       # Types for API
├── .env.local       # Environment variables
├── .gitignore       # Files ignored by git
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```
