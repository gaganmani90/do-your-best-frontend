export class ScoreItem {
    date: string;
    score: number;
    updateCount: number;
    timestamp: Date | undefined;
    note: string;

    constructor (date: string, score: number, updateCount: number, timestamp?: Date) {
      this.date = date
      this.score = score // most recent score
      this.updateCount = updateCount // the times score is updated on this date
      this.timestamp = timestamp
      this.note = 'Empty'
    }
}
