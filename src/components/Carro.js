import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/logo.png";
import { InfoOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block",
    margin: "10px",
  },
  media: {
    height: 140,
  },
});

const precoStyle = {
  color: "#EA4E3B",
  fontWeight: "bold",
  textAlign: "right",
  alignSelf: "stretch",
};

const Carro = ({ carro }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="/carros/details">
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {carro.brand + " " + carro.model}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {carro.year + " • " + carro.hp + "hp" + " • " + carro.color}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <p3 style={precoStyle}>{carro.price + "€"}</p3>{" "}
      </CardActions>
    </Card>
  );
  /* <div className="task">
      <h3>
        {carro.brand + " " + carro.model} <Button href="/">Details</Button>
      </h3>
      <p>{carro.price}</p>
    </div> */
};

export default Carro;
