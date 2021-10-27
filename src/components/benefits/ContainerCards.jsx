import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import CardBenefits from "./CardBenefits";

import benefits from "./benefits.json";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ContainerCards = () => {
  React.useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "benefits"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Fragment>
            <h2>Beneficios Corporativos</h2>
           
      <Grid container spacing={1} justify="center">
        {benefits.map((item) => {
          return (
            <CardBenefits
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
};
export default ContainerCards;
