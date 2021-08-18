import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../assets/css/gallery.css';
import { data } from './galleryimg';
const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} alt="" />
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
            {data.map((item, index) => {
                return (
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img  src={item.imgSrc} style={{width: '100%'}} alt="" />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;