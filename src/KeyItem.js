function KeyItem({ handleKeyboard, value }) {
    return (
        <button className="key-item"
            onClick={() => handleKeyboard(value)}>
            {value}
        </button>
    )
}

export default KeyItem;