import '../css/Class.css';
import { useParams } from 'react-router-dom';
function Class() {
    const classId = useParams().classId;    
    return (
        <div className="Class">
        
        </div>
    );
}

export default Class;
