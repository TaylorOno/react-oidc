import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Divider} from "@mui/material";
import {useAuth} from "react-oidc-context";
import {TokenInfo} from "./TokenInfo";

export const MenuAppBar = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [showTokenInfo, setShowTokenInfo] = useState<boolean>(false);
    const auth = useAuth();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleMenuClose = () => setAnchorElUser(null);
    const handleTokenInfoClose = () => setShowTokenInfo(false);

    return (
        <div>
            <AppBar position="static">
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Typography variant="h4">Demo App</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h6">{auth.user?.profile.preferred_username}</Typography>
                        <IconButton onClick={handleMenuOpen}>
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorElUser}
                            anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
                            keepMounted
                            transformOrigin={{vertical: 'top', horizontal: 'center',}}
                            open={Boolean(anchorElUser)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => {
                                setShowTokenInfo(true)
                                setAnchorElUser(null)
                            }}>
                                <Typography textAlign="center">Info</Typography>
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={() => auth.signoutRedirect({
                                id_token_hint: auth.user?.id_token,
                                post_logout_redirect_uri: "http://localhost:3000"
                            })}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </AppBar>
            <TokenInfo open={showTokenInfo} handleClose={handleTokenInfoClose}/>
        </div>
    );
}
