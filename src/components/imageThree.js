import { Parallax } from 'react-parallax';
import Stars from '../img/stars.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={Stars} strength={200}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne;