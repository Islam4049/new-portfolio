let projectDetail = [
    {
        projectId: 'pro01',
        projeHoverId: 'hover01',
        projectName: 'NBA TEAM-SELECTOR', 
        projectDesc: 'This project provides a simple and optimization Search tool for selecting your NBA fantasy team. The API will allow you to choose from an updated list of players separated by their positions and salaries. This will allow the users to learn how to manage players with team salary caps.',
        projectImg: 'assets/nba1.jpg', 
        projectLink: ' https://fast-dawn-07792.herokuapp.com/',
        projectGitHub: 'https://github.com/Islam4049/project-two.git',
        projectTools: [ 'MySQL', 'Express', 'NodeJs', 'API']
    },
    {
        projectId: 'pro2', 
        projeHoverId: 'hover2',
        projectName: 'Fitness Tracker',
        projectDesc:'For this assignment, I was tasked to create a workout tracker. This assignment required us to create Mongo database with a Mongoose schema and handle routes with Express.',
        projectImg: 'assets/fitness.jpg', 
        projectLink: 'https://aqueous-bayou-57929.herokuapp.com/',
        projectGitHub: ' https://github.com/Islam4049/workouttracker.git',
        projectTools: [ 'MongoDB', 'Express', 'NodeJs', 'HTML', 'CSS3', 'Bootstrap']

    },
    {
        projectId: 'pro6', 
        projeHoverId: 'hover6',
        projectName: 'Progressive Budget', 
        projectDesc: 'The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.', 
        projectImg: 'assets/budget.jpg',
        projectLink: 'https://budget200.herokuapp.com/',
        projectGitHub: 'It has no Github',
        projectTools: [ 'HTML5','CSS3','Javascript','jQuery','Pwa']
    },
    {
        projectId: 'pro5', 
        projeHoverId: 'hover5',
        projectName: 'Weather Dashboard', 
        projectDesc: 'This weather app allows users to search for a city with current and future weather conditions for that city. Users are able to add to the search history and also retrive the data when they visit the app again. The user can delete the cities from the search history',
        projectImg: 'assets/img-7.jpg', 
        projectLink: 'https://islam4049.github.io/weatherdashboard/',
        projectGitHub: ' https://github.com/Islam4049/weatherdashboard.git',
        projectTools: [ 'jQuery','API','HTML', 'CSS3']
    },
    {
        projectId: 'pro3', 
        projeHoverId: 'hover3',
        projectName: 'Google Books Search', 
        projectDesc: `An application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books.`,
        projectImg: 'assets/book3.jpg', 
        projectLink: ' https://google-books99.herokuapp.com/',
        projectGitHub: ' https://github.com/Islam4049/googlebooks1.git',
        projectTools: [ 'MongoDB', 'Express','REACT', 'NodeJs', 'GoogleAPI']
    }
   
    
    
    
]
$(document).ready(function(){
    setTimeout(() => {
        console.log('why no add?')
        $( "#loadWndo" ).fadeOut(500);
    }, 1200);

//=================FOR nav
    // $( ".menuBar" ).hide() 
    $( "#hider" ).mouseover(function() {
        $( ".menuBar" ).show( 1500 );
        $( "#hider" ).hide( 500 );
        return;
    });
    $( ".menuBarUL" ).mouseleave(function() {
        $( ".menuBar" ).hide( 1500 );
        $( "#hider" ).show( 1500 );
    });
    // ====for project hover
    $( "#proj1" ).mouseover(function() {
        $( "#proj1Detl" ).fadeIn( 500 );
        // $( "#hider" ).hide( 500 );
        return;
    });
    $( "#proj1" ).mouseleave(function() {
        $( "#proj1Detl" ).fadeOut( 200 );
        // $( "#hider" ).hide( 500 );
        return;
    });
    ShowProjects()
    //=================FOR H1 ANIMATION

    function heroIntroAnimation(){
        $( ".intro" ).slideDown( 1500 );
            return;
        }
    function subHeroAnimation(){
        $( ".subHero" ).slideDown( 1500 );
            return;
        }
    function readAboutMeAnimation(){
        $( ".readAbtMeBtn" ).show( 1500 );
            return;
        }
    //========dont delete below
});
function ShowStack(){
    // console.log("onlcick works?")
    // $( "#devStacks" ).show(  );
    $('html, body').animate({
        scrollTop: $("#devStacks").offset().top
    }, 1500);
}
function scrolAbout(){
    
    $( ".someme" ).show(  );
    $('html, body').animate({
        scrollTop: $(".aboutMe").offset().top
        }, 1500);
};

// function ShowProjectArray(){

// }
function showProj1Detail(projId){ 
    $( ".projWindow" ).fadeIn(700);
    $('html, body').animate({
        scrollTop: $(".projWindow").offset().top
        }, 600);
    $("#pro1").html(``);
    // console.log(projectDetail);
    projectDetail.forEach(project => {
        if (project.projectId == projId){
            $("#pro1").html(`
            <img src= "${project.projectImg}" alt="ss" class="detailPrjImg col-lg-6"" >
            <div class="details1 col-lg-6 text-center">
                <h1 class="coralFont">${project.projectName}</h1>
                <p>${project.projectDesc}</p>
                <div class="row mx-auto justifty-content-around" id="projectTool">
                </div>
                <div class="row justify-content-center mx-auto" style="width: 70%;">
                    <a href="${project.projectLink}" class="button2" style="width: 150px;">Live Demo</a>
                    <a href="${project.projectGitHub}" class="button2" style="width: 150px;">Git Hub</a>
                </div>
            </div>
            `)
            project.projectTools.forEach(tool=>{
                $("#projectTool").append(`<div class="toolTags mx-auto">${tool}</div>`)}
            )
        }  else {
            return    
        }
    })
}
function closeProjWnd(){
    $( ".projWindow" ).hide()
}
function ShowContacts(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
        }, 1500);
}

async function ShowProjects(){
    await projectDetail.forEach(projects => {
        console.log(projects.projectName)
        $( "#projectsSection").append(`
        <div class="projectBox proj1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50" id=${projects.projectId}>
            <img class="projImg" src=${projects.projectImg} alt="">
            <div class="projSumm1"><h3 class="coralFont">${projects.projectName}</h3></div>
            <div class="projSumm hide"
            id='${projects.projeHoverId}'>
                <h3 class="projHead text-center">${projects.projectName}</h3>
                <div class="proSummBtn" onClick="showProj1Detail('${projects.projectId}')">Show Detail</div>
            </div> 
        </div>
        `);
        $( `#${projects.projectId}` ).mouseover(function() {
            console.log(projects.projeHoverId)
            $( `#${projects.projeHoverId}` ).fadeIn( 500 );
            return;
        });
        $( `#${projects.projectId}` ).mouseleave(function() {
            $( `#${projects.projeHoverId}` ).fadeOut( 200 );
            return;
        });
    })
}
function ScrollToProjects(){
    $('html, body').animate({
        scrollTop: $("#devProjects").offset().top
        }, 1500);
}