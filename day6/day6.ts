import fs from 'fs'

const input = fs.readFileSync('./day6/input.txt').toString()

for (let i = 0; i < input.length; i++) {
  const currentSection = [...new Set(input.slice(i, i + 4))]
  if (currentSection.length === 4) {
    console.log(i + 4, currentSection)
    break
  }
}