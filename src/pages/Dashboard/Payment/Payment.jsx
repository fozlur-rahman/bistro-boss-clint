import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitles subHeading={'Prosude'} heading={'Payment'}></SectionTitles>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />
            </Elements>

        </div>
    );
};

export default Payment;