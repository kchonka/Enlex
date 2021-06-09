# Project To-Do List

## To-Do:
- [ ] Review React Component Life Cycle
- [ ] Add section/component to render the news articles pulled from the API
- [ ] Fix top navbar 
- [ ] Error handling for bad requests
- [ ] componentDidMount for request handling
- [ ] Putting the same function in componentDidMount & componentDidUpdate (?)
- [ ] 'ud' language code?
- [ ] Including 'en' English language code --> redundant?
- [ ] Add event handler for SideBar; changing the category is reflected in Learn
- [ ] Move inline styles to .css files for cleanup
- [ ] Use a loop to display all articles on the Learn page
- [ ] Edit Home Page
- [ ] Edit About Page 
- [ ] How to make page longer/scrollable in the case of more articles that extend the page?
- [ ] Edit the Tile component to fit information to screen better

# Done:
- [x] Use Axios Library for API requests
- [x] Update the value of the language to use the ISO-639 language code instead of the English word
- [x] Update avaliable languages in Learn.js to the ones provided by the API
- [x] Update sidebar with avaliable categories from the API
- [x] Got rid of infinite loop on language change in Learn --> updated componentDidUpdate() properly
- [x] Created an Articles component to display all the articles/tiles on the Learn page
- [x] Used map function to render a list of Tile components with articles
