import './assets/fonts/font-face.css';
import { ThemeProvider } from './hooks/theme';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SidebarComponent, HomeComponent } from './components/components';
function App() {

  
  return (
      <ThemeProvider>
        <div className="flex">
          <SidebarComponent />
          <main className='w-full'>
            <section id='Home'>
              <HomeComponent/>
            </section>
            <section id='About Us'>
              <AboutUsComponent/>
            </section>
          </main>
        </div>
      </ThemeProvider>
  );
}

export default App;