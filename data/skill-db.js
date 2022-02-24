const skills = [
  {text: 'JavaScript', learned: true, _id: 120000},
  {text: 'CSS Grid', learned: true, _id: 120001},
  {text: 'HTML', learned: true, _id: 120002},
  {text: 'Python', learned: false, _id: 120003}
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}