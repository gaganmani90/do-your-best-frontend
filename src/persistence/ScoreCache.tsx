import { ScoreItem } from '../model/ScoreItem'
import { getAllRecords, pushScoreToDatabase } from './ScoreDataService'

/**
 * Inserts an entry into database. This should execute when user submitted their score
 * @param email
 * @param date
 * @param score
 */
const put = (email: string, date: string, score: number) => {
  // @ts-ignore
  const oldItems: ScoreItem[] = JSON.parse(localStorage.getItem(email)) || []

  const newItem = new ScoreItem(date, score, 1, String(new Date()))
  // check if date is already present
  let isDatePresent = false
  for (let i = 0; i < oldItems.length; i++) {
    const item = oldItems[i]
    if (item.date === date) {
      item.score = newItem.score
      item.updateCount++
      newItem.updateCount = item.updateCount
      isDatePresent = true
      break
    }
  }
  if (!isDatePresent) {
    oldItems.push(newItem)
  }
  pushScoreToDatabase(email, newItem) // DB call

  // update browser cache
  localStorage.setItem(email, JSON.stringify(oldItems))
}

const get = (name: string, date: string) => {
  // @ts-ignore
  const scoreObj: ScoreItem[] = JSON.parse(localStorage.getItem(name))
  if (scoreObj) {
    scoreObj.forEach(element => {
      if (element.date === date) {
        return element.score
      }
    })
  }
  return 0
}

/**
 * TODO: implement server side cache to prevent database call
 * @param email
 */
const getAllItems = (email: string): Array<ScoreItem> => {
  let scoreItems: ScoreItem[] = []

  /**
  // @ts-ignore
  const items: ScoreItem[] = JSON.parse(localStorage.getItem(email)) || []

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const scoreItemObj = new ScoreItem(item.date, item.score, item.updateCount)
    scoreItems.push(scoreItemObj)
  }
*/
  // TODO: only this should be called in ScoreHistoryTable,
  scoreItems = getAllRecords(email)

  return scoreItems
}
/**
 *
 * @returns return registered user names
 */
const getNames = () => {
  const names = Object.keys(localStorage) || []
  return names
}

export { put, get, getNames, getAllItems }
