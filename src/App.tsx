import React, { useEffect, useState } from 'react';
import { HomeComponent } from './components/home/home.component';
import Sidebar from './components/sidebar/sidebar';
import './assets/fonts/font-face.css';

import { db } from '../firebase.config'; // Make sure this path is correct.
import { collection, getDocs } from 'firebase/firestore';
import { ThemeProvider } from './hooks/theme';
import { Experience } from './types/experience.interface';
import { AboutUsComponent } from './components/about-us/about-us';
function App() {

  const getExperiences = async () => {
    const experiencesCol = collection(db, 'experiences');
    const experienceSnapshot = await getDocs(experiencesCol);
    const experienceList = experienceSnapshot.docs.map(doc => doc.data());
    return experienceList;
  }

  useEffect(() => {
    
    getExperiences().then((experienceList:Experience[]) => {
      console.log(experienceList);
    })
  })
  return (
      <ThemeProvider>
        <div className="flex">
          <Sidebar />
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