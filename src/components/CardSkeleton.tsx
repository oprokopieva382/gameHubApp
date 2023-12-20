import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";


export const CardSkeleton = () => {
   const theme = useTheme();
  return (
    <>
      <Card sx={{ maxWidth: 300, boxShadow: theme.shadows[6] }}>
        <Skeleton />
        <CardMedia sx={{ height: 160 }} />
        <Skeleton variant="rounded" width={400}  />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <Skeleton variant="text" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton variant="text" />
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Skeleton variant="text" />
        </Box>
      </Card>
    </>
  );
};
