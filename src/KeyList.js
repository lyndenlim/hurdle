import KeyItem from "./KeyItem";

function KeyList({ keyList, handleKeyboard }) {
    return <div className="key-list">
        {keyList.map(key => {
            return (
                <KeyItem key={key} handleKeyboard={handleKeyboard} value={key} />
            )
        })}
    </div>
}

export default KeyList;