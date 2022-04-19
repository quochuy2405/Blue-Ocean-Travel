import { Footer, Header, Slider } from "@/components";
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
                
            </div>
            <Footer/>
        </div>
    );
};

export default Travel;