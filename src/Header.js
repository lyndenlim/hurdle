import * as Mui from '@mui/material'
import * as BS from 'react-bootstrap'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import { useState } from "react"


const IOSSwitch = styled((props) => (
    <Mui.Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


function Header() {
    const [openSettings, setOpenSettings] = useState(false)
    const [openInfo, setOpenInfo] = useState(false)
    const [isColorblind, setIsColorblind] = useState(false)



    function handleOpenSettings() {
        setOpenSettings(openSettings => !openSettings)
    }

    function handleCloseSettings() {
        setOpenSettings(openSettings => !openSettings)
    }

    function handleColorblindMode() {
        setIsColorblind(isColorblind => !isColorblind)
    }

    function handleOpenInfo() {
        setOpenInfo(openInfo => !openInfo)
    }

    function handleCloseInfo() {
        setOpenInfo(openInfo => !openInfo)
    }


    return (
        <Mui.AppBar className="appbar" >
            <Mui.Toolbar >
                <Mui.Typography variant="h4" className="logo">
                    Hurdle
                </Mui.Typography>
                <div className="buttons">
                    <Mui.Button className="button-color" onClick={handleOpenInfo} >
                        <HelpOutlineIcon />
                    </Mui.Button>
                    <BS.Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={openInfo}
                        onHide={handleCloseInfo}
                    >
                        <BS.Modal.Header closeButton>
                            <BS.Modal.Title id="contained-modal-title-vcenter">
                                <strong>HOW TO PLAY</strong>
                            </BS.Modal.Title>
                        </BS.Modal.Header>
                        <BS.Modal.Body>
                            <p>Like <strong>WORDLE</strong> but harder... </p>
                            <p>Guess the word in 6 tries. Hit/click the enter button to submit.</p>
                            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                            <hr></hr>
                            <h5>Examples</h5>
                            <div className="row example">
                                <div className="letter-tile correct">H</div>
                                <div className="letter-tile absent">E</div>
                                <div className="letter-tile absent">A</div>
                                <div className="letter-tile absent">R</div>
                                <div className="letter-tile absent">D</div>
                            </div>
                            <p>The letter <strong>H</strong> is in the word and in the correct spot.</p>
                            <div className="row example">
                                <div className="letter-tile absent">P</div>
                                <div className="letter-tile present">I</div>
                                <div className="letter-tile absent">Z</div>
                                <div className="letter-tile absent">Z</div>
                                <div className="letter-tile absent">A</div>
                            </div>
                            <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
                            <div className="row example">
                                <div className="letter-tile absent">A</div>
                                <div className="letter-tile absent">B</div>
                                <div className="letter-tile absent">O</div>
                                <div className="letter-tile absent">V</div>
                                <div className="letter-tile absent">E</div>
                            </div>
                            <p>The letter <strong>V</strong> is not in the word in any spot.</p>
                        </BS.Modal.Body>
                    </BS.Modal>
                    <Mui.Button className="button-color">
                        <BookmarkBorderIcon />
                    </Mui.Button>
                    <Mui.Button className="button-color" onClick={handleOpenSettings}>
                        <SettingsIcon />
                    </Mui.Button>
                    <BS.Modal
                        size="sm"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={openSettings}
                        onHide={handleCloseSettings}
                        align="center"
                    >
                        <BS.Modal.Header closeButton>
                            <BS.Modal.Title id="contained-modal-title-vcenter">
                                Settings
                            </BS.Modal.Title>
                        </BS.Modal.Header>
                        <BS.Modal.Body >
                            Colorblind Mode
                            <IOSSwitch sx={{ m: 1 }} onClick={handleColorblindMode} />
                            <p></p>
                            <p><BS.Button size="small" variant="danger">Reset Favorites</BS.Button></p>
                        </BS.Modal.Body>
                    </BS.Modal>
                </div>
            </Mui.Toolbar>
        </Mui.AppBar>
    )
}

export default Header