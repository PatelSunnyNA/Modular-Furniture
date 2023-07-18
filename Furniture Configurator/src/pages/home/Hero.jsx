import React from "react";
import { Box, Button,useTheme } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ width: 1, height: 1 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          position="relative"
          minHeight={{ md: 800 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display="flex"
            alignItems="center"
          >
            <Container>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    color={theme.palette.text.primary}
                    variant="h2"
                    fontWeight={700}
                    align="center"
                  >
                    Welcome to{" "}
                  </Typography>
                  <Typography
                    color={theme.palette.primary.main}
                    variant="h2"
                    fontWeight={700}
                    align="center"
                    marginBottom={3}
                  >
                    Modular Furniture
                  </Typography>
                  <Box marginBottom={3} align="center">
                    <Typography
                      variant="h6"
                      color={theme.palette.text.secondary}
                      align="center"
                    >
                      Choose a item to configure
                    </Typography>
                  </Box>
                  <Box align="center">
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/chair")}
                      sx={{ margin: "5px" }}
                    >
                      <Typography>Chairs</Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/table")}
                      sx={{ margin: "5px" }}
                    >
                      <Typography>Tables</Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "49vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                    clipPath: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                    shapeOutside: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: "auto", md: 1 },
                      "& img": {
                        objectFit: "cover",
                      },
                      "& .lazy-load-image-loaded": {
                        height: 1,
                        width: 1,
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      src="/images/cover.jpg"
                      alt="Background Image"
                      height={{ xs: "auto", md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
