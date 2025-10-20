Next.js
Start from CLI - scaffold a Next.js project on Workers.

npm
yarn
pnpm
Terminal window
pnpm create cloudflare@latest my-next-app --framework=next

This is a simple getting started guide. For detailed documentation on how to use the Cloudflare OpenNext adapter, visit the OpenNext website ↗.

What is Next.js?
Next.js ↗ is a React ↗ framework for building full stack applications.

Next.js supports Server-side and Client-side rendering, as well as Partial Prerendering which lets you combine static and dynamic components in the same route.

You can deploy your Next.js app to Cloudflare Workers using the OpenNext adapter.

Next.js supported features
Most Next.js features are supported by the Cloudflare OpenNext adapter:

Feature	Cloudflare adapter	Notes
App Router	🟢 supported	
Pages Router	🟢 supported	
Route Handlers	🟢 supported	
React Server Components	🟢 supported	
Static Site Generation (SSG)	🟢 supported	
Server-Side Rendering (SSR)	🟢 supported	
Incremental Static Regeneration (ISR)	🟢 supported	
Server Actions	🟢 supported	
Response streaming	🟢 supported	
asynchronous work with next/after	🟢 supported	
Middleware	🟢 supported	
Image optimization	🟢 supported	Supported via Cloudflare Images
Partial Prerendering (PPR)	🟢 supported	PPR is experimental in Next.js
Composable Caching ('use cache')	🟢 supported	Composable Caching is experimental in Next.js
Node.js in Middleware	⚪ not yet supported	Node.js middleware introduced in 15.2 are not yet supported
Deploy a new Next.js project on Workers
Create a new project with the create-cloudflare CLI (C3).

npm
yarn
pnpm
Terminal window
pnpm create cloudflare@latest my-next-app --framework=next

What's happening behind the scenes?
Develop locally.

After creating your project, run the following command in your project directory to start a local development server. The command uses the Next.js development server. It offers the best developer experience by quickly reloading your app every time the source code is updated.

npm
yarn
pnpm
Terminal window
pnpm run dev

Test and preview your site with the Cloudflare adapter.

npm
yarn
pnpm
Terminal window
pnpm run preview

What's the difference between dev and preview?
Deploy your project.

You can deploy your project to a *.workers.dev subdomain or a custom domain from your local machine or any CI/CD system (including Workers Builds). Use the following command to build and deploy. If you're using a CI service, be sure to update your "deploy command" accordingly.

npm
yarn
pnpm
Terminal window
pnpm run deploy

Deploy an existing Next.js project on Workers
You can convert an existing Next.js application to run on Cloudflare

Install @opennextjs/cloudflare ↗

npm
yarn
pnpm
Terminal window
pnpm add @opennextjs/cloudflare@latest

Install wrangler CLI ↗ as a devDependency

npm
yarn
pnpm
Terminal window
pnpm add -D wrangler@latest

Add a Wrangler configuration file

In your project root, create a Wrangler configuration file with the following content:

wrangler.jsonc
wrangler.toml
  main = ".open-next/worker.js"
  name = "my-app"
  compatibility_date = "2025-03-25"
  compatibility_flags = ["nodejs_compat"]
  [assets]
  directory = ".open-next/assets"
  binding = "ASSETS"

Note

As shown above, you must enable the nodejs_compat compatibility flag and set your compatibility date to 2024-09-23 or later for your Next.js app to work with @opennextjs/cloudflare.

Add a configuration file for OpenNext

In your project root, create an OpenNext configuration file named open-next.config.ts with the following content:

TypeScript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();

Note

open-next.config.ts is where you can configure the caching, see the adapter documentation ↗ for more information

Update package.json

You can add the following scripts to your package.json:

"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
"cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"

Usage
Develop locally.

After creating your project, run the following command in your project directory to start a local development server. The command uses the Next.js development server. It offers the best developer experience by quickly reloading your app after your source code is updated.

npm
yarn
pnpm
Terminal window
pnpm run dev

Test your site with the Cloudflare adapter.

The command used in the previous step uses the Next.js development server to offer a great developer experience. However your application will run on Cloudflare Workers so you want to run your integration tests and verify that your application works correctly in this environment.

npm
yarn
pnpm
Terminal window
pnpm run preview

Deploy your project.

You can deploy your project to a *.workers.dev subdomain or a custom domain from your local machine or any CI/CD system (including Workers Builds). Use the following command to build and deploy. If you're using a CI service, be sure to update your "deploy command" accordingly.

npm
yarn
pnpm
Terminal window
pnpm run deploy
