# You Sure?
When we get used to typing commands that can break stuff we tend to not think when typing them (think of all the times `sudo rm -rf` has messed you up)

You sure? Is an confirmation which changes its conformation each time to ensure you are thinking about what you are doing instead of just entering commands

# Installation
```javascript
const youSure = require('you-sure.js')
```


# Usage
```javascript
youSure("Are you sure you would like to delete everything?")
  .then(() => {
    console.log("Done been deleted");
  })
  .catch(() => {
    console.log("Yea, thats what I thought");
  })
  
// Are you sure you would like to delete everything? (y:156/n) 156
// Done been deleted
```
