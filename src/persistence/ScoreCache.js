import ScoreItem from '../model/ScoreItem'
import { getAllScoreItems, pushScore } from './ScoreCollection'

const put = (name, date, score) => {
  const oldItems = JSON.parse(localStorage.getItem(name)) || []

  const newItem = new ScoreItem(date, parseInt(score), 1, new Date())
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
  pushScore(name, newItem) // DB call

  localStorage.setItem(name, JSON.stringify(oldItems))
}

const get = (name, date) => {
  const scoreObj = JSON.parse(localStorage.getItem(name))
  if (scoreObj) {
    scoreObj.array.forEach(element => {
      if (element.date === date) {
        return element.score
      }
    })
  }
  return 0
}

const getAllItems = (email) => {
  const scoreItems = []

  const items = JSON.parse(localStorage.getItem(email)) || []

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
