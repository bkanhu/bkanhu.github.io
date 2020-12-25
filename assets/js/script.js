// fetch json and view
let requestURL = '/assets/js/projects.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const URL = request.response;
    console.log("ALL GOOD? BRUH");
    completedProjects(URL);
    console.log("/*/*/*/*/*/*/*/*/*/");
    console.log("/*/*/*/*/*/*/*/*/*/");
    console.log("/*/*/*/*/*/*/*/*/*/");
    ownProjects(URL);
}
function completedProjects(obj) {
    const projectBuild = obj['project_build'];
    
    for (let i = 0; i < projectBuild.length; i++) {
    // nothing but structure of card for reference
      // <div class="card">
      //       <div class="card-body">
      //         <h5 class="card-title" id="card-title"></h5>
      //         <p class="card-text" id="card-text"></p>
      //         <a href="" id="projectLink" class="projectLink" target="_blank" rel="noopener noreferrer">Visit Project</a>
      //       </div>
      //     </div>
      var card = '<div class="card">';
      card += '<div class="card-body">';
      card += '<h5 class="card-title" id="card-title">'+projectBuild[i].title+'</h5>'
      card += ' <p class="card-text" id="card-text">'+projectBuild[i].text+'</p>';
      card += ' <p class="card-tech" id="card-tech">Tech Stack: '+projectBuild[i].stack+'</p>';
      card += ` <a href="${projectBuild[i].href}" id="projectLink" `+'class="projectLink" target="_blank" rel="noopener noreferrer">'+'Visit Project</a>';
      card += '</div>'
      card += '</div>'
      $('#card').append(card);
    // console.log(projectBuild[i].title+", "+projectBuild[i].text);
      
    // const tech = projectBuild[i].stack;
    
    // for (let j = 0; j < tech.length; j++) {
    //       console.log(tech[j]);
    //   }

    }
  }

  function ownProjects(obj){
    const projectProudOf = obj['project_proud_of'];
    
    for (let i = 0; i < projectProudOf.length; i++) {
      var card = '<div class="card">';
      card += '<div class="card-body">';
      card += '<h5 class="card-title" id="card-title">'+projectProudOf[i].title+'</h5>'
      card += ' <p class="card-text" id="card-text">'+projectProudOf[i].text+'</p>';
      card += ' <p class="card-tech" id="card-tech">Tech Stack: '+projectProudOf[i].stack+'</p>';
      card += ` <a href="${projectProudOf[i].href}" id="projectLink" `+'class="projectLink" target="_blank" rel="noopener noreferrer">'+'Visit Project</a>';
      card += '</div>'
      card += '</div>'
      $('#card_second').append(card);
    // console.log(projectProudOf[i].title+", "+projectProudOf[i].text);
      
    // const tech = projectProudOf[i].stack;
    
    // for (let j = 0; j < tech.length; j++) {
    //       console.log(tech[j]);
    //   }

    }
  }

  // scroll to top
  mybutton = document.getElementById("scrollTop");
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }