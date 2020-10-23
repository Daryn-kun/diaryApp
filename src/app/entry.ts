export class Entry {
  entryID: number
  entryTitle: string
  entryDate: number
  entryContents: string

  constructor(entryID: number, entryTitle: string, entryDate: number, entryContents: string) {
    this.entryID = entryID;
    this.entryTitle = entryTitle;
    this.entryDate = entryDate;
    this.entryContents = entryContents;
  }
}
