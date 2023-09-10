
var os = require("os");

console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());


written in JavaScript and uses the Node.js os module to retrieve various system-related information.

os.platform():
  This function returns a string representing the operating system platform on which the Node.js process is running.

os.totalmem(): 
  This function returns the total amount of system memory (RAM) in bytes. 
    It provides information about the total physical memory available on the system

os.freemem(): 
  This function returns the amount of free system memory (RAM) in bytes. 
    It tells you how much memory is currently available for use by your application.

os.cpus(): 
  This function returns an array of objects, each representing information about a CPU core on the system.

os.homedir(): 
  This function returns a string representing the home directory of the current user. 
    The home directory is the default location where user-specific files and configurations are stored. 

os.hostname(): 
  This function returns the hostname of the system. The hostname is the unique name by which a computer is known on a network. 
