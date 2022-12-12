
import fs, { Dir } from 'fs'

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
  sizeOfFiles() {
    return this.files.reduce((acc, file) => acc + file.size, 0)
  }
  sizeOfDirs(): number {
    return this.dirs.reduce((acc, dir) => acc + dir.totalSize(), 0)
  }
  totalSize(): number {
    return this.sizeOfFiles() + this.sizeOfDirs()
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
    return
  }
  if (input[currentLine].startsWith('$ cd /')) {
    return commandParser(input, currentLine + 1, pwd)
  }
  if (input[currentLine].startsWith('$ ls')) return commandParser(input, currentLine + 1, pwd)
  if (input[currentLine].startsWith('dir')) {
    pwd.addDir(input[currentLine].split(' ')[1])
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
    return commandParser(input, currentLine + 1, pwd.dirs.find(d => d.name === input[currentLine].split(' ')[2]))
  }

}



commandParser(input, 0, root)




function sizeOfDirsUnderOneHundredKiloBytes(dir: Directory): number {
  const dirs: Directory[] = []
  function findDirectoriesUnderOneHundredKiloBytes(dir: Directory) {
    if (dir.totalSize() <= 100000) {
      dirs.push(dir)
    }
    dir.dirs.forEach(dir => findDirectoriesUnderOneHundredKiloBytes(dir))
  }
  findDirectoriesUnderOneHundredKiloBytes(dir)

  return dirs.reduce((acc, dir) => acc + dir.totalSize(), 0)
}

const capacity = 70000000
const totalSize = root.totalSize()
const freeSpace = capacity - totalSize //?
const spaceRequired = 30000000
const spaceToFree = spaceRequired - freeSpace //? 

// find smallest directory to delete to free enough space required

function findSmallestDir(dir: Directory): Directory {
  let smallestDir: Directory[] = []

  function insideRecursion(dir: Directory) {
    if (dir.totalSize() >= spaceToFree) {
      smallestDir.push(dir)
    }
    dir.dirs.forEach(dir => insideRecursion(dir))
  }
  insideRecursion(dir)
  smallestDir = smallestDir.sort((a, b) => a.totalSize() - b.totalSize())
  return smallestDir[0]
}


console.log(root.totalSize())

console.log("Part 1 result: " + sizeOfDirsUnderOneHundredKiloBytes(root))
console.log("Part 2 result: " + findSmallestDir(root).totalSize())