## Getting Started

First, install dependencies and setup env variables:

```bash
npm i
cp .env.example .env
```

Then, start docker dev container:

```bash
docker compose up -d
```

Finaly, run prisma migration and start the dev server:

```bash
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/*.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/*.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contributions workflow

Follow this : [Github Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

- Create a branch
- Make changes
- Create a pull request
- Address review comments
- Merge the pull request
- Delete the branch

## Learn More

To learn more about the tech stack used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind Documentation](https://tailwindcss.com) - learn about Tailwind css
- [UI](https://ui.shadcn.com/) - learn about the ui components

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
