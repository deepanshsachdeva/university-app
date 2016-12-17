# university-app

[Github Link](https://github.com/deepanshsachdeva/university-app)

The node application has 3 end points:
- **/adduniv**
  - GET: _renders template to display form for adding data to university model_
  - POST: _to send data to be inserted in university model_
- **/addcourse**
  - GET: _renders template to display form for adding data to course model_
  - POST: _to send data to be inserted in course model_
- **/display**
  - GET: _renders template to display universities & courses_
  
## Install
* Clone the repository using `git clone https://github.com/deepanshsachdeva/university-app` or download zip from github.
* Run `npm install` command in app root directory.

## Run
run `npm start` or `node index.js` in app root directory

## Notes
* App assumes the default mongod port i.e. 27017 for database connection. Make changes accordingly in models files.
* To run app in nodemon execute using command `npm dev`
