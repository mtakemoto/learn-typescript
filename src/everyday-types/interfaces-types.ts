// Types can be extended with an intersection
// Types also require *assignment* unlike interfaces
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

// Interfaces can be duplicated and extended, unlike types
interface Window {
  title: string
}

interface Window {
  count: number
}

type Fruit = {
  name: string
}

// Error: Duplicate identifier
// type Fruit = {
//   color: string
// }
