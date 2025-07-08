# Sem-portfolio

## Project Title & Description

This project is a portfolio website built using JavaScript, React, and Three.js. It showcases skills and projects through interactive 3D elements and a modern design.

## Key Features & Benefits

- **Interactive 3D Experience:** Utilizes Three.js for immersive 3D models and animations.
- **Responsive Design:** Optimized for various screen sizes and devices.
- **Modern UI:** Clean and engaging user interface for a professional presentation.
- **Component-Based Architecture:** Built with React for maintainability and scalability.
- **Smooth Animations:** Enhanced user experience with smooth transitions and animations.
- **Showcases Projects:** Allows easy integration of projects and descriptions.

## Technologies

- **Languages:** JavaScript
- **Framework:** React
- **3D Library:** Three.js
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Other:** Node.js

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

- **Node.js:** (>=16.0.0) - [Download Node.js](https://nodejs.org/)
- **npm:** (>=7.0.0) or **Yarn:** (>=1.22) - Package Manager (usually included with Node.js)
- **Git:** [Download Git](https://git-scm.com/)

## Installation & Setup Instructions

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/SemEtic17/Sem-portfolio.git
    cd Sem-portfolio
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using Yarn:

    ```bash
    yarn install
    ```

3.  **Start the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Using Yarn:

    ```bash
    yarn dev
    ```

    This will start the development server, and you can view the project in your browser at `http://localhost:5173/` (or the address specified in the console).

4. **Build for production**

    Using npm:

    ```bash
    npm run build
    ```

    Using Yarn:

    ```bash
    yarn build
    ```

    This will create a `dist` folder containing the production-ready files.

## Project Structure

```
├── .gitignore            # Specifies intentionally untracked files that Git should ignore
├── README.md             # The current README file
├── dist                  # Production build output
│   ├── assets            # Compiled assets (JS, CSS, images, etc.)
│   │   └── ...
│   ├── desktop_pc        # 3D model assets for desktop_pc
│   │   └── ...
│   ├── index.html        # Main HTML file for the production build
│   ├── logo.svg          # Logo image
│   └── planet            # 3D model assets for the planet scene
│       └── ...
├── index.html            # Main HTML file for development
├── package-lock.json     # Records the exact versions of dependencies installed
├── package.json          # Contains project metadata and dependencies
├── postcss.config.cjs    # Configuration for PostCSS (CSS transformations)
├── public                # Static assets that are served directly (3D models, etc.)
│   ├── desktop_pc        # 3D model assets for desktop_pc
│   │   └── ...
│   ├── logo.svg          # Logo image
│   └── planet            # 3D model assets for the planet scene
│       └── ...
├── src                   # Source code for the application
│   ├── App.jsx           # Main application component
│   ├── assets            # Image and other assets
│   │   └── ...
│   ├── components        # Reusable UI components
│   │   ├── About.jsx     # About section component
│   │   ├── Contact.jsx   # Contact section component
│   │   ├── Experience.jsx# Experience section component
│   │   ├── Feedbacks.jsx # Feedbacks section component
│   │   ├── Hero.jsx      # Hero section component
│   │   ├── Loader.jsx    # Loading component
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   ├── Tech.jsx      # Tech stack component
│   │   ├── Works.jsx     # Works/Projects section component
│   │   ├── canvas        # Canvas-related components
│   │   └── index.js      # Exports all components
│   ├── constants         # Constant values used in the application
│   │   └── index.js      # Exported constants
│   ├── hoc               # Higher-Order Components (HOCs)
│   │   ├── SectionWrapper.jsx # Wraps sections for styling
│   │   └── index.js      # Exports HOCs
│   ├── index.css         # Global CSS styles
│   ├── main.jsx          # Entry point for the React application
│   ├── styles.js         # JavaScript file for styles
│   └── utils             # Utility functions
│       └── motion.js     # Motion-related utilities
├── tailwind.config.cjs   # Configuration for Tailwind CSS
└── vite.config.js        # Configuration for Vite build tool
```

## Usage Examples & API Documentation

This project is a front-end application designed to showcase a portfolio.  There is no specific API to document. The main entry point is `src/main.jsx`, which renders the `App.jsx` component. The `App` component then renders various sections of the portfolio using components like `Hero`, `About`, `Experience`, `Works`, and `Contact`.

The 3D models are loaded and rendered using Three.js within specific components, such as those found in the `src/components/canvas` directory.

## Configuration Options

This project's configuration is primarily managed through the following files:

-   `tailwind.config.cjs`:  Tailwind CSS configuration. Customize the theme, colors, fonts, and breakpoints here.
-   `vite.config.js`: Vite build tool configuration. You can configure the build process, define environment variables, and configure other plugins.
-   `postcss.config.cjs`: PostCSS configuration. Customize CSS transformations.

## Contributing Guidelines

We welcome contributions to this project! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Test your changes thoroughly.
5.  Submit a pull request with a clear description of your changes.

Please follow these guidelines:

-   **Code Style:** Adhere to the existing code style and conventions.
-   **Testing:** Ensure your changes include appropriate unit tests or integration tests.
-   **Documentation:** Update any relevant documentation to reflect your changes.

## License Information

This project is open-source and available under the [MIT License](LICENSE). See the `LICENSE` file for more information.

## Acknowledgments

*   This project utilizes [Three.js](https://threejs.org/) for 3D rendering.
*   Styled with [Tailwind CSS](https://tailwindcss.com/).
*   Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).