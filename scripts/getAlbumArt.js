const albumArt = require('album-art')

// Quick script to retrieve url to album artworks
albumArt('ghostemane', { album: 'anti-icon' }).then(console.log)
