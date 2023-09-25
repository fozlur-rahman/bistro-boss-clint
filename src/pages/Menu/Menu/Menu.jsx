import { Helmet } from 'react-helmet-async';
import './Menu.css';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import bannerBgImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../.../../../assets/menu/dessert-bg.jpeg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';

const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(i => i.category == 'offered').slice(0, 6);
    const pizza = menu.filter(i => i.category == 'pizza').slice(0, 6);
    const salad = menu.filter(i => i.category == 'salad').slice(0, 6);
    const dessert = menu.filter(i => i.category == 'dessert').slice(0, 6);
    const soup = menu.filter(i => i.category == 'soup').slice(0, 6);
    return (
        <div className='mb-28'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageBanner
                bannerBg={bannerBgImg}
                BannerHeading={'OUR MENU'}
                BannerText={'Would you like to try a dish?'}
            ></PageBanner>

            {/* offered  */}
            <SectionTitles
                subHeading={'Dont miss'}
                heading="TODAY'S OFFER"
            ></SectionTitles>
            <MenuCategory categoryItem={offered}></MenuCategory>

            {/* dessert  */}
            <MenuCategory
                bgImg={desertImg}
                title={'DESSERTS'}
                details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                categoryItem={dessert}
            ></MenuCategory>


            {/* pizza  */}
            <MenuCategory
                bgImg={desertImg}
                title={'PIZZA'}
                details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                categoryItem={pizza}
            ></MenuCategory>

            {/* salads  */}
            <MenuCategory
                bgImg={desertImg}
                title={'SALADS'}
                details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                categoryItem={salad}></MenuCategory>


            {/* soup */}

            <MenuCategory
                bgImg={desertImg}
                title={'SOUP'}
                details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                categoryItem={soup}></MenuCategory>
        </div>
    );
};

export default Menu;