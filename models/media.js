var mediaSchema = new Schema({
    id: ObjectId,
    visit: { type: Schema.ObjectId, ref: 'Visit' },
    point: { type: Schema.ObjectId, ref: 'Point' },
    path: String,
    file_type: String,
    updated_at: {type: Date, default: Date.now},
    created_at: {type: Date, default: Date.now}
});

// Instance Methods
_.extend(mediaSchema.methods, {
});

// Static Methods
_.extend(mediaSchema.statics, {
});

module.exports = mongoose.model('Media', mediaSchema);