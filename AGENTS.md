# Project Guidance

## Project Goal

- A private interactive love-story flipbook using the supplied photos.

## Commands

- Run: `python -m http.server 4173 --bind 0.0.0.0`
- Test: `node --test html-contract.test.mjs`
- Public temporary share: `cloudflared tunnel --no-autoupdate --url http://127.0.0.1:4173`

## Conventions

- Keep original photos untouched. Output copies are in `assets/photos/`.
- Preserve the bundled PageFlip runtime and its source attribution/license.
- Art direction: cute Japanese-inspired candy colors, bows/hearts/stars, and scene-specific affectionate captions. Do not use third-party character artwork or branding.
- A Quick Tunnel is public to anyone who holds its randomized URL and ends when the local tunnel process or computer stops.
