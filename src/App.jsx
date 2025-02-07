import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from './Pages/LandingPage';
import MainLayout from './Layouts/MainLayout';
import WorksPage from './Pages/WorksPage';
function App() {
  return (
    <div className="px-6 md:px-22 py-6 bg-[#190019] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/work" element={<WorksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
