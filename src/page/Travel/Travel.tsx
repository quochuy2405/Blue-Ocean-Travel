import { Footer, Header, Slider, TravelsList } from "@/components";
import { useEffect } from "react";
import  styles  from "./Travel.module.scss"
const Travel = (): JSX.Element => {
      useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <div>
            <Header />
             <div className={styles.bodyPage}>
                <Slider />
                 <TravelsList titleList="DISCOVER" />
            </div>
            <Footer/>
        </div>
    );
};

export default Travel;