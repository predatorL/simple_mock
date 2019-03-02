module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ProjectSchema = new Schema({
        name: {type: String},
        root: {type: String},
        note: {type: String},
    });
    return mongoose.model('Project', ProjectSchema);
}