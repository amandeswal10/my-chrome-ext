import { Button } from "@mui/material"
import { useState } from "react"

export const HomePage = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <div>
        <Button variant="outlined" onClick={handleClick}>{clicked ? "Unclick Me!" : "Click Me!"}</Button>
        
        </div>
    )

}