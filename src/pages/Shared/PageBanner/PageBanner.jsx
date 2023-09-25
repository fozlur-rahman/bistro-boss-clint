

const PageBanner = ({ bannerBg, BannerHeading, BannerText }) => {
    return (
        <div className="lg:h-[800px] mb-[200px]">
            <div className="hero min-h-screen flex items-center justify-center " style={{ backgroundImage: `url("${bannerBg}")` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content  text-center text-neutral-content bg-[rgba(0,0,0,.70)] w-3/4 py-28">
                    <div className="">
                        <h1 className="mb-5 lg:text-[88px] font-bold">{BannerHeading}</h1>
                        <p className="mb-5 text-2xl">{BannerText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;