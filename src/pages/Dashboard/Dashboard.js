import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";
import Grid from "@mui/material/Grid";
import { navigate } from "@reach/router";
import { useSnackbar } from "notistack";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button";

const Dashboard = () => {
	const { user, logout } = useMoralis();
	const { enqueueSnackbar } = useSnackbar();
	const userData = useMemo(() => {
		return { username: user?.get("username"), email: user?.get("email") };
	}, [user]);

	/**
	 * @description Handle user logout with Moralis
	 * @example
	 * const res = await onLogout();
	 *
	 */
	const onLogout = async () => {
		try {
			await logout();
			navigate("/login");
		} catch (e) {
			enqueueSnackbar("Logout Failed.", { variant: "error" });
		}
	};

	return (
		<Grid container direction="column" spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h6">User: {userData.username}</Typography>
			</Grid>

			{userData.email && (
				<Grid item xs={12}>
					<Typography variant="h6">Email: {userData.email}</Typography>
				</Grid>
			)}
			<Grid item xs={12}>
				<Button variant="outlined" onClick={onLogout}>
					Logout
				</Button>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
