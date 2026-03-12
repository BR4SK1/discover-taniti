import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Experiences } from '@/pages/Experiences';
import { IslandInfo } from '@/pages/IslandInfo';
import { Book } from '@/pages/Book';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="island-info" element={<IslandInfo />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
