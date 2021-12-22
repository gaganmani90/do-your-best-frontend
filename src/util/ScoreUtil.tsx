import { getAllItems } from '../persistence/ScoreCache'

export const bestScore = (email: string) : number => {
  const scoreItems = getAllItems(email)
  let bestScore = 0
  for (let i = 0; i < scoreItems.length; i++) {
    bestScore = Math.max(bestScore, scoreItems[i].score)
  }
  return bestScore
}

export const totalEntries = (email: string) : number => {
  const scoreItems = getAllItems(email)
  let total = 0
  for (let i = 0; i < scoreItems.length; i++) {
    total += scoreItems[i].updateCount
  }
  return total
}
