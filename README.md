# :heartpulse: Waifu Finder
#### Created: December 2019
---

## ABOUT WAIFU FINDER

What is a *waifu*? Well, if you are part of the anime culture, then you know that "waifu" is a term commonly used to describe a character, usually female, that one has an affinity to. In this app you will rate a series a statements, from 1 to 5, with 1 being something you strongly disagree with and 5 being something you strongly agree with. Once all the statements have been rated, you will be matched with your perfect waifu!

Waifu Finder is a full stack node app deployed on [Heroku](http://www.heroku.com). The deployed app demo can be found [here](https://guarded-earth-21570.herokuapp.com/). The data, which is an array of objects, is stored in a file, not a database. **Express** is used to operate and configure the serve, while **Body-Parser** is used to pass JSON data between files and functions. Multiple routes are set up to view the homepage, survey, and JSON API. Bootstrap is used for the general styling.

---

## SITE PREVIEW
### The Homepage
When the user accesses the page, the following will appear:
![alt text](https://raw.githubusercontent.com/bessygmartinez/WaifuFinder/master/app/img/homepage_thumb.jpg "Waifu Finder Homepage")

### The Survey
After clicking on "Take Survey," the user will be taken to the survey page:
![alt text](https://raw.githubusercontent.com/bessygmartinez/WaifuFinder/master/app/img/survey_thumb.jpg "Waifu Finder Survey")

### The Result
Once all statements have been ranked by the user, they will get their result in a modal:
![alt text](https://raw.githubusercontent.com/bessygmartinez/WaifuFinder/master/app/img/result_thumb.jpg "Waifu Finder Result")

### Incomplete Survey
If the user does not completely fill out the survey, a modal will pop up to notify them the survey is incomplete:
![alt text](https://raw.githubusercontent.com/bessygmartinez/WaifuFinder/master/app/img/incompletesurvey_thumb.jpg "Waifu Finder Incomplete Survey Notification")

---

## TECHNOLOGIES USED
  * [JavaScript](https://www.javascript.com/)
  * [Node.js](https://nodejs.org/en/)
      * Node packages:
        * [express](https://www.npmjs.com/package/express)
  * [Bootstrap](https://getbootstrap.com/)
  * [Heroku](http://www.heroku.com)
