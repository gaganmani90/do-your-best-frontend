import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
/**
 * Daily metadata for persistence
 */
export class ScoreItem {
    date: string;
    score: number;
    updateCount: number;
    timestamp: String | undefined;
    note: string;

    constructor (date: string, score: number, updateCount: number, timestamp?: String) {
      this.date = date
      this.score = score // most recent score
      this.updateCount = updateCount // the times score is updated on this date
      this.timestamp = String(timestamp)
      this.note = 'Empty'
    }

    public static mockItem (): ScoreItem {
      return new ScoreItem('20/10/1988', 100, 1, String(new Date()))
    }
}

export const itemConverter = {
  toFirestore (item: ScoreItem): DocumentData {
    return {
      date: item.date,
      score: item.score,
      note: item.note,
      timestamp: item.timestamp,
      updateCount: item.updateCount
    }
  },
  fromFirestore (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ScoreItem {
    const data = snapshot.data(options)!
    return new ScoreItem(data.date, data.score, data.updateCount, data.timestamp)
  }
}
