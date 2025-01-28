import { useState } from "react"
import Proptypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: Proptypes.func
}

export default function NewGameForm ( { addGame }) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setTitle('')
        setCover('')
      
    }

    return (
        <form onSubmit={handleSubmit}>
        <TextInput id="Title" label="Title" value={title} setValue={setTitle}/>
        <TextInput id="Cover" label="Cover" value={cover} setValue={setCover} />
        <button type="submit">Add to library</button>
      </form>
    )
}