
var nodes = [];
var root = null;
var topChild = null;

$.get( "https://www.reddit.com/r/Bandersnatch/comments/ad7cbr/bandersnatch_game_engine_test_1/search.json", function( data ) {
  window.data = data;
  _.each(data[1].data.children, function(c){

    try{
      var obj = JSON.parse(c.data.body);
      obj.replies = c.data.replies.data.children;
    nodes.push(obj);
    } catch(ex){}
    });
  
  root = _.find(nodes, function(node){return node.nodeId == 'root'})
  
  
  _.each(root.replies, function(child){
child=child.data;
    try{
        if(topChild==null) topChild = child;
else if (topChild.score < child.score) topChild = topChild
      topChild = JSON.parse(topChild.data.body)

    } catch(ex){}
    });
  
  

});
