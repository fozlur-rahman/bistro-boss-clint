import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { useAuth } from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="w-2/3 mx-auto ">
            <SectionTitles subHeading={'User Home'} heading={'User Home'}></SectionTitles>
            <div className="shadow text-2xl p-8">
                <h1>Neme: {user.displayName}</h1>
                <h1>Email: {user.email}</h1>
            </div>

        </div>
    );
};

export default UserHome;