// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dia49kn8r',
    api_key: '263315931712178',
    api_secret: 'k3K6_6ZAXCaMVYIhjJLlLjGUZsI'
})

module.exports = cloudinary;