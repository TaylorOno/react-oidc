import {CircularProgress, Container, Stack, Typography} from "@mui/material";

type LoaderProps = {
    message: string;
}

export const Loader = ({message}: LoaderProps) => {
    return <Container
        sx={{display: "flex", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center"}}>
        <Stack sx={{display: "flex", alignItems: "center"}}>
            <CircularProgress/>
            <Typography component="h1" variant="h5">{message}</Typography>
        </Stack>
    </Container>;
}