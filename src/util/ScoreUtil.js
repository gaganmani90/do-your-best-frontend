import { getAllItems } from "../persistence/ScoreCache";

export const bestScore = () => {
    var scoreItems = getAllItems();
    var bestScore = 0
    for (let i = 0; i < scoreItems.length; i++) {
        bestScore = Math.max(bestScore, scoreItems[i].score)
    }
    return bestScore;
}

export const totalEntries = () => {
    var scoreItems = getAllItems();
    var total = 0
    for (let i = 0; i < scoreItems.length; i++) {
        total += scoreItems[i].updateCount
    }
    return total;
}