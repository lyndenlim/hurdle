import * as BS from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function WinnerModal({ counter, setShowWinModal, setGameState }) {
    const [openWinModal, setOpenWinModal] = useState(true)
    const history = useHistory()

    function handleClose() {
        setOpenWinModal(openWinModal => !openWinModal)
        setShowWinModal(false)
    }

    function handlePlayAgain() {
        history.push('/')
        history.go(0)
        setShowWinModal(false)
        setGameState(false)
    }

    return (
        <BS.Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={openWinModal}
            onHide={handleClose}
        >
            <BS.Modal.Header closeButton></BS.Modal.Header>
            <BS.Modal.Body style={{ textAlign: "center" }}>
                <h2>Good job!</h2>
                <p>You guessed the word in {counter - 1} turn(s).</p>
                <BS.Button onClick={handlePlayAgain}>PLAY AGAIN</BS.Button>
            </BS.Modal.Body>
        </BS.Modal>
    )
}

export default WinnerModal