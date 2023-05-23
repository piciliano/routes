import { Outlet} from 'react-router-dom'
import { Hello } from '../hello'


export const Template = () => {

  return (
    <div className="App">
      <Hello/>
      <Outlet />
    </div>
  )
}