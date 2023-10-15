import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";



const PaymentHistory = () => {
    const [invoice, setInvoice] = useState([]);
    const { user } = useAuth();
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/payment-history?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setInvoice(data);

            })
    }, [user])
    return (
        <div className="w-2/3 mx-auto">
            <SectionTitles subHeading={'Payment'} heading={'Payment History'}></SectionTitles>

            <div className="grid grid-cols-2 gap-5">
                {
                    invoice.map(item =>
                        <div className="bg-gray-100 p-5" key={item._id}>
                            <h2>Name: {item.email}</h2>
                            <p>Date: {item.date.split('T')[0]}</p>
                            <p>Transaction : {item.transactionId}</p>
                            <p>Total Items: {item.menuItems.length}</p>
                            <p>Total Price: ${item.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PaymentHistory;