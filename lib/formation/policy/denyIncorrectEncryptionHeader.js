class DenyIncorrectEncryptionHeader {
  constructor(bucket) {
    this.bucket = bucket;
  }
  value() {
    return {
      Sid: "DenyIncorrectEncryptionHeader",
      Action: ["s3:PutObject"],
      Effect: "Deny",
      Resource: {
        "Fn::Join": ["/", [this.bucket.arn(), "*"]]
      },
      Principal: "*",
      Condition: {
        StringNotEquals: {
          "s3:x-amz-server-side-encryption": "AES256"
        }
      }
    };
  }
}

module.exports = DenyIncorrectEncryptionHeader;
