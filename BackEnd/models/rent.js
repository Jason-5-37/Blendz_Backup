class Rent {
    constructor(id, number, TotalPrice, orderID, StartDate, EndDate, State, ShippingAddress) {
        this.id = id;
        this.number = number;
        this.TotalPrice = TotalPrice;
        this.orderID = orderID;
        this.StartDate= StartDate;
        this.EndDate = EndDate;
        this.State = State;
        this.ShippingAddress = ShippingAddress;
    }
}

module.exports = Rent; 