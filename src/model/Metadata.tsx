/**
 * Yearly/Monthly metadata to persist in db
 */
export class Metadata {
    totalEntries: number;
    avgScore: number;

    constructor (entries: number, avgScore: number) {
      this.totalEntries = entries
      this.avgScore = avgScore
    }
}
