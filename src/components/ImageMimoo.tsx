import { Image } from 'antd';
import image from '../assets/imageloginmimoo.png'
import '../styles/login.css';

export default function ImageMimoo (){
    return <>
    <span className='container1'>
      <Image
        width={920}
        height={600}
        preview={false}
        src={image}
      />
     </span>
  </>
}