import { useNavigate } from "react-router-dom"

export default function Card({ destinazione }) {

    const navigate = useNavigate()

    function goToDestination() {
        navigate(`/${destinazione.id}`)
    }
    return (
        <div onClick={goToDestination} className="card">
            <div>
                <h1>{destinazione.destinazione}</h1>
                <p>{destinazione.data_inizio}</p>
                <p>{destinazione.data_fine}</p>
            </div>
        </div>
    )
}