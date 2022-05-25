class Accessorie {
    constructor(id, name, price, imgUrl,des, type, priceforPay, pdfUrl, VideoUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgUrl=imgUrl;
        this.des=des;
        this.type=type;
        this.pdfUrl=pdfUrl;
        this.VideoUrl=VideoUrl;
        this.priceforPay = priceforPay;
    }
}

module.exports = Accessorie; 