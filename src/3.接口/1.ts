// 1. 接口
interface LabelledValue {
  label: string
}

function printLabel (labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

printLabel({
  label: '1'
})

// 2. 可选属性
interface SquareConfig {
  color?: string,
  width?: number
}

interface Point {
  readonly x: number,
  readonly y: number
}

const createSquare = (config: SquareConfig) : {
  color: string,
  area: number
} => {
  return {
    color: 'red',
    area: 1
  }
}

createSquare({
  color: 'red',
  width: 12
})