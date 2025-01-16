import { destinazioni } from "../data/data"
import { useEffect, useState } from "react"

import Card from "../components/Card"

export default function Home(){
    const [filteredDestinazioni, setFilteredDestinazioni] = useState(destinazioni)
        
    
    const [search, setSearch] = useState('')
    function filterDestination(destinazioni, search){
        
        return destinazioni.filter((d) => d.destinazione.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        let array =[...destinazioni]
        if (search) {
            array = filterDestination(destinazioni, search)
        }
        setFilteredDestinazioni(array)
        
    },[search])

    return(
        <main>
            <div>
                <input type="text" name='nome' value={search} placeholder='cerca...' onChange={(e) => setSearch(e.target.value)}/>            
            </div>
            {filteredDestinazioni.map((destinazione) => (
                <Card key={destinazione.id} destinazione={destinazione} />
            ))}
        </main>
    )
}