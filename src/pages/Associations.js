import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import '../App.css'


const Associations = () => {

    const [associations, setAssociations] = useState([])

    useEffect(() => {
        getAssociations()
    }, [])

    const getAssociations = async () => {
        const request = await fetch('http://localhost:5005/associations')
        const response = await request.json()
        setAssociations(response)
    }

    return(
        <>
          <div className="box-1">
            {associations.map((association) => {
                return (
                <div className="box-2" key={association.slug}>
                <img className='images-home' src={association.image} />
                <h2 >{association.name}</h2>
                <h3>{association.slogan}</h3>
                {/* <p>{association.description}</p>    */}
                <Link to={`/${association.slug}`}>
                    <button >See {association.name}'s' page</button>
                </Link> 
                </div>
                )
            })}
          </div>
        </>
    )
}

export default Associations