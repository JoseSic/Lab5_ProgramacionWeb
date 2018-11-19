var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
 
aws.config.update({
    secretAccessKey:'Credenciales',
    accessKeyId: 'Credenciales',
    region:'Credenciales'
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