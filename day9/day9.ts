import fs from 'fs'

const input = fs.readFileSync('day9/input.txt')
  .toString()
  .split('\n')

const instructions = input.map((line) => {
  const [instruction, value] = line.split(' ')
  return { instruction, value: parseInt(value) }
})

const rope = {
  head: {
    x: 0,
    y: 0,
  },
  tail: {
    x: 0,
    y: 0,
  },
}
const positionsVisited = new Set()

function checkIfAdjacent() {
  const { head, tail } = rope
  const xDiff = Math.abs(head.x - tail.x)
  const yDiff = Math.abs(head.y - tail.y)
  return xDiff + yDiff === 1
}

function moveHead(instruction: string) {
  const { head } = rope
  switch (instruction) {
    case 'U':
      head.y++
      break
    case 'D':
      head.y--
      break
    case 'R':
      head.x++
      break
    case 'L':
      head.x--
      break
  }
}

function moveTail() {
  if (checkIfAdjacent()) {
    return
  }
  const { tail, head } = rope
  tail.x = head.x
  tail.y = head.y

  positionsVisited.add(`${tail.x},${tail.y}`)
}

instructions.forEach(({ instruction, value }) => {
  for (let i = 0; i < value; i++) {
    moveTail()
    moveHead(instruction)
  }
})

console.log(positionsVisited.size)

