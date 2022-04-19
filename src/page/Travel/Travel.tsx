import { Footer, Header, Slider } from "@/components";
import  styles  from "./Travel.module.scss"
const Travel = ():JSX.Element => {
    return (
        <div>
            <Header />
             <div className={styles.bodyPage}>
                <Slider />
                
            </div>
            <Footer/>
        </div>
    );
};

export default Travel;