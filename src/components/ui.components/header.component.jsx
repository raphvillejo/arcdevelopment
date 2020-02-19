import React, { Fragment, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const useStyles = makeStyles(theme => ({
	toobarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em"
	},
	logo: {
		height: "7em"
	},
	tabContainer: {
		marginLeft: "auto"
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px"
	},
	button: {
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25ox",
		height: "45px",
		...theme.typography.estimate
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	return (
		<Fragment>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					<Toolbar disableGutters>
						<img src={logo} className={classes.logo} alt="company logo" />
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
							indicatorColor="primary"
						>
							<Tab className={classes.tab} label="Home" />
							<Tab className={classes.tab} label="Services" />
							<Tab className={classes.tab} label="The Revolution" />
							<Tab className={classes.tab} label="About Us" />
							<Tab className={classes.tab} label="Contact Us" />
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toobarMargin} />
		</Fragment>
	);
}
