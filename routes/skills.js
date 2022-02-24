import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
// route to controller function that renders a view of all skills
router.get('/', skillsCtrl.index)
// route to controller function that renders a view of the enter new skill page
router.get('/new', skillsCtrl.new)
// route to controller function that renders a view of each skill
router.get('/:id', skillsCtrl.show)
// route to function that creates a new skill
router.post('/', skillsCtrl.create)

export {
  router
}
