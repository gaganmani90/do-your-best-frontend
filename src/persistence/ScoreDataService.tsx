import { doc, setDoc, query, getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { itemConverter, ScoreItem } from '../model/ScoreItem'
import { monthNames, splitDates } from '../util/DateUtil'

class ScoreCollectionUtil {
  private static getKey (email: string): string {
    return email
  }

  private static getYearKey (date: string): string {
    const docName = splitDates(date)
    return docName.year.toString()
  }

  private static getMonthKey (date: string): string {
    const docName = splitDates(date)
    return docName.monthName()
  }

  private static getDayKey (date: string): string {
    const docName = splitDates(date)
    return docName.day.toString()
  }

  public static getRootDocRef (email: string) {
    return doc(db, ScoreCollectionUtil.getKey(email))
  }

  public static getDocRef (email: string, date: string) {
    const docRef = doc(db, ScoreCollectionUtil.getKey(email), ScoreCollectionUtil.getYearKey(date),
      ScoreCollectionUtil.getMonthKey(date), ScoreCollectionUtil.getDayKey(date)).withConverter(itemConverter)

    return docRef
  }
}

// TODO: why is it being called three times
export const getAllRecords = (email: string): ScoreItem[] => {
  const VALID_YEARS = [2021]
  let items: Array<ScoreItem> = []
  // eslint-disable-next-line no-empty
  for (let i = 0; i < VALID_YEARS.length; i++) {
    const year = VALID_YEARS[i]
    items = getRecordsByYear(email, year)
  }
  return items
}

/**
 * Fetch records by year
 * @param email
 * @param year
 */
export const getRecordsByYear = (email: string, year: number): Array<ScoreItem> => {
  const scoreItems: Array<ScoreItem> = []

  for (let i = 0; i < monthNames.length; i++) {
    const month = monthNames[i]
    getRecordsByMonth(email, year, month).then((items) => {
      if (items) {
        items.forEach((item) => {
          // console.log(item)
          if (item) {
            scoreItems.push(item)
          }
        })
      }
    }).catch((error) => console.log(month + ':' + year + ':' + error))
      .finally(() => {
        // console.log('FIREBASE: Data fetched for %s: %s', month, year)
        console.log(scoreItems)
      })
  }
  // TODO: figure out why ScoreItem type is being removed
  // console.log(scoreItems)
  return scoreItems
}

/**
 * write db
 * @param email
 * @param date : date for which data is being written
 * @param scoreItem
 */
export const pushScoreToDatabase = (email: string, scoreItem: ScoreItem) => {
  // create collection for email if does not exist
  const scoreDoc = ScoreCollectionUtil.getDocRef(email, scoreItem.date)
  setDoc(scoreDoc, Object.assign({}, scoreItem))
}

/**
 * DB call to retrieve records by month and year
 * @param email
 * @param year
 * @param month
 */
export const getRecordsByMonth = async (email: string, year: number, month: string) => {
  const scoreItems: Array<ScoreItem> = []

  const q = query(collection(db, email, String(year), month).withConverter(itemConverter))
  const snapshot = await getDocs(q)
  snapshot.forEach((doc) => {
    if (doc.exists()) { scoreItems.push(doc.data()) }
    // console.log('firebase data: ')
    // console.log(doc.data())
  })
  return scoreItems
}
