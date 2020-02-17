// StaticContentBucketDEV:
//   Type: AWS::S3::Bucket
//   Properties:
//     BucketName: "${self:custom.dev.bucket_name}"

// data[name] = {
//   'Type' => 'AWS::S3::Bucket',
//   'Properties' => {
//     'BucketName' => "${self:custom.#{environment}.bucket_name}"
//   }
// }

const Base = require("./base");

class Bucket extends Base {
  constructor(prefix, name, stage, _s3Name) {
    super(prefix, name, "S3", "Bucket", stage);
    this._s3Name = _s3Name;
  }
  value() {
    return {
      Type: this.type(),
      Properties: {
        BucketName: name
      }
    };
  }
  s3Name() {
    return [this._s3Name, this.stage].join("-");
  }
  domainName() {
    return {
      "Fn::GetAtt": [this.key(), "DomainName"]
    };
  }
}

module.exports = Bucket;
