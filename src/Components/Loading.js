import { loading_spiner } from '../image_st_file';
import './Loading_CSS.css';

function Loading()
{
    return (
            <span className='loading-gif-container'><img
            className='loading-gif' src={loading_spiner} alt='loading..' /></span>
    )
}

export default Loading;