import { useState } from "react"

const Formulaire = () => {

    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [asso, setAsso] = useState('')

    const handleChangeName = (e) =>{
        setName(e.target.value);
    }

    const handleChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const handleClickAsso = (e) =>{
        setAsso(e.target.value);
    }

    const postMessage = async (e) =>{
        e.preventDefault()

        const message = {
            name,
            content,
            slug: asso
        }

        const request = await fetch(`http://localhost:5005/messages`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        const response = await request.json()
        console.log(response);
    }

    return(
        <>
            <h1>Formulaire</h1>
            <form onSubmit={postMessage}>
                <h4>Name</h4>
                <input type='text' placeholder="Name" onChange={handleChangeName} value={name}/>
                <h4>Content</h4>
                <input type='text' placeholder="Content" onChange={handleChangeContent} value={content}/>
                <select name="association" id="asso-select" onChange={handleClickAsso}>
                    <option value="">-- Choose an option --</option>
                    <option value="restos-du-coeur">restos-du-coeur</option>
                    <option value="konexio">konexio</option>
                    <option value="unicef">unicef</option>
                </select>
                <button type="submit">Submit message</button>
            </form>
        </>
    )
}

export default Formulaire