import { Outlet } from 'react-router-dom';
import './App.css'
import MobileNav from './components/MobileNav';
import Header from './ui/Shared/Header';
import Footer from './ui/Shared/Footer';

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen text-stone-50">
      <Header />
      <MobileNav />
      <Outlet />
      <Footer className='relative bottom-0' />
    </div>
  )
}

export default App;