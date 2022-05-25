import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { set } from "immutable";

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  var storage=window.localStorage;
  var uid = storage.getItem("UID");


  axios.get('http://localhost:8080/api/user/' + uid).then((res) => {
        const result = res.data;
        let ShippingAddress = result.ShippingAddress;
        let Total = result.CartTotalPrice;
        var storage=window.localStorage;
        storage.setItem("Total", Total);
        storage.setItem("Address", ShippingAddress);
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
            var TotalPrice = storage.getItem("Total");
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
                console.log(orderID);     
                axios.get('http://localhost:8080/api/user/cart/'+ uid).then((res) => {
                    const result = res.data;
                    for(var i = 0; i < result.length; i++){
                    //update order number for cart
                        let setOrderID = {
                            "itemID":result[i].id,
                            "orderID": orderID,
                            "ShippingAddress":ShipAddress
                        };
                        axios.post('http://localhost:8080/api/user/update/cartitem/' + uid, setOrderID).then(res=>{
                            //console.log(res);
                        })
                    //create order number
                        let postPaidListData = {
                            "orderID": orderID
                        }
                            //console.log(postPaidListData);
                        axios.post('http://localhost:8080/api/user/create/paidlist/' + uid, postPaidListData).then(res => {
                            //console.log(res);
                        })
                    }
                })


                axios.get('http://localhost:8080/api/user/cart/'+ uid).then((res) =>{
                    const result = res.data;
                    //console.log(result);
                    //console.log(result[0]);
                    for(var i = 0; i < result.length; i++){
                    //post order list
                        let postdata = {
                            "id": result[i].id,
                            "number": result[i].number,
                            "Price": result[i].Price,
                            "orderID": result[i].orderID,
                            "ShippingAddress": result[i].ShippingAddress
                        }
                        console.log("this is the the id get from cart" + postdata)
                        //console.log(result[i]);
                        axios.post('http://localhost:8080/api/user/update/PaidList/' + uid, postdata).then(res=>{
                            //console.log(res);
                        })
                    //clean the cart
                    
                        let postDeleteitemID = {
                            "itemID":result[i].id
                        }
                        //console.log("id from post to delete api"+result[i].id);

                        axios.post('http://localhost:8080/api/user/cart/delete/' + uid, postDeleteitemID).then(res =>{
                            console.log(res);
                        })
                    }
                }).catch(()=>{
                    console.log('error to get cart list');
                })
            
                //reset Total price as 0
                let postdata ={
                    "CartTotalPrice": 0
                };
                axios.post('http://localhost:8080/api/user/update/' + uid, postdata).then(res =>{
                })
        
                storage.setItem("Total", 0);
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
  
export default PaypalCheckoutButton;