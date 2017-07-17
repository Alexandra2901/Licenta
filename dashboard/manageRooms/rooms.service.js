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
},
{
id: 3,
name: "Room 3",
type: "Single",
bath: "Yes"
},
{
id: 4,
name: "Room 4",
type: "Double",
bath: "Yes"
},
{
id: 5,
name: "Room 5",
type: "Single",
bath: "Yes"
},
{
id: 6,
name: "Room 6",
type: "Single",
bath: "No"
},
{
id: 7,
name: "Room 7",
type: "Double",
bath: "No"
},
{
id: 8,
name: "Room 8",
type: "Double",
bath: "Yes"
},
{
id: 9,
name: "Room 9",
type: "Triple",
bath: "No"
},
{
id: 10,
name: "Room 10",
type: "Triple",
bath: "Yes"
}
];

roomsObject.addRoom = function(room) {
     if(room.id) {
       roomsObject.remove(room);
     }
     else {
      room.id = roomsObject.rooms[roomsObject.rooms.length-1].id +1;
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
