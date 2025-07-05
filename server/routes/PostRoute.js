import express from 'express'
import { createPost, getPost, getTimelinePosts, likePost, } from '../controllers/PostController.js'
const router = express.Router()

router.post('/',createPost)
router.get('/:id', getPost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)

export default router