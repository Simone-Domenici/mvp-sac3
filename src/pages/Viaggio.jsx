import { destinazioni, utenti } from '../data/data.js';
import { useNavigate, useParams } from 'react-router-dom';
import UserCard from '../components/UserCard.jsx';
import { useState, useEffect } from 'react';
export default function Viaggio() {
    const { id } = useParams()
    const { destinazione, data_inizio, data_fine } = destinazioni[id - 1]
    const [search, setSearch] = useState('')
    const [filteredUtenti, setFilteredUtenti] = useState(utenti)

    function filterUsers(utenti, search) {

        return utenti.filter((u) => u.nomeCompleto.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        let array = [...utenti]
        if (search) {
            array = filterUsers(utenti, search)
        }
        setFilteredUtenti(array)

    }, [search])

    let navigate = useNavigate()

    return (
        <main className='container'>
            <div  >
                <button className='navigate-btn' onClick={() => { navigate(-1) }}>Back</button>
            </div>
            <div className='travel-detail'>
                <div className='travel-title' >
                    <h1>Viaggio a {destinazione}</h1>
                    <p>{data_inizio} - {data_fine}</p>
                </div>
                <div className='search-travel'>
                    <input type="text" name='nome' value={search} placeholder='Cerca pertecipanti' onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
                <h2 >Lista partecipanti</h2>
            <div className='row'>
                {filteredUtenti.map((utente) => (
                    <div className="col col-50" key={utente.id}>
                        <UserCard utente={utente} />
                    </div>))}
            </div>
        </main>
    )
}