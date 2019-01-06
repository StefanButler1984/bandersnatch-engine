
var nodes = [];
var root = null;
var universe = getURLParam('universe',location.search)
var currentNode = getURLParam('node',location.search)

if(universe == null)
  universe = 'ad7cbr'

$.get( "https://www.reddit.com/r/Bandersnatch/comments/" + universe +".json", function( data ) {
  window.data = data;
  _.each(data[1].data.children, function(c){

    try{
      var obj = JSON.parse(c.data.body);
      if(typeof c.data.replies.data !== 'undefined')
        obj.replies = c.data.replies.data.children;
    nodes.push(obj);
    } catch(ex){}
    });
  
  if(currentNode == null)
    currentNode = _.find(nodes, function(node){return node.nodeId == 'root'})
  else
    currentNode = _.find(nodes, function(node){return node.nodeId.toLowerCase() == currentNode.toLowerCase()})
  
  currentNode.topChild = null;
  
  _.each(currentNode.replies, function(child){
child=child.data;
    try{
        if(currentNode.topChild==null) currentNode.topChild = child;
else if (currentNode.topChild.score < child.score) currentNode.topChild = child
      
      currentNode.topChild = JSON.parse(currentNode.topChild.body)

    } catch(ex){}
    });
  
  
$('.stretch').attr('src', currentNode.images[0])
  
  $('#header').html(currentNode.header);
  
  if(currentNode.topChild != null)
  {
    
    $('#zero').html('<a href="choice(0)">' + currentNode.decisions[0] + '</a>');
    $('#one').html('<a href="choice(1)">' + currentNode.decisions[1] + '</a>');

  }
  

});

function choice(c){
location.href = location.host + "/?universe=" + universe + "&node=" + currentNode.decisions[c]

}

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
