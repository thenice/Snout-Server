var userSchema = new Schema({
    id: ObjectId,
    username: String,
    password: String,
    email_address: String,
    visited_points: [{ type: Schema.ObjectId, ref: 'Point' }],
    devices: [{ type: Schema.ObjectId, ref: 'Device' }],
    state: String,
    updated_at: {type: Date, default: Date.now},
    created_at: {type: Date, default: Date.now}
});

// Instance Methods
_.extend(userSchema.methods, {
});

// Static Methods
_.extend(userSchema.statics, {
});

module.exports = mongoose.model('User', userSchema);