var pointSchema = new Schema({
    id: ObjectId,
    tag_id: String,
    title: String,
    description: String,
    creator: { type: Schema.ObjectId, ref: 'User' },
    state: String,
    media: [{ type: Schema.ObjectId, ref: 'Media' }],
    visitors: [{ type: Schema.ObjectId, ref: 'User' }],
    updated_at: {type: Date, default: Date.now},
    created_at: {type: Date, default: Date.now}
});

// Instance Methods
_.extend(pointSchema.methods, {
   logTitle : function() {
      console.log("User loaded: " + this.title)
   }
});

// Static Methods
_.extend(pointSchema.statics, {
   eat : function() {
      console.log("Yum Yum");
   }
});

module.exports = mongoose.model('Point', pointSchema);