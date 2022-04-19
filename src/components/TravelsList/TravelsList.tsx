import { Link } from 'react-router-dom'
import travel0 from '/images/nghinhphong/nghinhphong-1.jpg'
import travel1 from '/images/eogio/eogio-3.jpg'
import travel2 from '/images/linhphong/linhphong-1.jpg'
import travel3 from '/images/thapba/thapba-1.jpg'
import travel4 from '/images/dadia/dadia-2.jpg'
import travel5 from '/images/kyco/kyco-3.jpg'
import Travel from '../Travel'
import styles from './TravelsList.module.scss'
import type { ITravel } from '@/types'

const list: ITravel[] = [
  {
    thumbnail: travel0,
    title: 'huy',
    description:`  Công trình kiến trúc Quảng trường Nghinh Phong Phú Yên nằm ở ngã tư Nguyễn Hữu Thọ và Độc
        Lập, thành phố Tuy Hòa. Lấy ý tưởng từ Gành Đá Dĩa, những khối đá tròn xếp chồng liền kề
        nhau, biểu tượng của du lịch Phú Yên. Huni Architectes có trụ sở tại Pháp là đơn vị thiết kế
        công trình này`  ,
    date: '20/20/2001',
    tour_guide: 'Bui Quoc Huy',
    place: 'nghinhphong',
  },
  {
    thumbnail: travel1,
    title: 'huy',
    description:`  Công trình kiến trúc Quảng trường Nghinh Phong Phú Yên nằm ở ngã tư Nguyễn Hữu Thọ và Độc
        Lập, thành phố Tuy Hòa. Lấy ý tưởng từ Gành Đá Dĩa, những khối đá tròn xếp chồng liền kề
        nhau, biểu tượng của du lịch Phú Yên. Huni Architectes có trụ sở tại Pháp là đơn vị thiết kế
        công trình này` ,
    date: '20/20/2001',
    tour_guide: 'Bui Quoc Huy',
    place: 'eogio',
  },
  {
    thumbnail: travel2,
    title: 'huy',
    description:`  Công trình kiến trúc Quảng trường Nghinh Phong Phú Yên nằm ở ngã tư Nguyễn Hữu Thọ và Độc
        Lập, thành phố Tuy Hòa. Lấy ý tưởng từ Gành Đá Dĩa, những khối đá tròn xếp chồng liền kề
        nhau, biểu tượng của du lịch Phú Yên. Huni Architectes có trụ sở tại Pháp là đơn vị thiết kế
        công trình này`,
    date: '20/20/2001',
    tour_guide: 'Bui Quoc Huy',
    place: 'linhphong',
  },
  {
    thumbnail: travel3,
    title: 'huy',
    description:`  Công trình kiến trúc Quảng trường Nghinh Phong Phú Yên nằm ở ngã tư Nguyễn Hữu Thọ và Độc
        Lập, thành phố Tuy Hòa. Lấy ý tưởng từ Gành Đá Dĩa, những khối đá tròn xếp chồng liền kề
        nhau, biểu tượng của du lịch Phú Yên. Huni Architectes có trụ sở tại Pháp là đơn vị thiết kế
        công trình này`,
    date: '20/20/2001',
    tour_guide: 'Bui Quoc Huy',
    place: 'thapbaponagar',
  },
  {
    thumbnail: travel4,
    title: 'huy',
    description:`  Công trình kiến trúc Quảng trường Nghinh Phong Phú Yên nằm ở ngã tư Nguyễn Hữu Thọ và Độc
        Lập, thành phố Tuy Hòa. Lấy ý tưởng từ Gành Đá Dĩa, những khối đá tròn xếp chồng liền kề
        nhau, biểu tượng của du lịch Phú Yên. Huni Architectes có trụ sở tại Pháp là đơn vị thiết kế
        công trình này`,
    date: '20/20/2001',
    tour_guide: 'Bui Quoc Huy',
    place: 'ghenhdadia',
  },
  {
    thumbnail: travel5,
    title: 'huy',
    description:`  Công trình kiến trúc Quảng trường Nghinh Phong Phú Yên nằm ở ngã tư Nguyễn Hữu Thọ và Độc
        Lập, thành phố Tuy Hòa. Lấy ý tưởng từ Gành Đá Dĩa, những khối đá tròn xếp chồng liền kề
        nhau, biểu tượng của du lịch Phú Yên. Huni Architectes có trụ sở tại Pháp là đơn vị thiết kế
        công trình này`,    date: '20/20/2001',
    tour_guide: 'Bui Quoc Huy',
    place: 'kyco',
  },
]

const ListTravel = ({ titleList, size }: { titleList: string; size?: number }): JSX.Element => {
  return (
    <div className={styles.travelList}>
      <p className={styles.enjoy}>Discover</p>
      <p className={styles.title}>{titleList}</p>
      <div className={styles.listItem}>
        {list.slice(0, size).map((item, index) => (
          <Link key={index} to={`/${item.place}`}>
            <Travel {...item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListTravel
