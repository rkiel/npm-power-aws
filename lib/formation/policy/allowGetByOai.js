class AllowGetByOai {
  constructor(bucket, oai) {
    this.bucket = bucket;
    this.oai = oai;
  }
  value() {
    return {
      Sid: "AllowGetByOai",
      Action: ["s3:GetObject"],
      Effect: "Allow",
      Resource: {
        "Fn::Join": ["/", [this.bucket.arn(), "*"]]
      },
      Principal: {
        CanonicalUser: this.oai.s3CanonicalUserid()
      }
    };
  }
}

module.exports = AllowGetByOai;
