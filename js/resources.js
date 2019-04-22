const resources = new Map();

resources
  // Routing
  .set("A Simple React Router v4 Tutorial", {
    url: "https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf",
    criteria: "Routing",
    type: "Article/Blog",
    sharer: "Kay [FEND]"
  })
  .set("&lt;Route&gt;", {
    url: "https://reacttraining.com/react-router/web/api/Route",
    criteria: "Routing",
    type: "Text Tutorial",
    sharer: "Rodrick [FEND]"
  })
  .set("React Router v4: The Complete Guide — SitePoint", {
    url: "https://www.sitepoint.com/react-router-v4-complete-guide/",
    criteria: "Routing",
    type: "Text Tutorial",
    sharer: "drunkenkismet [FEND] Project Coach"
  })
  .set("Reach Tech (accessible React)", {
    url: "https://reach.tech/router",
    criteria: "Routing",
    type: "Package",
    sharer: "Carlota Pearl"
  })
  .set("https://reacttraining.com/react-router/web/api/withRouter", {
    url: "https://reacttraining.com/react-router/web/api/withRouter",
    criteria: "Routing",
    type: "Text Tutorial",
    sharer: "Forrest (FEND)"
  })
  .set("React router only one child", {
    url: "https://stackoverflow.com/questions/42992911/react-router-only-one-child",
    criteria: "Routing",
    type: "Question/Answer",
    sharer: "Carlota Pearl"
  })
  // Search Page
  .set("Forms", {
    url: "https://reactjs.org/docs/forms.html#why-select-value",
    criteria: "Search Page",
    type: "Documentation",
    sharer: "OliverH(AND)"
  })
  .set("The select Tag", {
    url: "https://reactjs.org/docs/forms.html#the-select-tag",
    criteria: "Search Page",
    type: "Documentation",
    sharer: "Sean [FEND]"
  })

    // Main/Search Page
    .set("React Warning Keys", {
      url: "https://reactjs.org/docs/lists-and-keys.html#keys",
      criteria: "Main/Search Page",
      type: "Documentation",
      sharer: "Alena"
    })
    .set("Context", {
      url: "https://reactjs.org/docs/context.html",
      criteria: "Main/Search Page",
      type: "Documentation",
      sharer: "Forrest (FEND)"
    })
    .set("https://github.com/jamiebuilds/react-loadable", {
      url: "https://github.com/jamiebuilds/react-loadable",
      criteria: "Main/Search Page",
      type: "Package",
      sharer: "Carlota Pearl"
    })
    .set("Naming convention for react component files ", {
      url: "https://github.com/firefox-devtools/rfcs/issues/17",
      criteria: "Main/Search Page",
      type: "Question/Answer",
      sharer: "Zachariah Col"
    })
    .set("Update on Async Rendering", {
      url: "https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",
      criteria: "Main/Search Page",
      type: "Documentation",
      sharer: ""
    })
    .set("Create a New React App", {
      url: "https://reactjs.org/docs/create-a-new-react-app.html",
      criteria: "Main/Search Page",
      type: "Documentation",
      sharer: "Kien [FEND]"
    })
    .set("Nesting With An Array", {
      url: "https://www.youtube.com/watch?time_continue=103&v=PDT3A1L1sPs",
      criteria: "Main/Search Page",
      type: "Video Tutorial",
      sharer: "Zachariah Col"
    })
  // General
  .set("How to comment in React JSX", {
    url: "https://wesbos.com/react-jsx-comments/",
    criteria: "General",
    type: "Article/Blog",
    sharer: "Forrest (FEND)"
  })
  .set("Create a React App (Adding a CSS Preprocessor (Sass, Less etc.))", {
    url: "https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc",
    criteria: "General",
    type: "Package",
    sharer: "Forrest (FEND)"
  })
  .set("Deploying a React App* to GitHub Pages", {
    url: "https://github.com/gitname/react-gh-pages",
    criteria: "General",
    type: "Text Tutorial",
    sharer: "Rodrick [FEND]"
  })
  .set("Tutorial: Intro to React – React", {
    url: "https://reactjs.org/tutorial/tutorial.html",
    criteria: "General",
    type: "React Tutorial",
    sharer: "Dima Kroma"
  })
  .set("Introducing the React Profiler", {
    url: "https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html",
    criteria: "General",
    type: "React Tutorial",
    sharer: "Carlota Pearl"
  })
  .set("nodemon reload, automatically", {
    url: "https://nodemon.io/",
    criteria: "General",
    type: "Package",
    sharer: "Kaisma"
  })
  // Code Functionality
  .set("State and Lifecycle", {
    url: "https://reactjs.org/docs/state-and-lifecycle.html",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "ndrwknx[FEND]"
  })
  .set("Handling Events", {
    url: "https://reactjs.org/docs/handling-events.html",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "Rodrick"
  })
  .set("Ramifications of React setState directly modifying prevState?", {
    url: "https://stackoverflow.com/questions/43525217/ramifications-of-react-setstate-directly-modifying-prevstate",
    criteria: "Code Functionality",
    type: "Question/Answer",
    sharer: "OliverH(AND)"
  })
  .set("JavaScript fundamentals before learning React", {
    url: "https://www.robinwieruch.de/javascript-fundamentals-react-requirements/",
    criteria: "Code Functionality",
    type: "Text Tutorial",
    sharer: "JaniceM"
  })
  .set("Watch Out for Undefined State", {
    url: "https://daveceddia.com/watch-out-for-undefined-state/",
    criteria: "Code Functionality",
    type: "Article/Blog",
    sharer: "Matt Cool"
  })
  .set("Thinking in React", {
    url: "https://reactjs.org/docs/thinking-in-react.html",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "Dylan"
  })
  .set("React State from the Ground Up", {
    url: "https://css-tricks.com/react-state-from-the-ground-up/",
    criteria: "Code Functionality",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("How to Properly Define State in React Components", {
    url: "https://itnext.io/how-to-properly-define-state-in-react-components-47544eb4c15d",
    criteria: "Code Functionality",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("Conditional Rendering – React", {
    url: "https://reactjs.org/docs/conditional-rendering.html",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "Forrest (FEND)"
  })
  .set("Components and Props", {
    url: "https://reactjs.org/docs/components-and-props.html",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "James Theobald"
  })
  .set("Lifting State Up – React", {
    url: "https://reactjs.org/docs/lifting-state-up.html#lifting-state-up",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "Sean [FEND]"
  })
  .set("React Native Beginner: “[Component] is not defined” error", {
    url: "https://medium.com/react-coach/react-native-beginner-component-is-not-defined-error-9ccf3530ed20",
    criteria: "Code Functionality",
    type: "Article/Blog",
    sharer: "Kim McC [FEND]"
  })
  .set("Frontend Development with React, by Teddy Liu", {
    url: "https://www.youtube.com/watch?v=3HMtarQAt3A&t=507s",
    criteria: "Code Functionality",
    type: "Video Tutorial",
    sharer: "Chase Owens (FEND)"
  })
  .set("React Pro Tip: Use code snippets to increase your productivity and write better code", {
    url: "https://medium.com/@aakashns/react-pro-tip-use-code-snippets-to-increase-your-productivity-and-write-better-code-a5ee2f8e792b",
    criteria: "Code Functionality",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("Heres how React's New Context API Works", {
    url: "https://www.youtube.com/watch?v=XLJN4JfniH4&t",
    criteria: "Code Functionality",
    type: "Video Tutorial",
    sharer: "Forrest (FEND)"
  })
  .set("Promise.prototype.catch()", {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",
    criteria: "Code Functionality",
    type: "Documentation",
    sharer: "Forrest (FEND)"
  })
