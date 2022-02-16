function KeyItem({ value, renderer }) {
    return (
        <button className="key-item"
            tabIndex="-1"
            onClick={() => {
                renderer(value)
            }}
        >
            {value}
        </button>
    )
}

export default KeyItem;