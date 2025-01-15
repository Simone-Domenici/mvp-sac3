
export default function Card({destinazione}) {
    return (
        <div>
            <h1>{destinazione.destinazione}</h1>
            <p>{destinazione.data_inizio}</p>
            <p>{destinazione.data_fine}</p>
        </div>
    )
}