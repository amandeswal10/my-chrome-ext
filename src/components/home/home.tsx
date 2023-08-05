import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import "../home/home.css"

export const HomePage = () => {

    const [clicked, setClicked] = useState(false)
    const [url, setUrl] = useState<string|undefined>('')

    const handleClick = () => {
        setClicked(!clicked)
    }

    const getUrl = async() => {
        const queryInfo = {active: true, lastFocusedWindow: true}

        const tabs = await chrome.tabs 
        tabs.query(queryInfo, tabs => {
            const url = tabs[0].url
            setUrl(url)
    })

  }
  useEffect (()=> {
    getUrl()

},[])

    
    return (
        <>
        <div className="container">
            <Button style={{backgroundColor:"pink"}} variant="outlined" onClick={handleClick}>{clicked ? "Un-Summarize" : "Summarize"}</Button>
        </div>
        {url}
        </>
    )

}