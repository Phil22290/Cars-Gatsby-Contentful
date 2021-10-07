import * as React from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./layout.module.css";
import "./CarCard/carcard.css";
import Carcard from "./CarCard/CarCard";
import useCar from "../hooks/useCar";

const Carlist = () => {
	const data = useCar();

	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "left",
		color: theme.palette.text.secondary,
	}));

	return (
		<div>
			<Grid container spacing={3}>
				{data.map((currentCar) => {
					return <Carcard car={currentCar.node} />;
				})}
			</Grid>
		</div>
	);
};

export default Carlist;
