angular.module("graduationThesis").factory("UsersFactory", function($rootScope) {

var usersObject = {};
usersObject.users = [{
  id: 1,
  email: "alex@gmail.com",
  password: "1224"
}];

usersObject.addUser = function(user) {
     if(user.id) {
       usersObject.remove(user);
     }
     else {
      user.id = usersObject.users[usersObject.users.length-1].id +1;
     }
    usersObject.users.push(user);
 };

usersObject.getAllUsers = function() {
     return usersObject.users;
 };

return usersObject;
});
