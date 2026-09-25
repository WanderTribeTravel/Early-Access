# WanderTribe Web

The WanderTribe website is a lightweight launch / early-access experience.

## Early access

The early-access flow is intentionally UI-only at this stage. Visitors complete a thoughtful two-step experience on the website and receive an on-site confirmation screen. No external form, database, or submission service is connected yet.

The flow asks for:

- Name
- Email
- City
- Travel interest
- Optional note

The final state clearly explains that the experience is currently a UI prototype and that details are not sent to a live service yet.

## Social configuration

Set these public environment variables when official social destinations are ready:

```text
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_YOUTUBE_URL=
```

App Store and Google Play are intentionally represented as Coming Soon interactions on the website.

## Run locally

```bash
pnpm install
pnpm --filter web dev
```

Open `http://localhost:3000`.
