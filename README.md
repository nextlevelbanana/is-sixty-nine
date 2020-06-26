#Installation  
`npm install is-sixty-nine`

#Usage
`const isSixtyNine = require("is-sixty-nine");`

`if (isSixtyNine(val)) {//...}`

isSixtyNine returns false if the value is not 69,
or the conveniently truthy "nice" if it is.

Since we're embracing loose typing, the following values of 69 are accepted:
69 
"69"
"sixty nine" (case insensitive)
"sixty-nine" (case insensitive)
"LXIX"