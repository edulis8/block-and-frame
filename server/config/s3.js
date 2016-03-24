const aws = require('aws-sdk');
const AWS_ACCESS_KEY = require('./config').AWS_ACCESS_KEY;
const AWS_SECRET_KEY = require('./config').AWS_SECRET_KEY;
const S3_BUCKET = require('./config').S3_BUCKET;

module.exports = {
  createURL(req, res) {
    aws.config.update({ accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY });
    const s3 = new aws.S3();
    const params = {
      Bucket: S3_BUCKET,
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
          url: `https://${S3_BUCKET}.s3.amazonaws.com/${req.query.file_name}`,
        };
        res.json(returnData);
      }
    });
  },

};
