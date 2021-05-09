const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
console.log(path.resolve('exercises/cli/contacts.json'))

const contactsLocation = path.resolve('exercises/cli/contacts.json')

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */

const getContacts = () => {
  const file = JSON.parse(fs.readFileSync(contactsLocation))
  return file;
}
  

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  console.log(contacts)
  fs.writeFileSync(contactsLocation,JSON.stringify(contacts))
  
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}
