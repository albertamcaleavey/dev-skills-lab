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

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id
  todo._id = Date.now() % 1000000
  // New todos wouldn't be done
  todo.done = false
  todos.push(skill)
  return callback(null, skill)
}

export {
  find,
  findById,
  create
}