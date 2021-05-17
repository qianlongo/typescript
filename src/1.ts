interface Person {
  firstName: string;
  lastName: string 
}

const a = (person: Person) => {
  console.log(person)
}

a({
  firstName: 'qianlongo',
  lastName: 'qianlongo2'
})

