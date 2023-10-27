# TMDB Cards

This project was setup using Vite + React and TailwindCSS for styling. The project uses [Sleep Tracker Backend](https://github.com/bloodmonk7/sleep-tracker-backend/tree/main/backend) to call APIs from backend.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)

## Demo

Here is the [link](https://frontend-tawny-delta.vercel.app/) to checkout the live demo.

NOTE: I am using Render to host my backend for Free and It's having Cors Issue on free plan. I tested the whole program in Local Machine/`localhost` and it's working. So if the issue occurs in Live Project for you please use this [CORS unblock extension](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) and it will start working normally in your browser.

## Features

- Sign up for new users
- Basic Transitions for moving through screens
- Sending and recieving data from Backend
- You can always start again the sleep-tracking test after final screen.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bloodmonk7/sleep-tracker-frontend.git
   cd sleep-tracker-frontend

   ```

2. Install dependencies by running the following command:

   ```bash
   npm i

   ```

3. Usage

   - If you are using live backend it won't require this step. In other case if you are hosting backend on local machine update the API_BASE_URL value in `api.js` present in `utils` folder from `https://sleep-tracker-api.onrender.com` to `http://localhost:10000`.

4. Start the development server:

   ```bash
   npm run dev
   ```

## Technologies Used

- React
- [Sleep Tracker Backend API](https://github.com/bloodmonk7/sleep-tracker-backend/tree/main/backend) created via Node.js, Express.js and MongoDB.
- Tailwind CSS for styling
- Other React.js functionalities including Hooks, Route.
