import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import * as Mui from "@mui/material"
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import FavoriteEntry from './FavoriteEntry';

function Favorites({ bgColor, textColor }) {
    const [entries, setEntries] = useState([])

    // Fetch entries from database
    useEffect(() => {
        fetch("http://localhost:3000/entries")
            .then(res => res.json())
            .then(data => setEntries(data))
    }, [])

    // Handles front-end delete
    function handleDeletedItem(id) {
        const updatedFavorites = entries.filter(entry => entry.id !== id)
        setEntries(updatedFavorites)
    }

    // Display entries from fetch
    const favoriteElements = entries.map(entry => {
        return (
            <div className="favorite-item" key={entry.word}>
                <FavoriteEntry
                    id={entry.id}
                    textColor={textColor}
                    word={entry.word}
                    pronunciation={entry.pronunciation}
                    english={entry.english}
                    def={entry.definition}
                    handleDeletedItem={handleDeletedItem}
                />
            </div>
        )
    })

    return (
        <div>
            <Mui.AppBar className="favorite-bar" style={{ backgroundColor: bgColor }}>
                <style>{`body {background-color: ${bgColor}`}</style>
                <Mui.Toolbar>
                    <Mui.Typography variant="h4" style={{ color: textColor }}>
                        Bookmarks
                    </Mui.Typography>
                    <div className='buttons'>
                        <NavLink to="/" exact>
                            <Mui.Button style={{ color: textColor }}>
                                <HouseOutlinedIcon />
                            </Mui.Button>
                        </NavLink>
                    </div>
                </Mui.Toolbar>
            </Mui.AppBar>
            <div className='favorite-container'>
                <div className="row">
                    {favoriteElements}
                </div>
            </div>
        </div>


    )
}

export default Favorites