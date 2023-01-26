import { useNavigate } from 'react-router-dom';

export const Summary = () => {
    const navigate = useNavigate();
    return (
        <>   
    <div>Confirmed</div>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
    )
}
