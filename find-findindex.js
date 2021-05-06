/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val){
   return val.username === username; 
  }) 
}

findUserByUsername(users, 'mlewis') // {username: 'mlewis'})

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/



const users2 = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function removeUser(usersArray, username) {
  let findIndx = usersArray.findIndex(function(val){
    return val.username === username;
  });
  if(findIndx === -1) {
    return;
  } else {return usersArray.splice(findIndx, 1)[0]};
}

removeUser(users2, 'akagen') // {username: 'akagen'})
removeUser(users2, 'akagen') // {username: 'akagen'})
