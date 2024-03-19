import { requestDisk } from "../requestApi/request";
import { MouseEvent } from "react";


const Home = () => {
    const click = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const res = await requestDisk();
        console.log(res);
    };
    return (
        <>
            <h2>Home</h2>
            <button onClick={click}>click</button>
        </>
    );
};
export default Home;
