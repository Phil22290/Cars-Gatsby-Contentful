import React from 'react'
import { graphql } from 'gatsby'
import "./car_template_css.scss"
import Hero from '../components/hero'
import Button from '@mui/material/Button';
import { GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
    query($slug: String!) {
        contentfulCar(slug: { eq: $slug }) {
        brand
        model
        year
        engineCapacity
        fuel
        fuelConsumption
        mileage
        price
        tax
        transmission
        image {
          gatsbyImageData
        }
        }
    }
`

const CarData = props => {

    const data = props.data.contentfulCar;

    return (
      <>
      <div key={data.slug}>
        <Hero />
        
        <div className="buttondiv">
        <Button className="button" selected variant="contained" href="/"
        
        >
        Go back
        </Button></div>
        
        <div className="template-image">
        <GatsbyImage classname="template-image" image={data.image.gatsbyImageData} /></div>

        <div className="container">
        <ul className="responsive-table-head">
            <li className="table-header">
              <div className="col col-1b">Fetched info about {data.brand} - {data.model}</div>
            </li>
            </ul>
            <ul className="responsive-table">
            <li className="table-row">
              <div className="col col-1">Brand</div>
              <div className="col col-2">{data.brand}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Model</div>
              <div className="col col-2">{data.model}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Year</div>
              <div className="col col-2">{data.year}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Transmission</div>
              <div className="col col-2">{data.transmission}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Mileage</div>
              <div className="col col-2">{data.mileage}</div>
            </li>
            </ul>
            
            <ul className="responsive-table">
            <li className="table-row">
              <div className="col col-1">Fuel</div>
              <div className="col col-2">{data.fuel}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Fuel Consumption</div>
              <div className="col col-2">{data.fuelConsumption}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Engine Capacity</div>
              <div className="col col-2">{data.engineCapacity}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Tax</div>
              <div className="col col-2">{data.tax}</div>
            </li>
            <li className="table-row">
              <div className="col col-1">Price</div>
              <div className="col col-2">{data.price} euro</div>
            </li>

          </ul>
        </div>

        </div>
      </>
    )
  }
  
export default CarData