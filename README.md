# Tweet Character Validator

A small React app that lets you write a tweet-style post, shows a live character count against the 280 character limit, and keeps a list of your posts saved in the browser.

## Screenshot

<!-- Add your screenshot at screenshots/app.png, then this will display automatically -->
![Tweet Character Validator screenshot](screenshots/app.png)

## Features

- Live character counter (`0/280 characters`)
- Textarea and counter turn red when you go over 280 characters
- Post button is disabled when the tweet is empty or over the limit
- Clear button to reset the text box
- Posted tweets appear newest first, with a timestamp
- Delete any post
- Posts are saved in `localStorage`, so they stay after a refresh

## Tech Stack

- React 19
- Vite
- ESLint

## Getting Started

Prerequisites: Node.js and npm installed.

```bash
git clone https://github.com/Aloy17/Tweet-Character-Validator.git
cd Tweet-Character-Validator
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How It Works

- `src/App.jsx` holds all the logic: the tweet text is kept in state, and the character count is simply its length.
- A tweet is over the limit when its length is greater than 280, which switches on the error styling and disables posting.
- Posts are stored in state and synced to `localStorage` under the key `tweets` whenever they change.

## Project Structure

```
src/
  App.jsx      Main component (validator and posts list)
  App.css      Component styles
  index.css    Global styles
  main.jsx     App entry point
```
