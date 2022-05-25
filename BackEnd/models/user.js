class User {
    constructor(id, name, email, Pendding, RentRequest, ShippingAddress) {
        this.id = id;        
        this.name = name;
        this.email = email;
        this.Pendding = Pendding;
        this.RentRequest = RentRequest;
        this.ShippingAddress = ShippingAddress;
    }
}

module.exports = User; 