import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header, TravelsList } from '@/components'
import styles from './DetailTravel.module.scss'
import { places } from '@/data'

const DetailTravel = () => {
  const { id } = useParams() as { [key: string]: string }

  const Place = places[id]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="details-page">
      <Header />
      <div className={styles.bodyPage}>
        <div className={styles.bodyNewsTravel}>
          <Place />
        </div>
        <TravelsList titleList="TOP TRAVEL" size={3} />
      </div>
      <Footer />
    </div>
  )
}

export default DetailTravel
