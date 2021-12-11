import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { documentName } from '../util/DateUtil';

export const pushScore = (email, date, scoreItem) => {
    //create collection for email if does not exist
    console.log("pushScore: "+email+","+date+","+scoreItem);
    const scoreDoc = doc(db, email, documentName(date))
    setDoc(scoreDoc, Object.assign({}, scoreItem))
}