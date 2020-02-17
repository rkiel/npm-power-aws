const Base = require("./base");

class OAI extends Base {
  constructor(bucket) {
    super(
      bucket.prefix,
      bucket.name,
      "CloudFront",
      "CloudFrontOriginAccessIdentity",
      bucket.stage
    );
    this.bucket = bucket;
  }
  value() {
    return {
      Type: this.type(),
      Properties: {
        CloudFrontOriginAccessIdentityConfig: {
          Comment: this.bucket.s3Name()
        }
      }
    };
  }
  s3CanonicalUserid() {
    return {
      "Fn::GetAtt": [this.key(), "S3CanonicalUserId"]
    };
  }
}

module.exports = OAI;
