import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import CardConvenios from "./CardConvenios";
import convenios from "./convenios.json";



const ContainerCards = () => {
  
  return (
    <Fragment>
      <h1>Convenios Corporativos</h1>
      <Grid container spacing={1} justify="center">
        {convenios.map((item) => {
          return (
            <CardConvenios
              title={item.title}
              description={item.description}
              image={item.image}
              text={item.text}
              secondaryText={item.secondaryText}
            />
          );
        })}
      </Grid>
    </Fragment>
  );
  }


export default ContainerCards;
