// EXPLANATION: the vue instance is an object that Vue provides us with. It controls the whole part or certain part/parts of our app. Inside the instance we pass data, methods, objects to describe how the instance is going to control the app
new Vue({
  // EXPLANATION: the "el" property in the instance object is a string that controls an element on the page. In this case, "el", i.e this view instance controls the root element (#vue-app) in the HTML file
  //EXAMPLE:
  el: '#vue-app',

  // EXPLANATION: the data property in the instance object, is an object where we store our data for this Vue instance
  //EXAMPLE: below I stored the string "Jime" and the property name and I outpued it inside <div id="vue-app"> in the html file
  data: {
    name: 'Jime',
  },
});
