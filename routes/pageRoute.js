import express from 'express';
import pageController from './../controllers/pageController.js';

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/').post(pageController.createProject);

export default {
	router,
};
