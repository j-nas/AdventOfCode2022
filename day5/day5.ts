import fs from 'fs'

const input: string[] = fs
  .readFileSync('./day5/input.txt')
  .toString()
  .split('\r\n')
const labelLine = input.findIndex(i => i.startsWith(" 1"))
const instructions = input.slice(labelLine + 2)

const crates = [
  ['D', 'L', 'V', 'T', 'M', 'H', 'F', ' '],
  ['H', 'Q', 'G', 'J', 'C', 'T', 'N', 'P'],
  ['R', 'S', 'D', 'M', 'P', 'H', ' ', ' '],
  ['L', 'B', 'V', 'F', ' ', ' ', ' ', ' '],
  ['N', 'H', 'G', 'L', 'Q', ' ', ' ', ' '],
  ['W', 'B', 'D', 'G', 'R', 'M', 'P', ' '],
  ['G', 'M', 'N', 'R', 'C', 'H', 'L', 'Q'],
  ['C', 'L', 'W', ' ', ' ', ' ', ' ', ' '],
  ['R', 'D', 'L', 'Q', 'J', 'Z', 'M', 'T'],
]


moveCrates(instructions) //?


function moveCrates(instructions: string[]) {
  for (let i = 0; i < instructions.length; i++) {
    const moveNumber = Number(instructions[i].split(' ')[1])
    const originStack = Number(instructions[i].split(' ')[3]) - 1
    const destinationStack = Number(instructions[i].split(' ')[5]) - 1

    for (let j = 0; j < moveNumber; j++) {
      let crane: any = ""
      crane = crates[originStack].pop()
      crates[destinationStack].push(crane)

    }

  }
}


console.log(crates)