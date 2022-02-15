import KeyItem from "./KeyItem";

function KeyList({ keyList, handleKeyboard, renderer }) {
    return <div className="key-list">
        {keyList.map(key => {
            return (
                <KeyItem key={key} handleKeyboard={handleKeyboard} value={key} renderer={renderer} />
            )
        })}
    </div>
}
export default KeyList;