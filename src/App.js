import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { ThemeProvider } from "styled-components";
import Cookies from 'js-cookie';
import { ProvideAuth } from 'utils/use-auth';
import { switchTheme } from "actions";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";

const App = ({theme, setTheme}) => {

	useEffect(() => {
		let storedTheme = Cookies.get("theme");
		if(storedTheme) setTheme(storedTheme);
	}, []);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<ProvideAuth>
				<BrowserRouter>
					<div className="App">
						<Navbar />
						<Footer />
					</div>
				</BrowserRouter>
			</ProvideAuth>
		</ThemeProvider>
	);	
}

const mapStateToProps = ({theme}) => ({theme: theme.theme});
  
const mapDispatchToProps = (dispatch) => ({setTheme: (theme) => dispatch(switchTheme(theme))});

export default connect(mapStateToProps, mapDispatchToProps)(App);