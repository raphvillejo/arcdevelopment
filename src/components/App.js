import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui.components/theme.ui.component";
import Header from "./ui.components/header.component";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			Hello!
		</ThemeProvider>
	);
}

export default App;
