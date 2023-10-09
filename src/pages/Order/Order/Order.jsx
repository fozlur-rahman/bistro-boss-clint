import PageBanner from "../../Shared/PageBanner/PageBanner";
import orderBannerBg from '../.../../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderCard from "../OrderCard/OrderCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu] = useMenu();
    const categories = ['salads', 'pizza', 'soup', 'desserts', 'drinks'];
    const { category } = useParams();
    const initialCategoryIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialCategoryIndex !== -1 ? initialCategoryIndex : 0); // Set default to the first tab if no category or invalid category is specified

    const salad = menu.filter(i => i.category === 'salad');
    const drinks = menu.filter(i => i.category === 'drinks');
    const pizza = menu.filter(i => i.category === 'pizza');
    const dessert = menu.filter(i => i.category === 'dessert');
    const soup = menu.filter(i => i.category === 'soup');

    useEffect(() => {
        if (initialCategoryIndex === -1) {
            // Fetch and display data for the default tab when no category is specified
            setTabIndex(0); // Set the default tab index here
        }
    }, [initialCategoryIndex]);

    return (
        <div>
            <PageBanner
                bannerBg={orderBannerBg}
                BannerHeading={'OUR Order'}
                BannerText={'Would you like to try a dish?'}
            ></PageBanner>

            {/* -----------------------------tabs -------------------------------------- */}
            <div className="w-[1320px] mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel> <OrderCard items={salad}></OrderCard> </TabPanel>
                    <TabPanel> <OrderCard items={pizza}></OrderCard> </TabPanel>
                    <TabPanel> <OrderCard items={soup}></OrderCard> </TabPanel>
                    <TabPanel> <OrderCard items={dessert}></OrderCard> </TabPanel>
                    <TabPanel> <OrderCard items={drinks}></OrderCard> </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
