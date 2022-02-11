import * as Mui from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import { useState } from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#81817f',
    color: "white",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

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
    const [open, setOpen] = useState(false)
    const [isDark, setIsDark] = useState(true)

    function handleOpen() {
        setOpen(open => !open)
    }

    function handleClose() {
        setOpen(open => !open)
    }

    function handleDarkMode() {
        setIsDark(isDark => !isDark)
    }

    return (
        <Mui.AppBar className="appbar" >
            <Mui.Toolbar >
                <Mui.Typography variant="h4" className="logo">
                    Hurdle
                </Mui.Typography>
                <div className="buttons">
                    <Mui.Button className="buttonColor" >
                        <HelpOutlineIcon />
                    </Mui.Button>
                    <Mui.Button className="buttonColor">
                        <BookmarkBorderIcon />
                    </Mui.Button>
                    <Mui.Button className="buttonColor" onClick={handleOpen}>
                        <SettingsIcon />
                    </Mui.Button>
                    <Mui.Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Mui.Box sx={style}>
                            {isDark ? "Dark Mode" : "Light Mode"} <IOSSwitch sx={{ m: 1 }} defaultChecked onClick={handleDarkMode} />
                            <Mui.Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            </Mui.Typography>
                        </Mui.Box>
                    </Mui.Modal>
                </div>
            </Mui.Toolbar>
        </Mui.AppBar>
    )
}

export default Header