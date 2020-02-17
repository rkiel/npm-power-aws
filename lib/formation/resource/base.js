class Base {
  constructor(prefix, name, serviceName, dataType, stage) {
    this.prefix = prefix;
    this.name = name;
    this.serviceName = serviceName;
    this.dataType = dataType;
    this.stage = stage.toUpperCase();
  }
  key() {
    return [this.prefix, this.name, this.dataType, this.stage].join("");
  }
  type() {
    ["AWS", "", this.serviceName, "", this.dataType].join("::");
  }
  ref() {
    return {
      Ref: this.key()
    };
  }
  arn() {
    return {
      "Fn::GetAtt": [this.key(), "arn"]
    };
  }
}

module.exports = Base;
