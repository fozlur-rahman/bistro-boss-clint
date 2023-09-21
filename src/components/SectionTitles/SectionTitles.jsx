
const SectionTitles = ({ heading, subHeading }) => {
    return (
        <div className=" w-3/12 mx-auto space-y-3 text-center my-12">
            <p className="text-[#D99904] ">--- {subHeading} ---</p>
            <h1 className="border-y-2 uppercase text-3xl py-6">{heading}</h1>
        </div>
    );
};

export default SectionTitles;