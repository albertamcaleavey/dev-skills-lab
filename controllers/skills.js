import * as skillDb from '../data/skill-db.js'

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  // creates a new skill in the "database", passing in the new skill (text entered) and redirect function
  skillDb.create(req.body, function(error, todo) {
    // redirects to list of skills page to see newly create skill
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkill as new,
  create
}