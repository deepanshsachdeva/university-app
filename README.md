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
* (Optional) Edit `models/db.js` to change default values.

## Run
run `npm start` or `node index.js` in app root directory

## Notes
* Edit default values in `models/db.js` accordingly to connect database.
* To run app in nodemon execute using command `npm run dev`
