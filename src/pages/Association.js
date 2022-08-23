import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import moment from "moment"

const Association = () => {

    const params = useParams()
    const [association, setAssociation] = useState([])
    const [messageAsso, setMessageAsso] = useState([])

    useEffect(() =>{
        getAssociation()
        getMessages()
    }, [])

    const getAssociation = async () => {
        const request = await fetch(`http://localhost:5005/associations/${params.slug}`)
        const response = await request.json()
        // console.log(response);
        setAssociation(response)
    }

    const getMessages = async () => {
        const request = await fetch(`http://localhost:5005/messages/${params.slug}`)
        const response = await request.json()      

        setMessageAsso(response)
 

    }
    console.log(messageAsso);


    return(
        <>
            <h1>{association.name}</h1>
            <img src={association.image} />
            <h2>{association.slogan}</h2>
            <p>{association.description}</p>
            {messageAsso.map((message) => {
                return (
                <div key={message.content}>
                    <h3>{message.name}</h3>
                    <p>{message.content}</p>
                    <p>{moment(message.date).format("MMM Do YY")}</p>
                </div>
                )
            })}
        </>
    )
}

export default Association