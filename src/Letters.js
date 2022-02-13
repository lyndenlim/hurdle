function Letters({ letters, textColor, bgColor }) {
    return (
        <div className="guess">
            {letters.map((letter, index) => {
                return (
                    <div key={index} className={`letter-tile ${letter.result}`} style={{backgroundColor: bgColor}}>
                        <span style={{color: textColor}}>{letter.value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Letters