import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const WildPokemonBox = ({all151}) => {
 
  
  const setCurrentWild = (array) =>  {
    let currentWildArray = [];
    array.forEach(item => {
      if (currentWildArray.length < 6) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomObject = array[randomIndex];
        if (!currentWildArray.some(x => x === randomObject)) {
          currentWildArray.push(randomObject);
        }
      }
    });
    return currentWildArray;
  }
  let currentWild = setCurrentWild(all151)

  return (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={'put api sprite here'}
        alt="a pokemon "
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default WildPokemonBox;