const skills = [
  {text: 'JavaScript', description: 'A multi-paradigm, high level, interpreted, event-oriented programming language.', learned: true, _id: 120000},
  {text: 'CSS', description: 'CSS is a web technology used to format and style HTML documents and provides stylistic behaviors using CSS animations.', learned: true, _id: 1},
  {text: 'HTML', description: 'A markup language used to create the basic structure of documents on the Internet.', learned: true, _id: 2},
  {text: 'Python', description: 'Unknown', learned: false, _id: 3},
  {text: 'React', description: 'Unknown', learned: false, _id: 4}
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000
  // New todos wouldn't be done
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedTodo = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export {
  find,
  findById,
  create,
  findByIdAndDelete
}