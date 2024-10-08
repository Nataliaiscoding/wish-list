import { data } from './data';
import { useState } from 'react';
import './App.css';
import  next  from './next.png';
import  previos  from './previos.png';

function Photo() {
    const [photo, setPhoto] = useState(0);
    const {imageTwo} = data[photo];

    const Previos = () => {
        setPhoto((photo => {
            photo--;
            if (photo < 0) {
                return data.length -1;
            }
            return(photo)
        }))
    }
    const Next = () => {
        setPhoto((photo) => {
            photo++;
            if (photo > data.length -1) {
                photo = 0;
            }
            return(photo)
        })
    }
return (
    <div className='containerImgPhoto'>
        <button onClick={Previos} className='btnPre'><img src={previos} alt='previos' /></button>
        <img src={imageTwo} width='300px' alt='City' />
        <button onClick={Next} className='btnNext'><img src={next} alt='next' /></button>
    </div>
)
}
export default Photo;
