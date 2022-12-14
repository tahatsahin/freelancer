import Project from './../models/Project.js';

const getIndexPage = async (req, res) => {
	const projects = await Project.find();

	res.status(200).render('index', {
		pageName: 'index',
		projects,
	});
};

const createProject = async (req, res) => {
	const project = Project.create({
		name: req.body.projectname,
		description: req.body.projectdescription,
		link: req.body.projectimage,
	});
	res.status(201).redirect('/');
};

export default {
	getIndexPage,
	createProject,
};
