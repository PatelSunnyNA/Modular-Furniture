import React from "react";
import { Box, Button ,Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
const navigate = useNavigate();
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Button onClick={() => navigate("/products/chair")}>
            <Typography>Chairs</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/products/table")}>
            <Typography>Tables</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
