function Auctions(id,name,about,price,startdate,enddate,endTimestamp,userid,horseid){
    this.id = id;
    this.name = name;
    this.about = about;
    this.price = price;
    this.startdate = startdate;
    this.enddate = enddate;
    this.endTimestamp = endTimestamp
    this.userid = userid;
    this.horseid = horseid;
}

export default Auctions;