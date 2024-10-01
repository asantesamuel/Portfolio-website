import PropTypes from 'prop-types';
// material-ui
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

import ComponentSkeleton from './ComponentSkeleton';

function ColorBox({ bgcolor, dark, main }) {
  return (
    <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2.5,
          bgcolor,
          color: dark ? 'grey.800' : '#ffffff',
          border: main ? '1px dashed' : '1px solid transparent'
        }}
      >
        {/* {title && (
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              {data && (
                <Stack spacing={0.75} alignItems="center">
                  <Typography variant="subtitle2">{data.label}</Typography>
                  <Typography variant="subtitle1">{data.color}</Typography>
                </Stack>
              )}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="inherit">
                About project
              </Typography>
            </Grid>
          </Grid>
        )} */}
        <Typography>About project</Typography>
      </Box>
    </Card>
  );
}

// ===============================|| COMPONENT - COLOR ||=============================== //

export default function AboutProject() {
  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Primary Color">
            <Typography>Grid One</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Secondary Color">
            <Typography>Grid two</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Other Color">
            <Typography>Grid three</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Success Color">
            <Typography>Grid four</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Error Color">
            <Typography>Grid five</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Warning Color">
            <Typography>Grid six</Typography>
          </MainCard>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  dark: PropTypes.bool,
  main: PropTypes.bool
};
