const Base = require("./base");

class BucketPolicy extends Base {
  constructor(bucket, policyStatements) {
    super(bucket.prefix, bucket.name, "S3", "BucketPolicy", bucket.stage);
    this.bucket = bucket;
    this.policyStatements = policyStatements;
  }
  value() {
    return {
      Type: this.type(),
      Properties: {
        Bucket: this.bucket.ref(),
        PolicyDocument: {
          Statement: this.policyStatements.map(x => x.value())
        }
      }
    };
  }
}

module.exports = BucketPolicy;
