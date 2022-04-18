import React from 'react'
import { ITourGuide } from '../Interface'
import TourGuide from './TourGuide'
import '../Styles/TourGuide.scss'
import avatar1 from '../image/place1.png'
import br1 from '../image/br.png'
import br2 from '../image/br2.png'
import br3 from '../image/br3.png'
import br4 from '../image/br4.png'
const TourGuideList = () => {
  const ListTourGuid: Array<ITourGuide> = [
    {
      avata: avatar1,
      name: 'Như Quỳnh',
      DOB: '07/04/2000',
      position: 'Manager',
      code: '1212',
      tel: '029122912',
      br: br1,
    },
    {
      avata: avatar1,
      name: 'Như Quỳnh',
      DOB: '07/04/2000',
      position: 'Manager',
      code: '1212',
      tel: '029122912',
      br: br2,
    },
    {
      avata: avatar1,
      name: 'Như Quỳnh',
      DOB: '07/04/2000',
      position: 'Manager',
      code: '1212',
      tel: '029122912',
      br: br3,
    },
    {
      avata: avatar1,
      name: 'Như Quỳnh',
      DOB: '07/04/2000',
      position: 'Manager',
      code: '1212',
      tel: '029122912',
      br: br4,
    },
  ]
  return (
    <div className="tour-guide-list">
      {ListTourGuid.map((item: ITourGuide, index) => (
        <TourGuide {...item} key={index} />
      ))}
    </div>
  )
}

export default TourGuideList
