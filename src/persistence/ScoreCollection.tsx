import { doc, setDoc, getDocs, collectionGroup } from 'firebase/firestore';
import { db } from "../firebase";
import ScoreItem from '../model/ScoreItem';
import { formatDate, splitDates } from '../util/DateUtil';

class ScoreCollectionUtil {
    private static getKey(email: string): string {
        return email;
    }
    private static getYearKey(date: string): string {
        const docName = splitDates(date);
        return docName.year.toString();
    }

    private static getMonthKey(date: string): string {
        const docName = splitDates(date);
        return docName.monthName();
    }

    private static getDayKey(date: string): string {
        const docName = splitDates(date);
        return docName.day.toString();
    }

    private static getYearKeyFromDate(date: Date) {
        return this.getYearKey(formatDate(date));
    }

    public static getDocRef(email: string, date: string) {
        return doc(db, ScoreCollectionUtil.getKey(email), ScoreCollectionUtil.getYearKey(date),
            ScoreCollectionUtil.getMonthKey(date), ScoreCollectionUtil.getDayKey(date))
    }
}

export const pushScore = (email: string, date: string, scoreItem: ScoreItem) => {
    //create collection for email if does not exist
    const scoreDoc = ScoreCollectionUtil.getDocRef(email, date)
    setDoc(scoreDoc, Object.assign({}, scoreItem))
}