const bcrypt = require('bcrypt');
const saltRounds = 10;

const users = [
  {
    email: 'pablo@gmail.com',
    password: ''
  }
];

// Hash the password
bcrypt.hash('1pablo$a', saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
    return;
  }

  // Update the hashed password in the users array
  users[0].password = hash;
});

module.exports = users;