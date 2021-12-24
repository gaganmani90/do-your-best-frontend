import { ScoreItem } from '../model/ScoreItem'
import { getAllScoreItems, pushScore } from './ScoreCollection'

/**
 * Inserts an entry into database. This should execute when user submitted their score
 * @param email
 * @param date
 * @param score
 */
const put = (email: string, date: string, score: number) => {
  // @ts-ignore
  const oldItems: ScoreItem[] = JSON.parse(localStorage.getItem(email)) || []

  const newItem = new ScoreItem(date, score, 1, new Date())
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
  pushScore(email, newItem) // DB call

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

const getAllItems = (email: string) => {
  const scoreItems = []

  // @ts-ignore
  const items: ScoreItem[] = JSON.parse(localStorage.getItem(email)) || []

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const scoreItemObj = new ScoreItem(item.date, item.score, item.updateCount)
    scoreItems.push(scoreItemObj)
  }

  // TODO: only this should be called in ScoreHistoryTable,
  getAllScoreItems(email)

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
