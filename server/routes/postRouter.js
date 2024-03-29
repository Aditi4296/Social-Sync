const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const auth = require('../middleware/auth')


router.post('/posts', auth, postCtrl.createPost)
router.get('/posts', auth, postCtrl.getPosts)
router.patch('/post/:id', auth, postCtrl.updatePost).get('/post/:id', auth, postCtrl.getPost).delete('/post/:id', auth, postCtrl.deletePost)
router.patch('/post/:id/like', auth, postCtrl.likePost)
router.patch('/post/:id/unlike', auth, postCtrl.unLikePost)
router.get('/user_posts/:id', auth, postCtrl.getUserPosts)
router.get('/post_discover', auth, postCtrl.getPostsDicover)
router.patch('/savePost/:id', auth, postCtrl.savePost)
router.patch('/unSavePost/:id', auth, postCtrl.unSavePost)
router.get('/getSavePosts', auth, postCtrl.getSavePosts)

// router.route('/posts').post(auth, postCtrl.createPost)

// router.route('/post/:id').patch(auth, postCtrl.updatePost)

module.exports = router