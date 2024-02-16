import { HomeComponent } from './components/home/home.component';
import Sidebar from './components/sidebar/sidebar';
import './assets/fonts/font-face.css';

import { ThemeProvider } from './hooks/theme';

function App() {
  return (
      <ThemeProvider>
        <div className="flex">
          <Sidebar />
          <main className='w-full'>
            <HomeComponent/>
          </main>
        </div>
      </ThemeProvider>
  );
}

export default App;