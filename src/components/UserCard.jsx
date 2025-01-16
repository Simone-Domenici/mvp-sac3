import { useState } from "react"

export default function UserCard({ utente }) {
    const [moreInfo, setMoreInfo] = useState(false)
    return (<>
    <div onClick={() => setMoreInfo(!moreInfo)} className="card">
        <div  className='user'>
            <h3>{utente.nome} {utente.cognome}</h3>
        </div>
            <div className={moreInfo ? 'show' : 'hide'}>
                <p>Telefono: {utente.numeroTelefono}</p>
                <p>CodiceFisicale: {utente.codiceFiscale}</p>
                <p>Email: {utente.email}</p>
            </div>
            </div>
    </>
    )
}