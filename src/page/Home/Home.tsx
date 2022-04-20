import { Header, Slider, TourGuideList, Footer, TravelsList } from '@/components'
import place1 from '/images/place1.png'
import place2 from '/images/place2.png'
import place3 from '/images/place3.png'
import place4 from '/images/place4.png'
import styles from './Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.bodyPage}>
        <Slider />
        <div className={styles.intro}>
          <div className={styles.contentTop}>
            <div className={styles.enjoy}>
              <p>Welcome to Quy Nhon</p>
            </div>
            <div className={styles.title}>
              <p>CHECK IN NOW</p>
            </div>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor lorem ipsum.
              </p>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.itemTypeContent}>
              <div className={styles.itemImg}>
                <img src={place4} alt="place4" />
              </div>
              <div className={styles.contentText}>
                <div className={styles.itemTitle}>
                  <p>Where to Stay</p>
                </div>
                <div className={styles.itemDescription}>
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className={styles.itemTypeContent}>
              <div className={styles.itemImg}>
                <img src={place2} alt="place2" />
              </div>
              <div className={styles.contentText}>
                <div className={styles.itemTitle}>
                  <p>Restaurants</p>
                </div>
                <div className={styles.itemDescription}>
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className={styles.itemTypeContent}>
              <div className={styles.itemImg}>
                <img src={place1} alt="place1" />
              </div>
              <div className={styles.contentText}>
                <div className={styles.itemTitle}>
                  <p>Sightseeing</p>
                </div>
                <div className={styles.itemDescription}>
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className={styles.itemTypeContent}>
              <div className={styles.itemImg}>
                <img src={place3} alt="place3" />
              </div>
              <div className={styles.contentText}>
                <div className={styles.itemTitle}>
                  <p>Shops & Boutiques</p>
                </div>
                <div className={styles.itemDescription}>
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TravelsList titleList="DISCOVER" size={4}/>
        <TravelsList titleList="TOP TRAVEL" size={4} />
        <TourGuideList />
      </div>
      <Footer />
    </div>
  )
}

export default Home
