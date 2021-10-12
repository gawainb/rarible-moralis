import React, { forwardRef, useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	overrides: {
		MuiDropzonePreviewList: {
			imageContainer: { textAlign: "left", width: "100%", marginTop: "1rem" },
			image: {
				height: "100%",
				width: "auto",
				boxShadow: "3px 3px 4px #292929",
			},
		},
	},
});

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const IPFSUpload = () => {
	const V5Theme = useTheme();
	const isSmallScreen = useMediaQuery(V5Theme.breakpoints.down("md"));
	const [IPFSFiles, setIPFSFiles] = useState([]);
	console.log(IPFSFiles);
	return (
		<Dialog
			open
			fullWidth
			fullScreen={isSmallScreen}
			maxWidth="md"
			TransitionComponent={Transition}
		>
			<DialogTitle>Upload to IPFS</DialogTitle>
			<DialogContent>
				<MuiThemeProvider theme={theme}>
					<DropzoneArea
						showPreviews
						showPreviewsInDropzone={false}
						onChange={(files) => setIPFSFiles(files)}
						previewText=""
						alertSnackbarProps={{
							anchorOrigin: { vertical: "top", horizontal: "center" },
						}}
					/>
				</MuiThemeProvider>
			</DialogContent>
			<DialogActions>
				<Grid
					container
					direction={isSmallScreen ? "column" : "row"}
					justifyContent="flex-end"
					spacing={1}
					sx={
						isSmallScreen ? { padding: "1rem" } : { padding: "0 1rem 1rem 0" }
					}
				>
					<Grid item>
						<Button variant="contained" color="secondary" fullWidth>
							Cancel
						</Button>
					</Grid>
					<Grid item>
						<Button variant="contained" color="primary" fullWidth>
							Upload to IPFS
						</Button>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default IPFSUpload;
