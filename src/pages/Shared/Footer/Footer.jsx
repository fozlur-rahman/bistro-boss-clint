
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=" flex bg-neutral justify-center text-white">
                <aside className='w-[50%] p-20 text-right space-y-3'>
                    <h1 className='text-3xl'>CONTACT US</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh </p>
                    <p> +88 123456789</p>
                    <p>  Mon - Fri: 08:00 - 22:00</p>
                    <p>  Sat - Sun: 10:00 - 23:00</p>
                </aside>

                <nav className='w-[50%] p-20 bg-[#111827] text-left space-y-5'>
                    <header className="text-3xl">Follow Us</header>
                    <p className="text-xl"> Join us on social media</p>
                    <div className="flex gap-5">
                        <a href=""><FaFacebookF className='text-3xl'></FaFacebookF></a>
                        <a href=""><FaInstagram className='text-3xl'></FaInstagram></a>
                        <a href=""><FaTwitter className='text-3xl'></FaTwitter></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;