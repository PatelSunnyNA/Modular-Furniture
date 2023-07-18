import { Box, Button, Grid, Typography } from "@mui/material";
import { useCustomization } from "../../contexts/ChairCustomization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item container>
          <Grid item xs={12}>
            <Typography>Chair Material</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setMaterial("leather")}
              variant={material === "leather" ? "contained" : "outlined"}
            >
              <Typography>Leather</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setMaterial("fabric")}
              variant={material === "fabric" ? "contained" : "outlined"}
            >
              <Typography>Fabric</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item xs={12}>
            <Typography>Chair Color</Typography>
          </Grid>
          {chairColors.map((item, index) => (
            <Grid item key={index}>
              <Button
                onClick={() => setChairColor(item)}
                variant={chairColor === item ? "contained" : "outlined"}
              >
                <Typography>{item.name}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <Typography>Cushion Color</Typography>
          </Grid>
          {cushionColors.map((item, index) => (
            <Grid item key={index}>
              <Button
                onClick={() => setCushionColor(item)}
                variant={cushionColor === item ? "contained" : "outlined"}
              >
                <Typography>{item.name}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <Typography>Leg Design</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setLegs(1)}
              variant={legs === 1 ? "contained" : "outlined"}
            >
              <Typography>Modern</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setLegs(2)}
              variant={legs === 2 ? "contained" : "outlined"}
            >
              <Typography>Classic</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Configurator;
