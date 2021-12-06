export class ScoreItem {
    constructor(date, score, updateCount) {
        this.date = date;
        this.score = score; //most recent score
        this.updateCount = updateCount //the times score is updated on this date
    }
}

export default ScoreItem
