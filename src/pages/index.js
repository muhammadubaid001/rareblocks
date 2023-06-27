import {Fragment} from "react";
import {Header, Hero, Brands, Work, Task, Features, Footer, Customers} from "../components/Home";

export default function Home() {
    return (
        <Fragment>
            <div className="overflow-x-hidden bg-gray-50">
                <Header/>
                <Hero/>
            </div>
            <Brands/>
            <Work/>
            <Task/>
            <Customers/>
            <Features/>
            <Footer/>
        </Fragment>
    )
}
