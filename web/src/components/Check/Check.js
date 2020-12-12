import IconOn from './on.svg'
import IconOff from './off.svg'
import IconPlus from './plus.svg'
import IconLoading from './loading.svg'

const map = {
  on: <IconOn />,
  off: <IconOff />,
  plus: <IconPlus />,
  loading: <IconLoading />,
}

const Check = ({ type }) => {
  return <div className="icon">{map[type]}</div>
}

export default Check