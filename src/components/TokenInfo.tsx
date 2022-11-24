import {useAuth} from "react-oidc-context";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {CopyBlock, dracula} from "react-code-blocks";
import jwt_decode from "jwt-decode";
import * as React from "react";

export const TokenInfo = (props: { open: boolean, handleClose: () => void }) => {
    const auth = useAuth();

    return (
        <Dialog open={props.open} onClose={props.handleClose} sx={{minWidth: "600px"}}>
            <DialogTitle>Your Token Info</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <CopyBlock
                        text={JSON.stringify(jwt_decode(auth.user?.access_token!), null, 2)}
                        language={"typescript"}
                        theme={dracula}
                        showLineNumbers={false}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}