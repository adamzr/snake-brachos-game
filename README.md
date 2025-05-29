# Snake Brachos Game

Snake Brachos is a web-based game inspired by the classic Snake, with a unique twist: you need to eat food with the right bracha. The game is lightweight, fast, and runs entirely in the browser.

## Features

- **Classic Snake Gameplay:** Control the snake using arrow keys.
- **Brachos Power-ups:** Collect brachos to grow your snake and increase your score.
- **Responsive Design:** Playable on desktop and mobile browsers.
- **High Score Tracking:** Keeps track of your best score during the session.

## Deployment

This project is deployed on [Cloudflare Workers](https://workers.cloudflare.com/), ensuring fast, global delivery with serverless infrastructure.

## Local Development

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/snake-brachos-game.git
    cd snake-brachos-game
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the local server:**
    ```bash
    npx wrangler dev
    ```
    The game will be available at `http://localhost:8787`.

## Testing

- **Manual Testing:**  
  Open the local server in your browser and play the game to verify functionality.

## Deployment to Cloudflare Workers

Publish the changes to the main branch to deploy the game:


## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

---

Enjoy playing and learning with Snake Brachos!