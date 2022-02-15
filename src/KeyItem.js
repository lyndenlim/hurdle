function KeyItem({ handleKeyboard, value }) {
    return (
        <button className="key-item" tabIndex="-1"
            onClick={() => handleKeyboard(value)}>
            {value}
        </button>
    )
}

export default KeyItem;