// material-ui
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from './ComponentSkeleton';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

export default function UploadData() {
  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Stack spacing={3}>
            <MainCard title="Basic">
              <Typography>Main Card One</Typography>
            </MainCard>
            <MainCard title="Heading">
              <Typography>Main Card two</Typography>
            </MainCard>
            <MainCard title="Body 1">
              <Typography>Main Card three</Typography>
            </MainCard>
            <MainCard title="Body 2">
              <Typography>Main Card four</Typography>
            </MainCard>
            <MainCard title="Subtitle 1">
              <Typography>Main Card six</Typography>
            </MainCard>
            <MainCard title="Subtitle 2">
              <Typography>Main Card seven</Typography>
            </MainCard>
            <MainCard title="Caption">
              <Typography>Main Card eight</Typography>
            </MainCard>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={3}>
            <MainCard title="Alignment">
              <>
                <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2" textAlign="right">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </>
            </MainCard>
            <MainCard title="Gutter Bottom">
              <>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography variant="h6">Size: 12px</Typography>
                  <Typography variant="h6">Weight: Regular</Typography>
                  <Typography variant="h6">Line Height: 20px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title="Overline">
              <Stack spacing={1.5}>
                <Typography variant="overline">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography variant="h6">Size: 12px</Typography>
                  <Typography variant="h6">Weight: Regular</Typography>
                  <Typography variant="h6">Line Height: 20px</Typography>
                </Breadcrumbs>
              </Stack>
            </MainCard>
            <MainCard title="Link">
              <Stack spacing={1.5}>
                <Link href="#">www.mantis.com</Link>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography variant="h6">Size: 12px</Typography>
                  <Typography variant="h6">Weight: Regular</Typography>
                  <Typography variant="h6">Line Height: 20px</Typography>
                </Breadcrumbs>
              </Stack>
            </MainCard>
            <MainCard title="Colors">
              <>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  This is textPrimary text color.
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  This is textSecondary text color.
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  This is primary text color.
                </Typography>
                <Typography variant="h6" color="secondary" gutterBottom>
                  This is secondary text color.
                </Typography>
                <Typography variant="h6" color="success" gutterBottom>
                  This is success text color.
                </Typography>
                <Typography variant="h6" sx={{ color: 'warning.main' }} gutterBottom>
                  This is warning text color.
                </Typography>
                <Typography variant="h6" color="error" gutterBottom>
                  This is error text color.
                </Typography>
              </>
            </MainCard>
            <MainCard title="Paragraph">
              <>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography variant="h6">Size: 14px</Typography>
                  <Typography variant="h6">Weight: Regular</Typography>
                  <Typography variant="h6">Line Height: 22px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
            <MainCard title="Font Style">
              <>
                <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ fontStyle: 'italic' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography variant="h6">Size: 14px</Typography>
                  <Typography variant="h6">Weight: Italic Regular & Italic Bold</Typography>
                  <Typography variant="h6">Line Height: 22px</Typography>
                </Breadcrumbs>
              </>
            </MainCard>
          </Stack>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
}
