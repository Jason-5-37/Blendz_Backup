import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { set } from "immutable";

const PaypalCheckoutButton2 = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  var storage=window.localStorage;
  var uid = storage.getItem("UID");


  axios.get('http://localhost:8080/api/user/' + uid).then((res) => {
        const result = res.data;
        let ShippingAddress = result.ShippingAddress;
        let Total = result.TotalrentPrice;
        var storage=window.localStorage;
        storage.setItem("Address", ShippingAddress);
        storage.setItem("TotalRent", Total);
    }).catch(() => {
        console.log('error to get price');
    })

    

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    // setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
  }

  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }

  return (
    <PayPalButtons 
        style={{
            color: "silver",
            layout: "horizontal",
            size: 'responsive',
            tagline: false,
            shape: "pill",
            label: 'paypal',
            branding: false,
            fundingicons: 'true'
        }}
        
        onClick={(data, actions) => {
            // Validate on button click, client or server side
            const hasAlreadyBoughtCourse = false;
          
            if (hasAlreadyBoughtCourse) {
              setError(
                "You already bought this course. Go to your account to view your list of courses."
              );
          
              return actions.reject();
            } else {
              return actions.resolve();
            }
        }}
        createOrder={(data, actions) => {
          var TotalPrice = storage.getItem("TotalRent");
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                //   description: product.description,
                  amount: {
                    currency_code: "NZD",
                    value: TotalPrice
                  }
                }
              ]
            });
        }}
        onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            var ShipAddress = storage.getItem("Address");
                const orderID = order.id;
                
                axios.get('http://localhost:8080/api/user/AllRentList/'+ uid).then((res) => {
                    const result = res.data;
                    console.log(result);

                    for(var i = 0; i < result.length; i++){
                    //update order number for cart
                        let setOrderID = {
                            "State":"Paid",
                            "orderID": orderID,
                            itemID:result[i].id,
                            "ShippingAddress":ShipAddress
                        };
                        console.log(setOrderID);
                        axios.post('http://localhost:8080/api/user/RentList/update/' + uid, setOrderID).then(res=>{
                            //console.log(res);
                        })
                    }
                })
            
                //reset Total price as 0
                let postdata ={
                    "TotalrentPrice": 0
                };
                console.log(postdata);
                axios.post('http://localhost:8080/api/user/update/' + uid, postdata).then(res =>{
                })
        
                storage.setItem("TotalRent", 0);
                setTimeout("window.location.href = '/SuccessPayment'", 5000)

            // const order = await actions.order.capture(); 
            // console.log("order", order);
            // handleApprove(data.orderID);
        }}
        onCancel={() => {
            // Display cancel message, modal or redirect user to cancel page or back to cart
            setError("Cancel payment");
            {setTimeout("window.location.href = '/cart'", 5000)}
        }}
        onError={(err) => {
            setError(err);
            console.error("PayPal Checkout onError", err);
        }}
    />
  );
}
  
export default PaypalCheckoutButton2;