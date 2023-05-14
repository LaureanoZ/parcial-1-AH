import { Router } from 'express'
import * as controllerProject from '../controllers/projects.api.controllers.js'
import * as controllerClient from '../controllers/clients.api.controllers.js'


const route = Router()

// projects
route.get('/data', controllerProject.getData)
route.post('/data', controllerProject.createProject)
route.put('/data/:idProject', controllerProject.replaceProject)
route.patch('/data/:idProject', controllerProject.updateProject)
route.delete('/data/:idProject', controllerProject.deleteProject)

// users
route.get('/client', controllerClient.getClient)
route.post('/client', controllerClient.createClient)


export default route