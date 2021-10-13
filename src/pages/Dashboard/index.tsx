import React, { useEffect } from "react";
import {
	Router,
	useLocation,
	navigate,
	RouteComponentProps,
} from "@reach/router";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Dashboard from "./Dashboard";
import ERC721 from "./ERC721";
import AppBar from "../../components/AppBar";

const useStyles = makeStyles((theme: Theme) => ({
	mainContainer: {
		display: "flex",
	},
	innerContainer: {
		padding: theme.spacing(3),
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
}));

// eslint-disable-next-line
const Index = (_props: RouteComponentProps): JSX.Element => {
	const classes = useStyles();
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/") {
			navigate("/dashboard");
		}
	}, [pathname]);

	return (
		<Box className={classes.mainContainer}>
			<CssBaseline />
			<AppBar pathname={pathname} />
			<Box component="main" flexGrow={1} className={classes.innerContainer}>
				<div className={classes.toolbar} />
				<Router>
					<Dashboard path="dashboard" />
					<ERC721 path="erc721" />
				</Router>
			</Box>
		</Box>
	);
};

export default Index;
