import fs from 'fs'

const input = fs.readFileSync('./day6/input.txt').toString()

//day 1
for (let i = 0; i < input.length; i++) {
  const currentSection = [...new Set(input.slice(i, i + 4))]
  if (currentSection.length === 4) {
    console.log(i + 4, currentSection)
    break
  }
}

//day 2

for (let i = 0; i < input.length; i++) {
  const currentSection = [...new Set(input.slice(i, i + 14))]
  if (currentSection.length === 14) {
    console.log(i + 14, currentSection)
    break
  }
}