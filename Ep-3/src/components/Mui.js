import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";

const Mui = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="realtive">
        <Toolbar>
          <AddAPhotoRoundedIcon />

          <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Photo Album disadijsid jdiasjdi jdisajid djisajdi jdaisjid
              jiajsdji
            </Typography>
            <div>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: "center", marginBottom: 20 }}
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    See Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Mui;
