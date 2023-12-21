import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";

export const CardSkeleton = () => {
  const theme = useTheme();
  return (
    <Card sx={{ boxShadow: theme.shadows[6]}}>
      <Skeleton variant="rectangular" height={160}/>
      <CardContent sx={{ height: 100 }}>
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
  );
};
