import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecomends/ChefRecommends";
import Contact from "../Contact/Contact";
import FeaturesMenu from "../FeaturesMenu/FeaturesMenu";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <About></About>
            <ChefRecommends></ChefRecommends>
            <Contact></Contact>
            <FeaturesMenu></FeaturesMenu>
            <Testimonials></Testimonials>


        </div>
    );
};

export default Home;