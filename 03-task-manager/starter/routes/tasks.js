import { Router } from 'express'
const router = Router()

import { getAllTasks } from '../controllers/tasks.js'

router.route('/').get(getAllTasks)


export default router