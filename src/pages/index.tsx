import {Fragment} from "react";
import {Header, Hero, Brands, Work, Task, Features, Footer, Customers} from "@/components/Home";
import {NextPage} from "next";

const Home: NextPage  = () =>  {
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

export default Home
