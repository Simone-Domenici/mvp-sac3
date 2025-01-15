import { destinazioni, utenti } from '../data/data.js';
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard.jsx';
import { useState, useEffect } from 'react';

export default function Viaggio() {
    const {id} = useParams()
    const {destinazione, data_inizio, data_fine} = destinazioni[id - 1]
    const [search, setSearch] = useState('')
    const [filteredUtenti, setFilteredUtenti] = useState(utenti)

    function filterUsers(utenti, search){
        
        return utenti.filter((u) => u.nomeCompleto.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        let array =[...utenti]
        if (search) {
            array = filterUsers(utenti, search)
        }
        setFilteredUtenti(array)
        
    },[search])
    
    return (        
        <main>
            <div>
                <h1>Viaggio a {destinazione}</h1>
                <p>{data_inizio} - {data_fine}</p>
            </div>
            <div>
                <input type="text" name='nome' value={search} placeholder='cerca...' onChange={(e) => setSearch(e.target.value)}/>            
            </div>
            <div>
                {filteredUtenti.map((utente) => (
                    <div key={utente.id}>
                        <UserCard utente={utente} />
                    </div>))}
            </div>
        </main>
    )
}