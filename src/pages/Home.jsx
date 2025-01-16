import { destinazioni } from "../data/data"
import { useEffect, useState } from "react"

import Card from "../components/Card"

export default function Home() {
    const [filteredDestinazioni, setFilteredDestinazioni] = useState(destinazioni)


    const [search, setSearch] = useState('')
    function filterDestination(destinazioni, search) {

        return destinazioni.filter((d) => d.destinazione.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        let array = [...destinazioni]
        if (search) {
            array = filterDestination(destinazioni, search)
        }
        setFilteredDestinazioni(array)

    }, [search])

    const [moreInfo, setMoreInfo] = useState(false)

    function addTravel(e) {
        e.preventDefault()
        const destinazione = e.target['new-destination'].value
        const dataInizio = e.target['start-date'].value
        const dataFine = e.target['end-date'].value
        const newTravel = {
            id: destinazioni.length + 1,
            destinazione: destinazione,
            data_inizio: dataInizio,
            data_fine: dataFine
        }
        destinazioni.push(newTravel)
        setFilteredDestinazioni([...destinazioni])
        console.log(destinazioni)
        setMoreInfo(false)
        e.target['new-destination'].value = ''
        e.target['start-date'].value = ''
        e.target['end-date'].value = ''
    }

    return (
        <main>
            <div className="searchbar ">
                <div>
                    <input type="text" name='destination' value={search} placeholder='Cerca...' onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div className="travel-form" >
                    <button onClick={() => setMoreInfo(!moreInfo)}>Nuovo viaggio</button>
                    <form onSubmit={addTravel} className={moreInfo ? 'show' : 'hide'}>
                        <input type="text" placeholder="Destinazione" name='new-destination' />
                        <label htmlFor="start-date">Data inizio viaggio</label>
                        <input type="date" name='start-date' />
                        <label htmlFor="end-date">Data fine viaggio</label>

                        <input type="date" name='end-date' />
                        <button>Save</button>
                    </form>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {filteredDestinazioni.map((destinazione) => (
                        <div className="col col-33">
                            <Card key={destinazione.id} destinazione={destinazione} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}