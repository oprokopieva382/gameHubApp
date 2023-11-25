import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    console.log("Toggle Dark Mode");
    setMode(!mode);
  };
  const themeMode = mode ? darkTheme : lightTheme;
  console.log("Current Theme:", themeMode.palette.mode);

  return (
    <>
      <ThemeProvider key={mode ? "dark" : "light"} theme={themeMode}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NavBar catchMode={toggleMode} themeMode={themeMode} />
            </Grid>

            {!isMobile ? (
              <>
                <Grid item xs={4}>
                  <Item>Aside</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>Main</Item>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <Item>Main</Item>
              </Grid>
            )}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
