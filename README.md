# Simple To-Do app

* This is a simple implementation of a todo list app with basic authentication and functionality

## Getting Started

### Prerequisites

* Node.js (v14 or higher recommended)
* npm (v6 or higher recommended) or yarn (v1.22 or higher recommended)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/interview-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd interview-project
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Login Page

* Enter a valid email and a password longer than 8 characters.
* The submit button will be enabled if both conditions are met.
* On form submission, the user will be redirected to the Dashboard page.

### Dashboard Page

* A responsive menu is available with links to the Home page and the Second page.
* On smaller screens, a menu button appears, which can be used to toggle the menu.

### Home Page

* A simple To-Do list is available where tasks can be added, updated, and deleted.
* The list is not persistent and will be cleared on page reload.

### Second Page

* Responsive text cards are displayed:
  * 3 cards in a row on desktop.
  * 2 cards in a row and 1 card below on tablet.
  * All cards in a column on mobile.

## Technologies Used

* React
* Tailwind CSS
* React Router
