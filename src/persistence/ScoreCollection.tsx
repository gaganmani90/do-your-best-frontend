import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase";
import ScoreItem from '../model/ScoreItem';
import { documentName } from '../util/DateUtil';

export const pushScore = (email: string, date: string, scoreItem: ScoreItem) => {
    //create collection for email if does not exist
    console.log("pushScore: "+email+","+date+","+scoreItem);
    const scoreDoc = doc(db, email, documentName(date))
    setDoc(scoreDoc, Object.assign({}, scoreItem))
}