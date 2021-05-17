const isDone: boolean = false
const isNumber: number = 1
const isString: string = 'hello'
// number是数据类型，[]表示数组
const array: number[] = [ 1, 2 ]
const x: [ string, number ] = [ 'q', 2 ]
const y: any = 1
// 枚举
enum Color { Red, Green, Blue }

const c: Color = Color.Red

function create (o: object | null) {
  return o
}

create({
  name: '1'
})

create(null)

console.log(isDone)