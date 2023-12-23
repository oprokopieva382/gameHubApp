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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Genre } from "./components/hooks/useGenre";

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
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
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
                  <GenreList
                    setSelectedGenre={setSelectedGenre}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Item>
                    <GameGrid selectedGenre={selectedGenre} />
                    <ToastContainer />
                  </Item>
                </Grid>
              </>
            ) : (
              <Grid item xs={11} sx={{ margin: "0 auto" }}>
                <Item>
                  <GameGrid selectedGenre={selectedGenre} />
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
