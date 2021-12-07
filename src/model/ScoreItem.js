export class ScoreItem {
    constructor(date, score, updateCount, timestamp) {
        this.date = date;
        this.score = score; //most recent score
        this.updateCount = updateCount //the times score is updated on this date
        this.timestamp = JSON.stringify(timestamp)
        this.note = "Empty"
    }
}

export default ScoreItem
