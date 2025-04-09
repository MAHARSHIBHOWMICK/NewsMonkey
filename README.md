# NewsMonkey

NewsMonkey is a React-based web application that provides users with the latest news from various sources. It offers features like category-based news filtering and a seamless browsing experience.

## Features

- **Category Filtering:** Browse news articles based on categories such as Business, Entertainment, Health, Science, Sports, and Technology.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Real-time Updates:** Fetches the latest news articles in real-time.

## Technologies Used

- **Frontend:** React.js
- **Styling:** CSS, Bootstrap
- **API:** NewsAPI.org

## Installation

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MAHARSHIBHOWMICK/NewsMonkey.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd NewsMonkey
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Obtain API Key:**
   - Register at [NewsAPI.org](https://newsapi.org/) to get a free API key.
   - Create a `.env` file in the root directory and add your API key:
     ```
     REACT_APP_NEWS_API_KEY=your_api_key_here
     ```

5. **Start the development server:**
   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

## Usage

- **Select Category:** Choose a news category from the navigation bar to filter articles.
- **Read Articles:** Click on any article to read more details.
- **Navigate Pages:** Use the pagination controls to browse through different pages of news articles.
