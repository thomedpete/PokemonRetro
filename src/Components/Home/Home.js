import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo from '../../Assets/pokeLogo.png'
import './Home.css'
import WildPokemonBox from '../WildPokemonBox/WildPokemonBox';

const options = [
  {
    path: '/',
    text: 'Wild Area'
  },
  {
    path: '/pokedex',
    text: 'Pokedex'
  },
  {
    path: '/pc',
    text: 'PC'
  }
 
];

const ITEM_HEIGHT = 48;

const Home = ({ allMons, setFavMons, current, setCurrent, caught, setCatch }) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div className='home'>
      <Box className='logo-cont' zIndex={3} ><img className='logo'
        src={logo}
        alt="Pokemon Logo" /></Box>
      <IconButton
        aria-label="more"
        className='icon-button'
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        className='menuButton'
        MenuListProps={{ 'aria-labelledby': 'long-button', }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor: 'red',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem id={option.text} key={option.path} selected={option === 'Pyxis'} onClick={handleClose}>
            <Link className='little-link' to={option.path}>{option.text}</Link>
          </MenuItem>
        ))}
      </Menu>
      <div>
         <WildPokemonBox all151={allMons} setFav={setFavMons} current={current} setCaught={setCurrent} caught={caught} setCatch={setCatch}></WildPokemonBox>
      </div>
    

    </div> 
  )
}


export default Home;