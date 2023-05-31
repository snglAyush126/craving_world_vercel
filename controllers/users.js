const db = require('../config/mongoose');
const Playlist= require('../models/user');


Playlist.create({
    name: "node js",
    ctype: "Front end",
    videos: 11,
    author: "Ayush",
    active: true
});

Playlist.create({
    name: "Large",
    ctype: "Front end",
    videos: 11,
    author: "Ayush",
    active: true
});
