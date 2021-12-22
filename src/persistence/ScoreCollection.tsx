import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';
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

    public static getRootDocRef(email: string) {
        return doc(db, ScoreCollectionUtil.getKey(email));
    }

    public static getDocRef(email: string, date: string) {
        var docRef = doc(db, ScoreCollectionUtil.getKey(email), ScoreCollectionUtil.getYearKey(date),
        ScoreCollectionUtil.getMonthKey(date), ScoreCollectionUtil.getDayKey(date))

        return docRef
    }

    /**
     * Queries document by email and date
     * @param email : i.e. gaganmani90@gmail.com
     * @param date : "mm/dd/yyyy"
     */
    public static async getDocumentData(email: string, date: string) {
        var docRef = this.getDocRef(email, date);
        var docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          return docSnap.data();
    }

}

/**
 * write db
 * @param email 
 * @param date : date for which data is being written
 * @param scoreItem 
 */
export const pushScore = (email: string, scoreItem: ScoreItem) => {
    //create collection for email if does not exist
    const scoreDoc = ScoreCollectionUtil.getDocRef(email, scoreItem.date)
    setDoc(scoreDoc, Object.assign({}, scoreItem))
}

/**
 * DB call
 * @param email 
 * @returns 
 */
export const getAllScoreItems = (email: string): ScoreItem[] => {
    const scoreItems: ScoreItem[] = [];
    var docData = ScoreCollectionUtil.getDocumentData(email, "12/11/2021")

    
    return scoreItems;
}