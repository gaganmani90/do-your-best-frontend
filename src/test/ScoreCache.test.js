import {get, put} from "../persistence/ScoreCache"

beforeEach(() => {
    localStorage.clear()
  });

  afterEach(() => {
    localStorage.clear()
  });
  
  
test(' successful', () => {
    let DATE = "1/1/2021";
    let NAME = "GaganTest"
    let SCORE = 50;
    put(NAME, DATE, SCORE)
    
    expect(get(NAME, DATE)).toBe(SCORE)
});