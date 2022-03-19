// Code your solution here
let value = ''

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]

function findMatching(drivers, string){
    const name = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return name
}

function fuzzyMatch(drivers, string){
    const name = drivers.filter(driversName => driversName.startsWith(string))
    return name
}

function matchName(drivers, string){
    const results = drivers.filter(drivers => drivers.name === string)
    return results
}