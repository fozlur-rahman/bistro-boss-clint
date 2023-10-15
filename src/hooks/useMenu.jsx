import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {

    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //         })
    // }, [])

    const { refetch, data: menu = [], isLoading: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu')
            return res.json()

        }
    });
    return [menu, refetch, loading];
}

export default useMenu;