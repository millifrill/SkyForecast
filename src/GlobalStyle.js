import { createGlobalStyle } from 'styled-components';
// import { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
	  background-color: #383838;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 500;
    font-family: inherit;
	  background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #2369eb;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default GlobalStyle;

// const ThemedGlobalStyle = () => {
// 	const { theme } = useContext(ThemeContext);

// 	return <GlobalStyle theme={theme} />;
// };

// export default ThemedGlobalStyle;
