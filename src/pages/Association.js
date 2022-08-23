import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import moment from "moment"
import '../App.css'

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
        <div className="box-asso-message">
            <div className="box-asso">
                {/* <h1>{association.name}</h1> */}
                <img className="img-asso" src={association.image} />
                <h2>{association.slogan}</h2>
                <p className="description">{association.description}</p>
            </div>
            <div className="box-message">
            <h2 className="title">Messages</h2>
            {messageAsso.map((message) => {
                return (
                <div className="message" key={message.content}>
                    <h3>{message.name}</h3>
                    <p><strong>Content :</strong> {message.content}</p>
                    <p><strong>Date :</strong> {moment(message.date).format("MMM Do YY")}</p>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Association