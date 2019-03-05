module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ProjectSchema = new Schema({
        name: { type: String },
        root: { type: String },
        note: { type: String },
        rules: [{ api: String, name: String, type: String, params: String, update_time: Date, create_time: Date, enable: Boolean }], //{type: Array},
        create_time: { type: Date },
        update_time: { type: Date }
    });
    return mongoose.model('Project', ProjectSchema);
};
