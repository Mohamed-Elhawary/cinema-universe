import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

const App = () => {

	const [theme, setTheme] = useState('light');
  	
	const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light');

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className="App">
				<button onClick={themeToggler}>Switch Theme</button>

				<section>
                  <h2 className="section-title">Head 2</h2>
                  <div>This is Div</div>
                  <hr />
                </section>
			</div>
		</ThemeProvider>
	);	
}

export default App;