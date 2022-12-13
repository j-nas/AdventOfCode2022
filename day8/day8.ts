import fs from 'fs'
import { isPromise } from 'util/types'

const rawInput = fs.readFileSync('day8/input.txt')
  .toString()
  .split('\n')
  .map((line) => line.split(''))

const input = rawInput.map((line) => line.map((char) => parseInt(char)))
input


const width = input[0].length //?
const height = input.length //?



const isTreeVisible = (x: number, y: number) => {
  // if (x === 0 || y === 0 || x === input.length - 1 || y === input[0].length - 1) return true
  const currentTree = input[x][y]
  function checkUp(currentTree: number, increment: number): boolean {
    if (!input[x - increment * width]) return true
    if (input[x - increment * width][y] < currentTree) return false
    else {
      return checkUp(currentTree, increment + 1)
    }
  }
  function checkDown(currentTree: number, increment: number): boolean {
    if (!input[x + increment * width]) return true
    if (input[x + increment * width][y] < currentTree) return false
    else {
      return checkDown(currentTree, increment + 1)
    }
  }
  function checkLeft(currentTree: number, increment: number): boolean {
    if (!input[x][y - increment]) return true
    if (input[x][y - increment] < currentTree) return false
    else {
      return checkLeft(currentTree, increment + 1)
    }
  }
  function checkRight(currentTree: number, increment: number): boolean {
    if (!input[x][y + increment]) return true
    if (input[x][y + increment] < currentTree) return false
    else {
      return checkRight(currentTree, increment + 1)
    }
  }
  if (
    checkUp(currentTree, 1) &&
    checkDown(currentTree, 1) &&
    checkLeft(currentTree, 1) &&
    checkRight(currentTree, 1)
  ) return true
  else return false



}
let totalTrees = 0
let visibleTrees = 0
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    totalTrees++
    if (isTreeVisible(i, j)) {

      visibleTrees++
    }
  }
}

visibleTrees //?
totalTrees //?