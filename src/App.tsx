import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="container mx-auto px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
