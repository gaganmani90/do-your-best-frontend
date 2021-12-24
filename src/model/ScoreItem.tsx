export class ScoreItem {
    date: string;
    score: number;
    updateCount: number;
    timestamp: string;
    note: string;

    constructor (date: string, score: number, updateCount: number, timestamp: string) {
      this.date = date
      this.score = score // most recent score
      this.updateCount = updateCount // the times score is updated on this date
      this.timestamp = JSON.stringify(timestamp)
      this.note = 'Empty'
    }
}

export default ScoreItem
