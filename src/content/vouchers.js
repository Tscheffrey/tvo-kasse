import uuidv4 from 'uuid/v4'
import vouchers from './vouchers.json'

// generate unique ids for vouchers
for (let voucher of vouchers) {
  voucher.uuid = uuidv4()
}

export default vouchers
