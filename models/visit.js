var visitSchema = new Schema({
    id: ObjectId,
    longitude: Number,
    latitude: Number,
    visitor: { type: Schema.ObjectId, ref: 'User' },
    point: { type: Schema.ObjectId, ref: 'Point' },
    visited_at: {type: Date, default: Date.now}
});

// Instance Methods
_.extend(visitSchema.methods, {
});

// Static Methods
_.extend(visitSchema.statics, {
});

module.exports = mongoose.model('Visit', visitSchema);