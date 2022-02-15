function KeyItem({ value, renderer }) {
    return (
        <button className="key-item"
            onClick={() => {
                renderer(value)
            }}
        >
            {value}
        </button>
    )
}

export default KeyItem;