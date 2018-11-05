var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
 
aws.config.update({
    secretAccessKey:'Z5OZX9IMyyXgbnCK9DnZ9+fks0JBVlgXOntK3+wV',
    accessKeyId: 'AKIAJ2FSN3KE34FHHKIQ',
    region:'us-east-1'
})
var s3 = new aws.S3()
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'programacionweb',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'Testing'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;