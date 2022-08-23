import { useState, useEffect } from "react"
import moment from "moment"


const Admin = () => {

    const [messages, setMessages] = useState([])
    const [asso, setAsso] = useState('')

    useEffect(() => {
        getMessages()
    }, [asso])

    const getMessages = async () => {
        const request = await fetch(`http://localhost:5005/messages/${asso}`)
        const response = await request.json()
        // console.log(response);
        setMessages(response)
    }

            // console.log(messages)

    const handleChangeAsso = (e) => {
        setAsso(e.target.value)
    }

    console.log(asso);


    return(
        <>
            <h1>Admin</h1>
                <select name="association" id="asso-select" onChange={handleChangeAsso}>
                    <option value="">All</option>
                    <option value="restos-du-coeur">restos-du-coeur</option>
                    <option value="konexio">konexio</option>
                    <option value="unicef">unicef</option>
                </select>
            {messages.map((message) => {
                return( 
                    <>
                        <h2>{message.name}</h2>
                        <p>{message.content}</p>
                        <p>{moment(message.date).format("MMM Do YY")}</p>
                    </>
                )
            })}
        </>
    )
}

export default Admin 