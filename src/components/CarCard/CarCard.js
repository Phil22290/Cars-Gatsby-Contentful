import React from 'react';
import './carcard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'gatsby'
import "./carcard.css"
import { GatsbyImage } from 'gatsby-plugin-image';


const Carcard = ({car}) => {

  console.log(car)

  // const { queriedCar: allContentfulCar } = useCar();

  return (
          <div className="cardgrid" key={car.slug}>

            <Grid item 
            m={1} 
            width={250}
            xs={12}
            >

            

              <Card sx={{ maxHeight: 400 }}>

                {/* COVER IMAGE */}

                
                <GatsbyImage
                  className="gatsby-image-wrapper-b"
                  objectFit="cover"                  
                  image={car.image.gatsbyImageData} />
                  
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {car.brand}
                  </Typography>
                  <Typography sx={{
                    fontSize: '15px', 
                    color: 'black'
                    }} 
                  variant="body"  color="text.secondary" >
                  <p>{car.model}</p>
                  <p>{car.year}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                  <Link to={`/cars/${car.slug}`}>
                  Vehicle Details
                  </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          <br />

          </div>
          
       
    
  )
        
}

export default Carcard

// Carlist.edge.slug