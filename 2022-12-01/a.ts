export const x = ""

import fs from 'fs'

//part 1
const input: string = fs.readFileSync('./2022-12-01/input.txt', 'utf-8').toString() // ?

const split = input.split('\n\n') //?


const splitSplit = split.map(elf => elf.split('\n'))

const toNumb = splitSplit.map(elf => elf.map(food => Number.parseInt(food))).map(e => e.reduce((a, b) => a + b)) //?

Math.max(...toNumb) //?

// part 2

const sorted = toNumb.sort((a, b) => a - b) //?

const topThreeElves = sorted.slice(-3).reduce((a, b) => a + b) //?