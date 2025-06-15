import { useNavigate } from "react-router-dom";
import '../Components/BackToPreviousPage_CSS.css';
import { IoMdArrowRoundBack } from "react-icons/io";

function BackToPreviousPage(props) {
    const navigate = useNavigate();

    function backToPreviousPage() {
        navigate(props.path, { replace: true })
    }

    return (
        <div >
            <button className='back-button' onClick={() => { backToPreviousPage() }}><IoMdArrowRoundBack /></button>
        </div>
    )
}

export default BackToPreviousPage;