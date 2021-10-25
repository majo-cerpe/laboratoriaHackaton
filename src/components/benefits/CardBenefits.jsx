import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { collection, getDocs } from "firebase/firestore";
import db from "./../../firebase";

const CardBenefits = () => {
  const [task, setTask] = React.useState([]);

  React.useEffect(() => {
    const bringData = async () => {
      try {
        const data = await getDocs(collection(db, "benefits"));
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTask(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    bringData();
  }, []);

  return (
    <ul>
      {task.map((item) => (
        <li key={item}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography component="p" variant="h6" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text} {item.secondaryText}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
      ))}
    </ul>
  );
};
export default CardBenefits;
