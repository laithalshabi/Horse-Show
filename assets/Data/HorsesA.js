function HorsesA(horseName,horsePrice,horsePicture,horseInfo,horseBirthDate){
    this.horseName = horseName;
    this.horsePrice = horsePrice;
    this.horsePicture = require('../images/default.jpg');
    this.horseInfo = horseInfo;
    this.horseBirthDate = horseBirthDate;
}

export default HorsesA;