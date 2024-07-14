import React from 'react';
import Popular from '../PopularSellers/Popular';
import '../ServiceProvider/ServiceProvider.css';
import FooterSection from '../FooterSection/FooterSection';
import { useLocation, Link } from 'react-router-dom';

function Serviceprovider() {
    const location = useLocation();
    const { selectedItem, city, landmark, address } = location.state || {};

    return (
        <>
            <div className=" sm:p-6 px-2 py-6 text-left mt-[17.5%] contactGradient sm:max-lg:mt-[8%] xl:mt-[5.5%]">
                <nav className=" sm:text-base text-sm mb-3 ml-[3%] font-bold">
                    <Link to="/" className=' text-black mx-2 no-underline'>Home</Link> |
                    <Link to="/CleaningHelp" className=' text-black mx-2 no-underline'>Cleaning Help</Link> |
                    <Link to="/Address" className=' text-black mx-2 no-underline'>Address</Link> |
                    <a className=' text-black mx-2 no-underline'>{selectedItem}</a>
                </nav>
                <h1 className=" sm:text-4xl text-2xl font-extrabold text-black ml-[3%]">Sellers</h1>
                {/* <div className="address-details">
                    <p>City: {city}</p>
                    <p>Landmark: {landmark}</p>
                    <p>Address: {address}</p>
                </div> */}
            </div>
            <Popular selectedItem={selectedItem} city={city} landmark={landmark} address={address} />
            <FooterSection />
        </>
    );
}

export default Serviceprovider;
