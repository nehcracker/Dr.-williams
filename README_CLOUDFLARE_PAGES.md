# Deploying to Cloudflare Pages

This project can be deployed to Cloudflare Pages using the following steps:

1. Ensure you have a Cloudflare account and have installed the Wrangler CLI:
   npm install -g wrangler

2. Configure your `wrangler.toml` file with your Cloudflare account details.

3. Build the project:
   npm run build

4. Publish the project to Cloudflare Pages:
   wrangler publish

5. For SPA routing, a `_redirects` file is included in the `public/` directory.

For more details, see the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).
