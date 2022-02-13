import Button from '@mui/material/Button'

function LengthButtons({ textColor }) {
    return (
        <div>
            <div className="col length-buttons">
                <span style={{ paddingRight: "10px" }}>
                    <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }}>5 Letters</Button>
                </span>
                <span>
                    <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }}>6 Letters</Button>
                </span>
            </div>
            <div className="col length-buttons">
                <span style={{ paddingRight: "10px" }}>
                    <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }}>7 Letters</Button>
                </span>
                <span>
                    <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }}>8 Letters</Button>
                </span>
            </div>
        </div>
    )
}

export default LengthButtons