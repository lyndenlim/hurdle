import * as BS from 'react-bootstrap'

function WinnerModal() {
    return (
        <BS.Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show
        >
            <BS.Modal.Body style={{textAlign: "center"}}>
                <h4>Good job!</h4>
            </BS.Modal.Body>
        </BS.Modal>
    )
}

export default WinnerModal