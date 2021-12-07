import ScoreItem from "./model/ScoreItem";

const put = (name, date, score) => {
    var oldItems = JSON.parse(localStorage.getItem(name)) || [];

    var newItem = new ScoreItem(date, parseInt(score), 1, new Date())

    //check if date is already present
    var isDatePresent = false;
    for (let i = 0; i < oldItems.length; i++) {
        var item = oldItems[i];
        if (item.date == date) {
            item.score = newItem.score;
            item.updateCount++
            isDatePresent = true;
            break;
        }
    }
    if (!isDatePresent) {
        oldItems.push(newItem)
    }
    localStorage.setItem(name, JSON.stringify(oldItems));
}


const get = (name, date) => {
    var scoreObj = JSON.parse(localStorage.getItem(name));
    if (scoreObj) {
        scoreObj.array.forEach(element => {
            if (element.date == date) {
                return element.score;
            }
        });
    }
    return 0
}

const getAllItems = () => {
    var scoreItems = []
    
    var items = JSON.parse(localStorage.getItem("Gagan")) || []

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let scoreItemObj = new ScoreItem(item.date, item.score, item.updateCount)
        scoreItems.push(scoreItemObj)
    }

    return scoreItems;
}
/**
 * 
 * @returns return registered user names
 */
const getNames = () => {
    var names = Object.keys(localStorage) || [];
    return names
}



export { put, get, getNames, getAllItems }