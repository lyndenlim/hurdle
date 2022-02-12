function LetterContainer({ textColor }) {
    return (
        <div className="container">
            <div className="row">
                <div className="letter-tile" style={{ backgroundColor: textColor }} ></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ backgroundColor: textColor }}></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
            </div>
            <div className="row">
                <div className="letter-tile" style={{ backgroundColor: textColor }}></div>
                <div className="letter-tile" style={{ backgroundColor: textColor }}>H</div>
                <div className="letter-tile">E</div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
            </div>
            <div className="row">
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
            </div>
            <div className="row">
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
                <div className="letter-tile"></div>
            </div>
        </div>
    )
}

export default LetterContainer