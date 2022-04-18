import { NghinhPhong } from './NghinhPhong'
import { EoGio } from './EoGio'
import { LinhPhong } from './LinhPhong'
import { ThapBaPonagar } from './ThapBaPonagar'
import { GhenhDaDia } from './GhenhDaDia'
import { KyCo } from './KyCo'

const places: { [key: string]: () => JSX.Element } = {
  nghinhphong: NghinhPhong,
  eogio: EoGio,
  linhphong: LinhPhong,
  thapbaponagar: ThapBaPonagar,
  ghenhdadia: GhenhDaDia,
  kyco: KyCo,
}

export { places }
