import { Router } from 'express'
import * as skillDb from '../data/skill.db.js'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

export { 
  router
}
