import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import logo from '../assets/logo.png'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//const para o estilo
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

//const para o estilo
const precoStyle = {
  color: "#EA4E3B",
  fontWeight: "bold",
  textAlign: "right",
  alignSelf: "stretch",
};

  
//component que recebe a informação de um unico carro
const Carro = ({ carro }) => {
  const classes = useStyles();
  
  let carImage = null;
  //tenta ir buscar a imagem. Se não existir o logo é metido
  try {
    carImage = require("../assets/images/"+carro.image+".jpg").default;
  }catch(e){
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
    carImage = logo;
  }

  return (
    //se a card for carregada, é atribuido aquele pathname e leva o state do carro carregado
    <Link
      to={{
        pathname: "carros/details/" + carro.model,
        state: carro,
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={carImage}
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
          <p style={precoStyle}>{carro.price + "€"}</p>{" "}
        </CardActions>
      </Card>
    </Link>
  );
};

export default Carro;
