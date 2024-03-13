import { createContext, useEffect, useState } from 'react';

const themes = {
	dark: {
		backgroundColor: '#242424',
		color: 'white',
	},
	light: {
		backgroundColor: 'white',
		color: 'black',
	},
};

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(false);
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setIsDark((prevIsDark) => !prevIsDark);
	};

	useEffect(() => {
		setTheme(isDark ? themes.dark : themes.light);
	}, [isDark]);

	return (
		<ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
			<style>
				{`:root {
          --background-color: ${theme.backgroundColor};
          --text-color: ${theme.color};
        }`}
			</style>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
