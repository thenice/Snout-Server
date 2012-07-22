/*
 * Filename:      points_test.js
 * Description:   Tests for the Point model.
 * Authored:      Daniel Cohen, 7/20/12
 * Testing:       Point Model
 */
 
var   vows     =  require('vows'),
      assert   =  require('assert'),
      Point    =  models.Point;

vows.describe('Point').addBatch({
   
   'A Point': {
       
      'when registered': {
         topic: function() {
            point = new Point({
               tag_id: "1234",
               title: "My new Point",
               description: "A fun point" 
            });
            point.save();
            return point;
         },

         'tag id must be saved': function (topic) {
            assert.equal(point.tag_id, "1234");
         }
      },
        
      'when deleted': {
         topic: [1,2,3],

         'has a length of 0': function (topic) {
            assert.equal(topic.length, 0);
         },
         
         'returns *undefined*, when `pop()`ed': function (topic) {
            assert.isUndefined(topic.pop());
         }
      },
        
      'when visited': {
         topic: [1,2,3],
         
         'has a length of 0': function (topic) {
            assert.equal(topic.length, 0);
         },
         
         'returns *undefined*, when `pop()`ed': function (topic) {
            assert.isUndefined(topic.pop());
         }
      },
      
      'when visited': {
         topic: [1,2,3],

         'has a length of 0': function (topic) {
            assert.equal(topic.length, 0);
         },
         
         'returns *undefined*, when `pop()`ed': function (topic) {
            assert.isUndefined(topic.pop());
         }
      }
    
    }
    
}).run();