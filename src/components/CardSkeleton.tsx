import { useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { StyledBox } from "../assets/style/CardSkeletonStyle";

export const CardSkeleton = () => {
  const theme = useTheme();
  return (
    <Card sx={{ boxShadow: theme.shadows[6] }}>
      <Skeleton variant="rectangular" height={160} />
      <CardContent sx={{ height: 100 }}>
        <Typography gutterBottom variant="h6" component="div">
          <Skeleton variant="text" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton variant="text" />
        </Typography>
      </CardContent>
      <StyledBox>
        <Skeleton variant="text" />
      </StyledBox>
    </Card>
  );
};
