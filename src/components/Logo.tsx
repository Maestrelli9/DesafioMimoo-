import { Image } from 'antd';
import logomimoo from '../assets/logomimoo.png'

export default function logo (){
    return <>
    <span className='container2'>
      <Image
        preview={false}
        src={logomimoo}
      />
     </span>
  </>
}
//teste