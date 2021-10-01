import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby' 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './layout.module.css';

const Carlist = () => {
  
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const data = useStaticQuery (
    
    graphql`
      query  {
        allContentfulCar {
          edges {
            node {
              id
              brand
              model
              year
              engineCapacity
              fuel
              fuelConsumption
              mileage
              price
              transmission
              tax
              contentful_id
              slug
            }
          }
        }
      }
  `)
    return (
    <div >
    <Grid container spacing={3}>
      {data.allContentfulCar.edges.map(edge => {
        return (
          <>
         

          {/* CARS grid */}
          <div className="cardgrid" key={edge.node.slug}>

            <Grid item 
            m={1} 
            width={250}
            xs={12}
            >
              <Card xs={{ maxWidth: 345 }}>
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {edge.node.brand}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <p>{edge.node.model}</p>
                  <p>{edge.node.year}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                  <Link to={`/cars/${edge.node.slug}`}>
                  Vehicle Details
                  </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          <br />

          </div>
          
          </>
        )
          
      })}    
    </Grid>
    </div>
    
  )
}

export default Carlist