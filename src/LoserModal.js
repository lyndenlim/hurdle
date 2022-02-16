import * as BS from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoserModal({ setShowLoseModal, setGameState }) {
    const [openLoseModal, setLoseWinModal] = useState(true)
    const history = useHistory()

    function handleClose() {
        setLoseWinModal(openLoseModal => !openLoseModal)
        setShowLoseModal(false)
    }

    function handlePlayAgain() {
        history.push("/")
        setShowLoseModal(false)
        setGameState(false)
    }

    return (
        <BS.Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={openLoseModal}
            onHide={handleClose}
            closeButton
        >
            <BS.Modal.Header closeButton></BS.Modal.Header>
            <BS.Modal.Body style={{ textAlign: "center" }}>
                <h2>Better luck next time...</h2>
                <BS.Button onClick={handlePlayAgain}>PLAY AGAIN</BS.Button>
            </BS.Modal.Body>
        </BS.Modal>
    )
}

export default LoserModal