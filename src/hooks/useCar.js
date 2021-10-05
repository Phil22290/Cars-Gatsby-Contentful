import { useStaticQuery, graphql } from "gatsby"

const useCar = () => {
    const {allContentfulCar} = useStaticQuery(graphql`
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
                            image {
                                gatsbyImageData(layout: FULL_WIDTH, height: 140)
                              }
                        }
                }
                }
            }
        `
    );

    return allContentfulCar.edges

}

export default useCar