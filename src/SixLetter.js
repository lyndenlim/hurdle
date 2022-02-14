import LetterContainer from './LetterContainer';
import Navbar from './Navbar';

function SixLetters({ textColor, bgColor, word, pronunciation, english, def, isFavorited, setIsFavorited, keyboard, counter, setCounter, setLetterLength, setGameState, checked }) {
    return (
        <div>
            <Navbar
                bgColor={bgColor}
                textColor={textColor}
                checked={checked}
            />
            <LetterContainer
                bgColor={bgColor}
                textColor={textColor}
                word={word}
                pronunciation={pronunciation}
                english={english}
                def={def}
                isFavorited={isFavorited}
                setIsFavorited={setIsFavorited}
                counter={counter}
                setCounter={setCounter}
                setLetterLength={setLetterLength}
            />
        </div>
    )
}

export default SixLetters