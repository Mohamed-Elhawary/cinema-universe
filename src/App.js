import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ProvideAuth } from 'utils/use-auth';
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import Logo from "ui/logo/Logo";

const App = () => {

	const [theme, setTheme] = useState('dark');
  	
	const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light');

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<ProvideAuth>
				<div className="App">
					<Logo />
				</div>
			</ProvideAuth>
		</ThemeProvider>
	);	
}

export default App;