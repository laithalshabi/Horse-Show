function HorsesA(id,horseName,horsePrice,horsePicture,horseInfo,horseBirthDate,userId){
    this.id = id;
    this.horseName = horseName;
    this.horsePrice = horsePrice;
    this.horsePicture = require('../images/default.jpg');
    this.horseInfo = horseInfo;
    this.horseBirthDate = horseBirthDate;
    this.userId = userId;
}

export default HorsesA;