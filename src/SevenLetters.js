import { useState, useEffect } from "react"
import Navbar from './Navbar';
import Letters from "./Letters";
import DictionaryEntry from "./DictionaryEntry";
import LengthButtons from "./LengthButtons";
import WinnerModal from "./WinnerModal";
import KeyList from "./KeyList"
import BackspaceIcon from '@mui/icons-material/Backspace';

function Keyboard(props) {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', <BackspaceIcon />]
    ]
    return (
        <div className="keyboard">
            {keys.map(keyList => {
                return <KeyList key={keyList} keyList={keyList} renderer={props.func} />
            })}
        </div>
    )
}

function SevenLetters({ textColor, bgColor, word, pronunciation, english, def, isFavorited, setIsFavorited, counter, setCounter, setLetterLength, setGameState, checked, handleKeyboard, setShouldFetch, isDarkMode, setIsDarkMode, showModal }) {
    const [key, setKey] = useState("")
    const [guess, setGuess] = useState([])
    const [showDictionary, setShowDictionary] = useState(false)

    useEffect(() => {
        // Handles key up events on whole document
        function keyUp(e) {
            if (e.keyCode >= 65 && e.keyCode <= 90) {
                setKey(previous => `${previous}${e.key}`.toUpperCase().slice(0, 7))
            } else if (e.keyCode === 8) {
                setKey(previous => previous.slice(0, previous.length - 1))
                // On enter key, move to following row and reset key state
            } else if (e.keyCode === 13 && key.length === 7) {
                setCounter(counter => counter + 1)
                setGuess(previous => {
                    let row = new Array(7)
                    // Set classes for each tile after comparing to random word
                    for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
                        if (key[letterIndex] === word[letterIndex].toUpperCase()) {
                            row[letterIndex] = { value: key.charAt(letterIndex), result: "correct" }
                        } else if (word.toUpperCase().includes(key[letterIndex])) {
                            row[letterIndex] = { value: key.charAt(letterIndex), result: "present" }
                        } else {
                            row[letterIndex] = { value: key.charAt(letterIndex), result: "absent" }
                        }
                    }
                    let result = previous.concat([row])
                    checkWin(result)
                    return result
                })
                setKey("")
            }
        }
        // Game concludes on try 6 or if the user guesses the word correctly
        function checkWin(result) {
            let userGuess = result.map(letter => letter.map(item => item.result))
            if (counter === 6 || userGuess.map(guess => guess.every(item => item === "correct"))) {
                alert("winner")
                setShowDictionary(true)

                // reset game state, disable the ability to type anymore
            }
        }

        window.addEventListener("keyup", keyUp)
        return () => window.removeEventListener("keyup", keyUp)
    }, [key]);
    // Adds keyboard letter to key state
    const concatWord = (val) => {
        if (val === "BACKSPACE"){
            setKey(previous => previous.slice(0, previous.length - 1))
        } else {
            setKey(key + val)
        }
    }

    // Creates grid for letters
    let grid = [...guess]
    let currentRow = new Array(7)
    for (let letterIndex = 0; letterIndex < currentRow.length; letterIndex++) {
        currentRow[letterIndex] = { value: key.charAt(letterIndex), result: "empty" }
    }
    if (grid.length < 6) {
        grid.push(currentRow)
    }
    for (let i = grid.length; i < 6; i++) {
        let blankRow = new Array(7)
        for (let j = 0; j < blankRow.length; j++) {
            blankRow[j] = { value: null, result: "empty" }
        }
        grid.push(blankRow)
    }

    return (
        <div>
            <Navbar
                bgColor={bgColor}
                textColor={textColor}
                checked={checked}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />
            <div className="container">
                {showModal ? <WinnerModal /> : null}
                <div className="row align-items-start">
                    <div className="col dictionary-entry">
                        {showDictionary ? <DictionaryEntry
                            textColor={textColor}
                            word={word}
                            pronunciation={pronunciation}
                            english={english}
                            def={def}
                            isFavorited={isFavorited}
                            setIsFavorited={setIsFavorited}
                        /> : null}
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
                        <LengthButtons textColor={textColor} setLetterLength={setLetterLength} setShouldFetch={setShouldFetch} setCounter={setCounter} />
                    </div>
                </div>
            </div>
            <Keyboard func={concatWord} />
        </div>
    )
}

export default SevenLetters