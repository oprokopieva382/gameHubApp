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
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./components/hooks/usePlatforms";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";
import { GameSelectors } from "./components/GameSelectors";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.mode,
}));

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mode, setMode] = useState(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const themeMode = mode ? darkTheme : lightTheme;

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <ToastContainer />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NavBar
              toggleMode={toggleMode}
              themeMode={themeMode}
              onSubmit={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </Grid>

          {!isMobile ? (
            <>
              <Grid item xs={2.5}>
                <GenreList
                  setSelectedGenre={(genre) =>
                    setGameQuery({ ...gameQuery, genre })
                  }
                  selectedGenre={gameQuery.genre}
                />
              </Grid>
              <Grid item xs={9.5}>
                <GameHeading gameQuery={gameQuery} />
                <GameSelectors
                  gameQuery={gameQuery}
                  setGameQuery={setGameQuery}
                />
                <Item>
                  <GameGrid gameQuery={gameQuery} />
                </Item>
              </Grid>
            </>
          ) : (
            <Grid item xs={11} sx={{ margin: "0 auto" }}>
              <GameHeading gameQuery={gameQuery} />
              <GameSelectors
                gameQuery={gameQuery}
                setGameQuery={setGameQuery}
              />
              <Item>
                <GameGrid gameQuery={gameQuery} />
              </Item>
            </Grid>
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
