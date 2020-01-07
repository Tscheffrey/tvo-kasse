import Shortid from 'shortid'
import vouchers from './vouchers.json'

// generate unique ids for vouchers
for (let voucher of vouchers) {
  voucher.key = Shortid.generate()
}

export default vouchers
