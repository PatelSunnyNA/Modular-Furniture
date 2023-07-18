import * as React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import {Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { useNavigate } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const DrawerButton = ({ href, icon, text }) => {
    const theme = useTheme();
    return (
      <Box>
        <Button
          color="primary"
          variant="text"
          startIcon={icon}
          sx={{
            color: theme.palette.text.primary,
            mx: 1.5,
          }}
        >
          <Link to={href} style={{ textDecoration: "none" }}>
            <Box>
              <Typography sx={{ color: theme.palette.text.primary }}>
                {text}
              </Typography>
            </Box>
          </Link>
        </Button>
      </Box>
    );
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textalign: "center",
      }}
    >
      <Grid container xs={12} direction="column" alignContent="center">
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            Sunny Patel
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DrawerButton href="/" icon={<HomeIcon />} text="home" />
        </Grid>
        <Grid item xs={12}>
          <DrawerButton
            href="/Chair"
            icon={<DeveloperBoardIcon />}
            text="Chair"
          />
        </Grid>
        <Grid item xs={12}>
          <DrawerButton href="/Table" icon={<NewspaperIcon />} text="Table" />
        </Grid>

      </Grid>
    </Box>
  );

  const NavbarButton = ({ href, icon, text }) => {
    const theme = useTheme();
    return (
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Button
          color="primary"
          variant="text"
          startIcon={icon}
          onClick={() => navigate(href)}
          sx={{
            color: theme.palette.text.primary,
            mx: 1.5,
          }}
        >
          <Typography sx={{ color: theme.palette.text.primary }}>
            {text}
          </Typography>
        </Button>
      </Box>
    );
  };

  const NavbarLogo = () => {
    const theme = useTheme();
    return (
      <Box sx={{ alignItems: "center" }}>
        <Button
          color="primary"
          variant="text"
          disableRipple
          startIcon={<WbSunnyIcon />}
          onClick={() => navigate("/")}
          sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "1rem",
              flexGrow: 1,
              display: { xs: "block", md: "block" },
            }}
          >
            Modular Furniture
          </Typography>
        </Button>
      </Box>
    );
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        color="default"
        position="fixed"
        sx={{
          border: 0,
          height: "55px",
          boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <NavbarLogo />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavbarButton href="/" icon={<HomeIcon />} text="Home" />
            <NavbarButton
              href="/chair"
              icon={<DeveloperBoardIcon />}
              text="Chair"
            />
            <NavbarButton
              href="/table"
              icon={<DeveloperBoardIcon />}
              text="Table"
            />
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
