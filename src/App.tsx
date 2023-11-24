import { Box, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavBar } from "./components/NavBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <NavBar/>
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
    </>
  );
}

export default App;
