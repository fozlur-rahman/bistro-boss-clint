import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import './CheckoutForm.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const { user } = useAuth();
    const elements = useElements();
    const [stripeError, setStripeError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [proccessing, setProccessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    console.log(price)
    // api call for send data price to server price calculation
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!elements || !stripe) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setStripeError(error)
        }
        else {
            console.log(paymentMethod)
        }
        setProccessing(true);

        // payment confirm from stripe api 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,

            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'nai',
                        email: user?.email || 'nai'
                    },
                },
            }
        );
        if (confirmError) {
            setStripeError(confirmError);
        }
        setProccessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const transactionId = paymentIntent.id;

            // save payment info to server 
            const paymentInfo = {
                email: user?.email,
                transactionId,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payment', paymentInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            title: 'Payment success',
                            text: "Go to your payment history!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Payment history!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/dashboard/payment-history')
                            }
                        })

                    }
                })
        }

        // get api for display payment info or invoice 


    }

    return (
        <>
            <div className="container mx-auto w-2/3">
                {/* payment form  */}
                <form className="p-10" onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-outline border-primary mt-8 px-8 text-primary hover:btn-primary hover:text-white" type="submit" disabled={!stripe || !clientSecret || proccessing}>
                        Pay
                    </button>
                </form>
            </div>

            {stripeError && <p className="text-red-500 ms-10">{stripeError.message}</p>}
            {transactionId && <p className="text-green-500 ms-10">Payment successfully done with transaction id: <span className="text-secondary">{transactionId}</span> </p>}
        </>
    );

}
export default CheckoutForm;