import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from "./components/Header";
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { HomePage } from './pages/HomePage';
import { Acounts } from './pages/Acounts';
import { Movies } from './pages/Movies';
import { Series } from './pages/Series';
import { MoviesList } from './pages/MoviesList';
import { SeriesList } from './pages/SeriesList';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <div className="App">
          <Header />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/acount" element={<Acounts />} />

            <Route path="/movie/:id" element={<Movies/>} />
            <Route path="/series/:id" element={<Series />} />
            <Route path="/movie" element={<MoviesList/>} />
            <Route path="/series" element={<SeriesList />} />
          </Routes>

      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
