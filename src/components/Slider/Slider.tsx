import { useEffect, useState } from 'react'
import styles from './Slider.module.scss'

const listSlider = [
  {
    title: 'Biển Quy Nhơn',
    description:
      'Thành phố Quy Nhơn (Bình Định) đa dạng về cảnh quan địa lý với núi rừng, hồ đầm, sông ngòi. Nhưng điều thu hút nhất với du khách tới với thành phố miền Trung này là những vùng biển đảo nước trong xanh.',
    image:
      'https://i1-vnexpress.vnecdn.net/2019/04/16/DJI-0047-1555396779.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=pArsXufm1nA_vqlEhYcLDg',
  },
  {
    title: 'Eo Gió',
    description:
      'Nơi đây có phong cảnh hoang sơ với những ngọn núi đá cao vươn mình ra biển. Thời điểm thích hợp nhất để tới thăm Eo Gió nói riêng và Quy Nhơn nói chung là vào mùa khô, từ tháng 3 tới tháng 9',
    image:
      'https://i1-vnexpress.vnecdn.net/2019/04/16/DJI-0065-1555396781.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=mSBWqRGRIz6imEr1ryCS8g',
  },
   {
    title: 'Kỳ Cọ',
    description:
      'Du khách có thể ghé thăm làng chài gần đó, thưởng thức những món hải sản tươi ngon. Nếu có thời gian, bạn nên đi thuyền ra đảo Kỳ Co.',
    image:
      'https://i1-vnexpress.vnecdn.net/2019/04/16/DJI-0057-1555396780.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=29F6Q3j04gRF14WMANk1_A',
  },
    {
    title: 'Tượng Quan Âm Kiết Tường',
    description:
      'Pho tượng được xây dựng vào năm 2013, cao 30 m, gồm 2 tượng quay lưng vào nhau. Một bên là tượng Quan Âm Kiết Tường màu vàng, hướng núi tượng trưng cho rừng vàng; một bên là tượng Quan Âm Nam Hải màu bạc, hướng biển tượng trưng cho biển bạc. Ý nghĩa của tác phẩm là phù trợ cho Quy Nhơn bởi rừng và biển chính là hai món quà quý giá mà thiên nhiên ban tặng cho nơi này.',
    image:
      'https://i1-vnexpress.vnecdn.net/2019/04/16/DJI-0131-1555396784.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=l1Qh44RhQoyVPTUi9fjS4w',
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
