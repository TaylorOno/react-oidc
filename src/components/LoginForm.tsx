import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

export const LoginForm = (props: { onSubmit: () => any }) => {
    return (
        <Grid container component="main" sx={{height:'100vh'}}>
            <CssBaseline/>
            <Grid item xs={true} sm={4} md={7}
                  sx={{
                      backgroundImage: 'url(https://source.unsplash.com/random)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}
            />
            <Grid item sm={8} md={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"
                     sx={{my: 8, mx: 4}}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={props.onSubmit} sx={{mt: 1}}>
                        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}