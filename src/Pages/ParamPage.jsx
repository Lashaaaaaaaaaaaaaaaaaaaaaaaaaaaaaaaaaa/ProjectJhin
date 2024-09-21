import { useParams } from 'react-router-dom'

const data = [
    {id: 1, fact: 'Jhin is a meticulous criminal psychopath who believes murder is art.'},
    {id: 2, fact: 'He is known as the Golden Demon.'},
    {id: 3, fact: 'He is originally from Ionia.'},
    {id: 4, fact: 'His favorite number is 4.'},
    {id: 5, fact: 'He is like a ghost nobody knows anything about him.'},
    {id: 6, fact: 'He is a manipulative mind-playing serial killer.'},
    {id: 7, fact: 'He is also Artist, Assassin, Calligrapher, Painter, Poet, Smith and the Idealist.'}
]

const ParamPage = () => {
    const param = useParams()
    
    const fact = data.find(user => user.id == param.id)
    if(!fact) {   
        return <div>Fact Not Found</div>
    }
    return (
        <div>
            <h1>{fact.fact}</h1>
        </div>
    )
}

export default ParamPage