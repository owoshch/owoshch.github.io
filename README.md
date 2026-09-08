# owoshch.github.io

Personal site. Plain HTML and CSS, no build step — GitHub Pages serves the files
as they are (`.nojekyll` turns the old Jekyll build off).

```
index.html      bio / start page
music.html      releases, newest first, with a Spotify player
releases.js     the release list — the only file that changes monthly
style.css       one stylesheet for every page
cv/index.html   the old /cv/ URL, kept alive
```

Preview locally with `python3 -m http.server 8000` and open
<http://localhost:8000>.

## Adding a release

Open the song in Spotify, **Share → Copy Song Link**, and take the id out of the
URL (`https://open.spotify.com/track/`**`ID`**`?si=…`). Add a line to
`releases.js`:

```js
{ title: "название", date: "2026-08-21", embed: "track/ID" },
```

Order does not matter, the page sorts by date. For an EP or album use
`"album/ID"`.

## Updating the release list automatically

`tools/update_releases.py` rewrites `releases.js` from the Spotify catalogue, and
`.github/workflows/releases.yml` runs it weekly. To switch it on:

1. Create an app at <https://developer.spotify.com/dashboard> and copy its client
   id and secret.
2. In this repo: **Settings → Secrets and variables → Actions → New repository
   secret**, add `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`.
3. **Actions → Refresh releases → Run workflow** to try it once.

New songs then appear on the site a few days after they land on Spotify, without
touching the repo.

## Custom domain

1. Buy the domain, then in **Settings → Pages → Custom domain** enter it. GitHub
   writes the `CNAME` file itself.
2. At the registrar, for the apex domain add four `A` records pointing at
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (and the matching `AAAA` records if you want IPv6:
   `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
   `2606:50c0:8003::153`).
3. Add a `CNAME` record for `www` pointing at `owoshch.github.io`.
4. Back in **Settings → Pages**, tick **Enforce HTTPS** once the certificate is
   issued (usually under an hour).
