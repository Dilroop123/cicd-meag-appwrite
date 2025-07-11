import { Header } from './components/index.ts';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.tsx';

function App() {

    return (
        <div style={{ margin: '15px 200px', boxSizing: 'border-box' }}>
            <Header />
            <Outlet />
            {/* Outlet is used so that header and footer will
            remain static on all the pages and inside body will keep on changing*/}
            <Footer />
        </div>
    )
}

export default App