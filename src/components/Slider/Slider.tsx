import { useEffect, useState } from 'react'
import styles from './Slider.module.scss'

const listSlider = [
  {
    title: 'Biển Quy Nhơn',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tenetur nam similique, aperiam exercitationem nostrum, provident rem voluptatibus architecto ad fugiat soluta totam autem quos',
    image:
      'https://images.pexels.com/photos/10139996/pexels-photo-10139996.jpeg?cs=srgb&dl=pexels-sean-o%27brien-10139996.jpg&fm=jpg',
  },
  {
    title: 'Gành đã giã',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tenetur nam similique, aperiam exercitationem nostrum, provident rem voluptatibus architecto ad fugiat soluta totam autem quos',
    image:
      'https://images.pexels.com/photos/2045391/pexels-photo-2045391.jpeg?auto=compress&cs=tinysrgb&w=3260&h=10050&dpr=1',
  },
]

const Slider = () => {
  const [activeSlider, setActiveSlider] = useState(0)
  useEffect(() => {
    const time = setInterval(() => {
      setActiveSlider((e) => (e < listSlider.length - 1 ? e + 1 : 0))
    }, 6000)
    return () => clearInterval(time)
  }, [])
  return (
    <div className={styles.sliderBox}>
      <div className={styles.sliders}>
        {listSlider.map((item, index) => (
          <div
            key={index}
            className={`${styles.slider} ${index === activeSlider ? styles.sliderActive : ''}`}
          >
            <div className={styles.content}>
              <div className={styles.title}>
                <p>{listSlider[activeSlider].title}</p>
              </div>
              <div className={styles.description}>
                <p>{listSlider[activeSlider].description}</p>
              </div>
            </div>
            <div className={`${styles.imgWrap} ${index === activeSlider ? styles.active : ''}`}>
              <img src={item.image} alt="slider" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
