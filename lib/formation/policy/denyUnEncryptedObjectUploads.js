class DenyUnEncryptedObjectUploads {
  constructor(bucket) {
    this.bucket = bucket;
  }
  value() {
    return {
      Sid: "DenyUnEncryptedObjectUploads",
      Action: ["s3:PutObject"],
      Effect: "Deny",
      Resource: {
        "Fn::Join": ["/", [this.bucket.arn(), "*"]]
      },
      Principal: "*",
      Condition: {
        Null: {
          "s3:x-amz-server-side-encryption": true
        }
      }
    };
  }
}

module.exports = DenyUnEncryptedObjectUploads;
