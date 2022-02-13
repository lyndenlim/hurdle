import { useState, useEffect } from "react"
import DictionaryEntry from "./DictionaryEntry"
import Letters from "./Letters"
import LengthButtons from "./LengthButtons"

function LetterContainer({ textColor, bgColor, word, pronunciation, english, def, isFavorited, setIsFavorited, setFavoriteList, keyboard }) {
    const [key, setKey] = useState("")
    const [guess, setGuess] = useState([])

    useEffect(() => {
        // Handles key up events on whole document
        function keyUp(e) {
            if (e.keyCode >= 65 && e.keyCode <= 90) {
                setKey(previous => `${previous}${e.key}`.toUpperCase().slice(0, 5))
            } else if (e.keyCode === 8) {
                setKey(previous => previous.slice(0, previous.length - 1))
            } else if (e.keyCode === 13 && key.length === 5) {
                setGuess(previous => {
                    // On enter key, move to following row and reset key state
                    let row = new Array(5)
                    for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
                        if (key[letterIndex] === word[letterIndex].toUpperCase()) {
                            row[letterIndex] = { value: key.charAt(letterIndex), result: "correct" }
                        } else if (word.toUpperCase().includes(key[letterIndex])) {
                            row[letterIndex] = { value: key.charAt(letterIndex), result: "present" }
                        } else {
                            row[letterIndex] = { value: key.charAt(letterIndex), result: "absent" }
                        }
                    }
                    return previous.concat([row])
                })
                setKey("")
            }
        }
        window.addEventListener("keyup", keyUp)
        return () => window.removeEventListener("keyup", keyUp)
    }, [key, keyboard]);

    // Creates grid for letters
    let grid = [...guess]
    let currentRow = new Array(5)
    for (let letterIndex = 0; letterIndex < currentRow.length; letterIndex++) {
        currentRow[letterIndex] = { value: key.charAt(letterIndex), result: "empty" }
    }
    if (grid.length < 6) {
        grid.push(currentRow)
    }
    for (let i = grid.length; i < 6; i++) {
        let blankRow = new Array(5)
        for (let j = 0; j < blankRow.length; j++) {
            blankRow[j] = { value: null, result: "empty" }
        }
        grid.push(blankRow)
    }
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col dictionary-entry">
                    <DictionaryEntry
                        textColor={textColor}
                        word={word}
                        pronunciation={pronunciation}
                        english={english}
                        def={def}
                        isFavorited={isFavorited}
                        setIsFavorited={setIsFavorited}
                        setFavoriteList={setFavoriteList}
                    />
                </div>
                <div className="col letter-container">
                    {grid.map((letters, index) => {
                        return (<Letters key={index}
                            letters={letters}
                            textColor={textColor}
                            bgColor={bgColor}
                        />)
                    })}
                </div>
                <div className="col length-container">
                    <LengthButtons textColor={textColor} />
                </div>
            </div>
        </div>
    )
}

export default LetterContainer