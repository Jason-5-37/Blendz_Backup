class Cart {
    constructor(id, number, Price, orderID,ShippingAddress ) {
        this.id = id;
        this.number = number;
        this.Price = Price;
        this.orderID = orderID;
        this.ShippingAddress = ShippingAddress;
    }
}

module.exports = Cart; 