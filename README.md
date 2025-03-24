# skip-page

Overview
This project is a React-based application that displays a list of skip hire services with an emphasis on responsive design and a clean user interface. The page is optimized for mobile and desktop viewing, providing users with an intuitive way to view skip hire options, prices, and their characteristics.

Project Structure
The project is structured to keep the code maintainable, scalable, and easy to understand. Here's a breakdown of the project structure:

bash

/skip_hire_react_project
├── /public
│   └── index.html            # The main HTML file
├── /src
│   ├── /assets               # Contains images and other static files
│   ├── /components           # React components
│   │   ├── SkipCard.js       # Displays individual skip hire information
│   │   └── SkipList.js       # Displays a list of skip hire services
│   ├── /styles               # Global styles (CSS)
│   │   └── App.css           # Global CSS for the entire project
│   ├── App.js                # Main App component
│   └── index.js              # Entry point for the React app
├── /package.json             # Project metadata and dependencies
└── README.md                 # Project documentation
Features
Responsive Design: The layout adapts to mobile, tablet, and desktop devices using modern CSS techniques, including Flexbox and CSS Grid.

Display of Skip Hire Information: A list of available skips is shown with details such as size, hire period, and price (including VAT). Each skip is displayed in a responsive card format.

Colorful UI: The application utilizes a color scheme that is visually appealing and helps distinguish different sections, ensuring ease of use.

Dynamic Price Calculation: Each skip card includes the price with VAT and a separate price calculation based on different VAT rates.

Intuitive Layout: Clear display of skip information, such as the size, cost, and location of delivery (postcode).
