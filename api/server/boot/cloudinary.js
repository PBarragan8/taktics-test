'use strict';

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'djootqhlg',
  api_key: '818671685448464',
  api_secret: 'FDAIDPuF88vWlTq6rhQp_HO4wrA'
});

module.exports = cloudinary;