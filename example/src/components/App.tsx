import React from 'react';
import { Example } from './Example';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Example />
    </ThemeProvider>
  );
}

export default App;
