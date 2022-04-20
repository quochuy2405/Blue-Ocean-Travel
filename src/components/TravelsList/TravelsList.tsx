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
    tour_guide: 'Thu Hà',
    place: 'nghinhphong',
  },
  {
    thumbnail: travel1,
    title: 'huy',
    description:`Nó được đặt tên là "Eo Gió" bởi vì nó cong cong thành hình cánh cung tuyệt đẹp để hứng gió.
    Ngoài ra, nó hay được biết nhiều đến cái tên "eo biển hút gió".Đây là một trong những địa điểm du lịch mang dấu ấn tâm linh thu hút rất nhiều du
        khách ghé đến tham quan mỗi năm.` ,
    date: '20/20/2001',
    tour_guide: 'Trần Hoàn Vi',
    place: 'eogio',
  },
  {
    thumbnail: travel2,
    title: 'huy',
    description:`Để nhắc đến ngôi chùa nổi tiếng nhất ở Bình Định, chắc chắn không thể bỏ qua chùa Linh
        Phong. Đây là một trong những địa điểm du lịch mang dấu ấn tâm linh thu hút rất nhiều du
        khách ghé đến tham quan mỗi năm. Chùa Linh Phong thường được người dân Bình Định gọi là chùa
        Ông Núi. Ngôi chùa này thuộc xã Cát Tiến, huyện Phú Cát, tỉnh Bình Định và nằm cách trung
        tâm thành phố Quy Nhơn khoảng 30km.`,
    date: '20/20/2001',
    tour_guide: 'Bùi Thị Như Quỳnh',
    place: 'linhphong',
  },
  {
    thumbnail: travel3,
    title: 'huy',
    description:`Tháp Bà Ponagar nằm ở đâu, Tháp Bà Ponagar giờ mở cửa là câu hỏi được khá nhiều du khách đặt
        ra khi đến với Nha Trang. Địa điểm này hay còn được gọi với cái tên khác đó chính là khu di
        tích lịch sử Tháp Bà Nha Trang, tọa lạc trên đường 2 tháng 4 – địa điểm này cách trung tâm
        thành phố Nha Trang khoảng 2km về hướng Bắc.`,
    date: '20/20/2023',
    tour_guide: 'Nguyễn Linh Ngân',
    place: 'thapbaponagar',
  },
  {
    thumbnail: travel4,
    title: 'huy',
    description:`Nó được công nhận là một thắng cảnh thiên nhiên cấp quốc gia từ năm 1998. Cảnh sắc nơi đây
        luôn được ngợi khen vì những hình thù khác lạ của những khối đá. Chính điều này đã tạo ra
        một “sự hỗn loạn có chủ ý” của mẹ thiên nhiên.`,
    date: '20/20/2022',
     tour_guide: 'Nhu Hang Le',
    place: 'ghenhdadia',
  },
  {
    thumbnail: travel5,
    title: 'huy',
    description:`Kỳ Co là một trong những bãi tắm đẹp nhất Miền Trung với bờ cát trải dài cùng làn nước trong
        xanh 2 màu tuyệt đẹp, đến với Kỳ Co Bạn sẽ được trải nghiệm cảm giác vi vu lướt sóng trên
        cano siêu tốc, cùng ngắm biển đảo hùng vĩ Nhơn Lý, thấy được toàn cảnh làng chài cùng Resort
        FLC Quy Nhơn nổi tiếng từ khơi xa.`,
    date: '20/20/2021',
    tour_guide: 'Trần Thị Bích Cẩm',
    place: 'kyco',
  },
]

const ListTravel = ({ titleList, size }: { titleList: string; size?: number }): JSX.Element => {
  return (
    <div className={styles.travelList}>
      <p className={styles.enjoy}>Travel now</p>
      <p className={styles.title}>{titleList}</p>
      <div className={styles.listItem}>
        {list.slice(0, size).map((item, index) => (
          <Link className={styles.divA} key={index} to={`/${item.place}`}>
            <Travel {...item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListTravel
