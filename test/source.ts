let a = 5;
let b = 6;

export const add = (x: number, y: number) => x + y;
export const concat = (x: string, y: string) => x + y;

export class Hello {
  word: (x: number) => number = x => x;
}

if (a != b) console.log('not equal');