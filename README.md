# project-nexjs-strapi
1. Clone the repository locally:

```bash
  git clone https://github.com/Tunglt92/project-nexjs-strapi.git
```

2. Run `setup` command to setup frontend and backend dependencies:

```bash
  npm run setup
```

3. Next, navigate to your `/backend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. Next we need to switch to our `/frontend` directory and create our `.env` file and paste in the following. 

```bash
NEXT_PUBLIC_STRAPI_API_TOKEN=your-api-token
```


5. Start your project by running the following command:

```bash
  npm run setup
  npm run dev
```

We can also start both projects with one command using the `concurrently` package.

You can find the setting inside the `package.json` file inside the root folder.

```json
{
  "scripts": {
    "frontend": "npm run dev --prefix ../frontend/",
    "backend": "npm run dev --prefix ../backend/",
    "clear": "cd frontend && rm -rf .next && rm -rf cache",
    "setup:frontend": "cd frontend && npm install",
    "setup:backend": "cd backend && npm install",
    "setup": "npm install && npm run setup:frontend && npm run setup:backend",
    "dev": "npm run clear && concurrently \"cd frontend && npm run dev\" \"cd backend && npm run develop\"",
    "seed": "cd backend && yarn strapi import -f ../seed-data.tar.gz",
    "export": "cd backend && yarn strapi export --no-encrypt -f ../seed-data"
  },
  "dependencies": {
    "concurrently": "^8.2.2"
  }
}
```
