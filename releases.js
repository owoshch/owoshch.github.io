/* Releases shown on music.html.
 *
 * To add a song by hand: open it in Spotify, "Share > Copy Song Link", and take
 * the id out of the URL — https://open.spotify.com/track/ID?si=... — then add
 *
 *   { title: "название", date: "2026-08-21", embed: "track/ID" },
 *
 * Order does not matter; the page sorts newest first. Dates are YYYY-MM-DD.
 * For an EP or album use "album/ID" instead of "track/ID".
 *
 * If you set up tools/update_releases.py (see README), this file is regenerated
 * from Spotify and anything you write here by hand will be replaced.
 */

window.RELEASES = [
  { title: "солнечное утро", date: "2026-07-24", embed: "track/2iBqQ6PnGkoYpwCMIzLV68" }
];
