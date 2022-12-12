import fs from 'fs'

const input = fs.readFileSync('./day7/input.txt').toString().split('\n')

class Directory {
  name
  files: File[] = []
  dirs: Directory[] = []
  parent?
  constructor(dir: string, parent?: Directory) {
    this.name = dir
    this.parent = parent
  }
  addFile(nameAndSize: string) {
    this.files.push(new File(nameAndSize))
  }
  addDir(dir: string) {
    this.dirs.push(new Directory(dir, this))
  }
  totalSize() {
    this.files.map(f => f)
  }

}
class File {
  name
  size
  constructor(nameAndSize: string) {
    this.name = nameAndSize.split(' ')[1]
    this.size = Number.parseInt(nameAndSize.split(' ')[0])
  }
}

const root = new Directory('/')





function commandParser(
  input: string[],
  currentLine: number,
  pwd: Directory = root
): void {

  if (!input[currentLine]) {
    console.log('Finished parsing file. Results below:')
    // displayResults()
    return
  }
  if (input[currentLine].startsWith('$ cd /')) {
    return commandParser(input, currentLine + 1, pwd)
  }
  if (input[currentLine].startsWith('$ ls')) return commandParser(input, currentLine + 1, pwd)
  if (input[currentLine].startsWith('dir')) {
    pwd.addDir(input[currentLine])
    return commandParser(input, currentLine + 1, pwd)
  }
  if (/^\d/.test(input[currentLine])) { //regex check if first char in string is a number
    pwd.addFile(input[currentLine])
    return commandParser(input, currentLine + 1, pwd)
  }
  if (input[currentLine].startsWith('$ cd ..')) {
    return commandParser(input, currentLine + 1, pwd.parent)
  }
  if (input[currentLine].startsWith('$ cd')) {
    return commandParser(input, currentLine + 1, pwd.dirs.find(d => d.name === input[currentLine].split(' ')[1]))
  }


}

function displayResults() {
  throw new Error('Function not implemented.')
}

commandParser(input, 0, root)

console.log(root) //?