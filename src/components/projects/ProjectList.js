const projects = [
  {
    name: "ParkBrowser",
    intro:
      "Get information, latest updates, pictures, and log visits for your favorite national parks and monuments",
    info: [
      "Constructed frontend using react and redux with bootstrap for an intuitive and fluid user experience",
      "Built backend with ruby on rails, using National Park Services and Flickr APIs to parse and gather relevant information",
      "Led and built prototype with group and refactored rails controllers, serializer and react components ",
      "Utilized JWT Web Tokens and localStorage to store encrypted user information client-side"
    ],
    githubFront: "https://github.com/hanxu27/mod5-frontend",
    githubBack: "https://github.com/hanxu27/mod5-backend",
    site: "https://park-browser-29cd5.firebaseapp.com/",
    demo: "https://youtu.be/h-28VkOhv-o",
    embed: "https://www.youtube.com/embed/h-28VkOhv-o",
    image: "ParkBrowser.png",
    gif: "ParkBrowser.gif"
  },
  {
    name: "Volleyball Stats",
    intro: "Stats tracker for developing strategies and making in game adjustments",
    info: [
      "Used KonvaJS and JavaScript to allow users to record directional and positional data",
      "Automated player action types and outcomes through positional and directional information",
      "Developed backend using ruby on rails with endpoints for actions, players, and games",
      "Implemented filters for data analysis for action types and outcomes for each team and player"
    ],
    github: "https://github.com/hanxu27/mod-3-project",
    site: "https://volleyball-stats-c7bd7.firebaseapp.com/",
    demo: "https://youtu.be/lQH4BPPdSug",
    embed: "https://www.youtube.com/embed/lQH4BPPdSug",
    image: "VolleyballStats.png",
    gif: "VolleyballStats.gif"
  },
  {
    name: "VB Tryouts",
    intro:
      "Integrating the sign up, check in, and evaluation processes for club admins and coaches",
    info: [
      "Planned and built the database architecture for information tracking through all three phrases for each player",
      "Developed model methods in through ActiveRecord for signing in and tryout evaluation",
      "Implemented authorization and authentication for players and coaches with ruby session controllers"
    ],
    github: "https://github.com/hanxu27/mod-2-project",
    site: "https://immense-brook-23817.herokuapp.com/",
    demo: "https://youtu.be/Ar87X5ucE6c",
    embed: "https://www.youtube.com/embed/Ar87X5ucE6c",
    image: "VBTryouts.png",
    gif: "VBTryouts.gif"
  }
];

export default projects;
