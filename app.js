
var nodes = [];
var root = null;
var topChild = null;
var universe = getURLParam('universe',location.search)
var currentNode = getURLParam('node',location.search)

$.get( "https://www.reddit.com/r/Bandersnatch/comments/" + universe +".json", function( data ) {
  window.data = data;
  _.each(data[1].data.children, function(c){

    try{
      var obj = JSON.parse(c.data.body);
      obj.replies = c.data.replies.data.children;
    nodes.push(obj);
    } catch(ex){}
    });
  
  if(currentNode == null)
    currentNode = _.find(nodes, function(node){return node.nodeId == 'root'})
  else
    currentNode = _.find(nodes, function(node){return node.nodeId.toLowerCase() == currentNode.toLowerCase()})
  
  
  _.each(root.replies, function(child){
child=child.data;
    try{
        if(topChild==null) topChild = child;
else if (topChild.score < child.score) topChild = topChild
      topChild = JSON.parse(topChild.body)

    } catch(ex){}
    });
  
  

});



function getURLParam(key,target){
    var values = [];
    if (!target) target = location.href;

    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

    var pattern = key + '=([^&#]+)';
    var o_reg = new RegExp(pattern,'ig');
    while (true){
        var matches = o_reg.exec(target);
        if (matches && matches[1]){
            values.push(matches[1]);
        } else {
            break;
        }
    }

    if (!values.length){
        return null;   
    } else {
        return values.length == 1 ? values[0] : values;
    }
}
