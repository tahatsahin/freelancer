import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const ProjectSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	link: {
		type: String,
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	createdBy: {
		type: String,
		default: 'Taha Sahin',
	},
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
