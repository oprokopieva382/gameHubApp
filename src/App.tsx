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
import { darkTheme, lightTheme } from "./theme";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.mode,
}));

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mode, setMode] = useState(false);
  const themeMode = mode ? darkTheme : lightTheme;

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NavBar toggleMode={toggleMode} themeMode={themeMode} />
            </Grid>

            {!isMobile ? (
              <>
                <Grid item xs={2.5}>
                  <GenreList />
                </Grid>
                <Grid item xs={9.5}>
                  <Item>
                    <GameGrid />
                  </Item>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <Item>
                  <GameGrid />
                </Item>
              </Grid>
            )}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
