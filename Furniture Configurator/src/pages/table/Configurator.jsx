import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { useCustomization } from "../../contexts/TableCustomization";

export const Configurator = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
    useCustomization();

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Table width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Leg Layout</FormLabel>
            <RadioGroup
              row
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Leg Color</FormLabel>
            <RadioGroup
            row
              value={legsColor}
              onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Chrome"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Gold"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
