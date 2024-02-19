import { useEffect } from "react";
import { db } from '../../../firebase.config'; // Make sure this path is correct.
import { collection, getDocs } from 'firebase/firestore';
import { Experience } from "../../types/experience.interface";
export const Experiences:React.FC = () => {

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
    <div></div>
  );
}