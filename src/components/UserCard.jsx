import { useState } from "react"

export default function UserCard({ utente }) {
    const [moreInfo, setMoreInfo] = useState(false)
    return (<>
        <div onClick={() => setMoreInfo(!moreInfo)} className='user'>
            <h4>{utente.nome} {utente.cognome}</h4>
        </div>
            <div className={moreInfo ? 'show' : 'hide'}>
                <p>{utente.numeroTelefono}</p>
                <p>{utente.codiceFiscale}</p>
                <p>{utente.email}</p>
            </div>
    </>
    )
}