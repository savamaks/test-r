import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import One from "./Pages/One";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import { requestDisk } from "./requestApi/request";

export default function App() {
    const [result, setResult] = useState<any>("");

    const loadRoute = async () => {
        const res = await requestDisk();
        console.log(res);
        setResult(res);
    };

    useEffect(() => {
        loadRoute();
    }, []);
    return (
        <Router>
            <div>
                {result !== "" &&
                    result.data.map((el: any, index: number) => {
                        return (
                            <Link key={index} to={el.attributes.ids}>
                                {JSON.stringify(el.attributes.ids)}
                            </Link>
                        );
                    })}
                <Routes>
                    {result !== "" &&
                        result.data.map((el: any, index: number) => {
                            return <Route key={index} path={`/${el.attributes.ids}`} element={<One str={el} />} />;
                        })}

                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}
