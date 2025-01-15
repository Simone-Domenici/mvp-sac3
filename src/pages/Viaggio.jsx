import { destinazioni, utenti } from '../data/data.js';
import { useParams } from 'react-router-dom';

export default function Viaggio() {
    const {id} = useParams()
    const {destinazione, data_inizio, data_fine} = destinazioni[id - 1]
    return (        
        <main>
            <div>
                <h1>Viaggio a {destinazione}</h1>
                <p>{data_inizio} - {data_fine}</p>
            </div>
            <div>
                {utenti.map((utente) => (
                    <div key={utente.id}>
                        <h4>{utente.nome} {utente.cognome}</h4>
                    </div>))}
            </div>
        </main>
    )
}