'use strict';

const cloudinary = require('../../server/boot/cloudinary');

module.exports = function(Budget) {
  Budget.upload = function(base64, cb) {
    cloudinary.uploader.upload(base64, { folder: 'taktics' }, function(error, result) {
      if (error) return cb(error);
      cb(null, { url: result.secure_url });
    });
  };

  Budget.remoteMethod('upload', {
    description: 'Upload image to Cloudinary',
    http: { path: '/upload', verb: 'post' },
    accepts: [{ arg: 'base64', type: 'string', required: true }],
    returns: { arg: 'result', type: 'object', root: true },
  });
};