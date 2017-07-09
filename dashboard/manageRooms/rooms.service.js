angular.module("graduationThesis").factory("RoomsFactory", function($rootScope) {

  var roomsObject = {};
  roomsObject.rooms = [{
    id: 1,
    name: "Room 1",
    type: "Double",
    bath: "Yes"
  },
{
  id: 2,
  name: "Room 2",
  type: "Triple",
  bath: "Yes"
}];

roomsObject.addRoom = function(room) {
     var ok = true;
     if(room.id) {
       roomsObject.remove(room);
     }
     else {
      room.id = roomsObject.rooms.length+1;
     }
    roomsObject.rooms.push(room);
 };

roomsObject.getAllRooms = function() {
     return roomsObject.rooms;
 };

roomsObject.remove = function(room) {
     console.log(room);
     var index = 0;
     for (var i = 0; i < roomsObject.rooms.length; i++) {
         if (roomsObject.rooms[i].id == room.id) {
             index = i;
             break;
         }
     }
     roomsObject.rooms.splice(index, 1);
 };

return roomsObject;

});
