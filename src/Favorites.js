import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import * as Mui from "@mui/material"
import { NavLink } from "react-router-dom"
import DictionaryEntry from './DictionaryEntry';

function Favorites({ bgColor, textColor, favoriteList }) {
    return (
        <div>
            <Mui.AppBar className="favorite-bar" style={{ backgroundColor: bgColor }}>
                <style>{`body {background-color: ${bgColor}`}</style>
                <Mui.Toolbar>
                    <Mui.Typography variant="h4" style={{ color: textColor }}>
                        Favorited Words
                    </Mui.Typography>
                    <div className='buttons'>
                        <NavLink to="/" exact>
                            <Mui.Button style={{ color: textColor }}>
                                <HouseOutlinedIcon />
                            </Mui.Button>
                        </NavLink>
                    </div>
                </Mui.Toolbar>
            </Mui.AppBar>
            <div className='favorite-container'>
                <div className="row">
                    <DictionaryEntry textColor={textColor}
                        word={favoriteList[0]}
                        pronunciation={favoriteList[1]}
                        english={favoriteList[2]}
                        def={favoriteList[3]}
                        isFavorited={true}
                    />
                </div>
            </div>
        </div>


    )
}

export default Favorites