import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button'

function DictionaryEntry({ textColor, word, pronunciation, english, def, isFavorited, setIsFavorited, setFavoriteList }) {
    const showFavorited = isFavorited ? <BookmarkIcon /> : <BookmarkBorderIcon />

    function handleClick() {
        if (!isFavorited) {
            setFavoriteList([word, pronunciation, english, def])
        }
        setIsFavorited(isFavorited => !isFavorited)
    }

    return (
        <div className="dictionary-entry" style={{ color: textColor }}>
            <h1>
                {word.toUpperCase()}
                <Button onClick={handleClick} style={{ color: textColor }}>
                    {showFavorited}
                </Button>
            </h1>
            <h3>{pronunciation}</h3>
            <p>
                <big>{english}</big>
            </p>
            <big>{def}</big>
        </div>
    )
}

export default DictionaryEntry
