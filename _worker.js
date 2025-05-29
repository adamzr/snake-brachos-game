export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Serve the main game HTML for the root path or index.html
    if (url.pathname === "/" || url.pathname.startsWith("/index.html")) {
      // Use the Assets API to serve game.html from the public directory
      const assetRequest = new Request(new URL("/game.html", request.url), request);
      return await env.ASSETS.fetch(assetRequest);
    }

    // Handle other requests (e.g., if you had separate asset files)
    // For this example, everything is in HTML_CONTENT, so other paths are 404.
    return new Response("Not Found", { status: 404 });
  }
};
