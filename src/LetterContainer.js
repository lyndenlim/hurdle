import { useState, useEffect } from "react"

function LetterContainer({ textColor }) {
    const [key, setKey] = useState("")

    useEffect(() => {
        const keyUp = (e) => {
            if (e.keyCode >= 65 && e.keyCode <= 90) {
                setKey(previous => `${previous}${e.key}`.toUpperCase().slice(0, 5))
            } else if (e.keyCode === 8) {
                setKey(previous => previous.slice(0, previous.length - 1))
            } else if (e.keyCode === 13 && key.length === 5) {
                setKey("")
            }
        }
        window.addEventListener("keyup", keyUp)
        return () => window.removeEventListener("keyup", keyUp)
    }, []);

    console.log(key.length)

    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="letter-tile" style={{ color: textColor }}>{key.slice(0, 1)}</div>
                <div className="letter-tile" style={{ color: textColor }}>{key.slice(1, 2)}</div>
                <div className="letter-tile" style={{ color: textColor }}>{key.slice(2, 3)}</div>
                <div className="letter-tile" style={{ color: textColor }}>{key.slice(3, 4)}</div>
                <div className="letter-tile" style={{ color: textColor }}>{key.slice(4, 5)}</div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
                <div className="letter-tile" style={{ color: textColor }}></div>
            </div>
        </div>
    )
}

export default LetterContainer