module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const RuleSchema = new Schema({
        api: String,
        name: String,
        type: String,
        params: String,
        update_time: Date,
        create_time: Date,
        enable: Boolean
    });

    const ProjectSchema = new Schema({
        name: { type: String },
        root: { type: String },
        note: { type: String },
        rules: [RuleSchema],
        create_time: { type: Date },
        update_time: { type: Date }
    });

    return mongoose.model('Project', ProjectSchema);
};
