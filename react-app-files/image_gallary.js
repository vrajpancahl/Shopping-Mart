import { p1, p2, p3} from './image_st_file';

function image_gallary()
{
    return(
        <div>
            <img src={p1} alt="photo1"/>
            <img src={p2} alt="photo2"/>
            <img src={p3} alt="photo3"/>
        </div>
    )
}

export default image_gallary;