import { destinazioni } from "../data/data"
import Card from "../components/Card"

export default function Home(){
    return(
        <main>
            {destinazioni.map((destinazione) => (
                <Card key={destinazione.id} destinazione={destinazione} />
            ))}
        </main>
    )
}