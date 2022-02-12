import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import * as Mui from "@mui/material"
import { NavLink } from "react-router-dom"

function Favorites({ bgColor, textColor }) {
    return (
        <Mui.AppBar className="favorite-bar" style={{ backgroundColor: bgColor }}>
            <style>{`body {background-color: ${bgColor}`}</style>
            <Mui.Toolbar>
                <Mui.Typography variant="h4" style={{ color: textColor }}>
                    Favorited Words
                </Mui.Typography>
                <div className='buttons'>
                    <NavLink to="/" exact>
                        <Mui.Button style={{ color: textColor }}>
                            <HouseOutlinedIcon></HouseOutlinedIcon>
                        </Mui.Button>
                    </NavLink>
                </div>
            </Mui.Toolbar>
        </Mui.AppBar>

    )
}

export default Favorites