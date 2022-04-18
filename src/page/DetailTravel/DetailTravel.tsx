import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header, TravelsList } from '@/components'
import styles from './DetailTravel.module.scss'

const DetailTravel = () => {
  const { id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="details-page">
      <Header />
      <div className={styles.bodyPage}>
        <div className="body-news-travel"></div>
        <TravelsList titleList="TOP TRAVEL" size={3} />
      </div>
      <Footer />
    </div>
  )
}

export default DetailTravel
