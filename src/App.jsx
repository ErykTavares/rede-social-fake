import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MyRoutes from './routes/MyRoutes';
import { GlobalStyle } from './style/GlobalStyle';
import {theme} from "./style/theme";

function App() {
  return (
   <main>
     <ThemeProvider theme={theme} >
       <GlobalStyle />
       <BrowserRouter>
        <MyRoutes />
       </BrowserRouter>
     </ThemeProvider>
   </main>
  );
}

export default App;
