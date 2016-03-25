const aws = require('aws-sdk');

module.exports = {
  createURL(req, res) {
    aws.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY });
    const s3 = new aws.S3();
    const params = {
      Bucket: process.env.S3_BUCKET,
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
          url: `https://${process.env.sS3_BUCKET}.s3.amazonaws.com/${req.query.file_name}`,
        };
        res.json(returnData);
      }
    });
  },

};
