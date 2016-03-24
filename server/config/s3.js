const aws = require('aws-sdk');

// TODO use enviroment variables
// This is a work-around for Travis CI
var config; // let doesnt work
try {
  config = require('./config.js');
} catch (err) {
  console.log('bookshelf.js:', err.message);
  config = {
    AWS_ACCESS_KEY: 'maketravishappy',
    AWS_SECRET_KEY: 'maketravishappy',
    S3_BUCKET: 'maketravishappy',
  };
}

module.exports = {
  createURL(req, res) {
    aws.config.update({ accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY });
    const s3 = new aws.S3();
    const params = {
      Bucket: config.S3_BUCKET,
      Key: req.query.file_name,
      Expires: 600,
      ContentType: req.query.file_type,
      ACL: 'public-read',
    };
    s3.getSignedUrl('putObject', params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const returnData = {
          signed_request: data,
          url: `https://${config.S3_BUCKET}.s3.amazonaws.com/${req.query.file_name}`,
        };
        res.json(returnData);
      }
    });
  },

};
