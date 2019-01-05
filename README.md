# bandersnatch-engine
Create your own adventure game

This repo will be used to design and create the Bandersnatch game engine which will allow the bandersntach community to collectivly create the Bandersnatch 1984 game.

1.0 GOALS

Create a web based solution that allows users to decision points and observations and allow the community to upvote/downvote their facorite nodes.

Definitions

Coder - a Bandersnatch engine creator
User - a Bandersnatch engine user which designs builds and creates the Bandersnatch 1984 game.
Player - a Bandersnatch 1984 player  

A node is one of the following

1. Decision
2. Observation

A decision will have one or more images and exactly two decisions. Players may use left or right arrows, their mouse, or touch screen to select their choice. If more than one image is uploaded then a simple animation transition will occur. Its up to the user to ensure these images make sense. The idea is to upload similar images such that a transition will look like a cheesy animation. A player will have 10 seconds to choose.

An observation will have one or more images, text. A player may hit the spacebar, tap the screen to continue or wait 10 seconds to continue.

A decision may be followed by 0 or more decisons or 0 or more observations. likewise an observation may be followed by 0 or more decisions or 0 or more observations.

JSON example

DECISION

{
images: [],
header: "",
decisions: {0:"",path:nodeId,1:"",path:nodeId},
}

OBSERVATION

{
images: [],
header: "",
decisions: nodeId,
}

In the database the decision and the observation will be the same object: a node. The difference is whether or not a player can make a choice and go down a different path.

The engine UI will

License GPL 3. Any Derivative Work must be released under the GPL 3.0 and the following:

THIS OR ANY DERIVATIVE WORK MAY NOT BE USED FOR COMMERCIAL PURPOSES. ANY DERIVATIVE WORK MUST ALSO CONTAIN THIS NON COMMERCIAL USE LICENSE REQUIREMENT.
