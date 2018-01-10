$(document).ready(function() {
	
    let currentYear = new Date().getFullYear();
    let delay = 200; //content render delay for fadeIn and fadeOut
//Fade out fill with content and fade in
    function fadeFill(obj) {
        $('#mainContent').fadeOut(delay);
        $('#mainContent').fadeIn(600);
        setTimeout(function() {
            $('#mainContent').html(
                `<h1 class='mainT'>${obj.title}</h1>
			<h2 class='subT'>${obj.subtitle}</h2>
			<div class='paragraph'>${obj.content}</div>`
            )
        }, delay);
    };

//Page Content Objects, JSX has got nothing on me.
    let aboutObj = {
        title: `Elegant and Efficient Web Development.`,
        subtitle: `Main stack: MongoDB, Express.js, React.js and Node.js`,
        content: `<p>Hello, I'm Nicolas Kao Sartor a fullstack web developer mastering the MERN stack. I have 3 years of experience on the front-end and 1 year of experience on the back-end of the web.</p>
		 <p>I possess strong design skills as well as strong logic/problem solving for applications. To me, being a developer is more than a career it's a passion.</p>
		 <p>My goal is to help you solve problems and provide value to your customers/community with my skills.</p>
		 <h2>My Strengths:</h2>
			 <p>- UI/UX Design.</p>
			 <p>- Fast loading apps with reusable code. </p>
			 <p>- Out of the box thinking and strong problem solving skills.</p>
			 <p>- Fast learner with cooperative attitude in colaborative environments.</p>
			 <p>- I'm always learning and developing my skillset with modern technologies and practices.</p>`
    };

    let projectsObj = {
        title: `My Projects`,
        subtitle: ``,
        content: `
			<div id="rocketFinder" class="projectCard">
				<h2>Rocket Finder</h2>
				<p><a href='https://github.com/DevTrader/RocketFinder' target='_blank'>GitHub</a> | <a href='https://devtrader.github.io/RocketFinder/' target='_blank'>See Live Version</a></p>
				<p>Rocket Finder is a web app where you can explore the next future space missions in a WebGL 3d globe.</p>
				<p>This project uses AJAX to fetch space mission information from <a href='launchlibrary.net' target='_blank'>launchlibrary.net</a> API.</p>
				<p>The landing page uses particles.js library and the application features CSS animations made me with the use of keyframes.</p>	
			</div>
			<div id="ravens" class="projectCard">
				<h2>Ravens</h2>
				<p><a href='https://github.com/DevTrader/Ravens' target='_blank'>GitHub</a> | <a href='https://mighty-crag-98568.herokuapp.com/' target='_blank'>See Live Version</a> (deployed with Heroku, the server may take a minute to wake up)</p>
				<p>Ravens is an abstract chatting app with self deleting chatrooms (chatrooms have 15 minutes of life, if someone sends a message the 15 minutes are reset, otherwise the chatroom is deleted from the app).</p>
				<p>This app was created with Node.js, Socket.io and it's landing page with Three.js</p>
			</div>
			<div id="reactProject" class="projectCard">
				<h2>React Project (Coming Soon)</h2>
				<p><a>GitHub</a></p>
				<p>This application will be a portfolio tracker for cryptocurrencies, utilizing React.js, AJAX, RESTful APIs and Google Authentication, a live preview and code will be available soon.</p>
			</div>`
    };

    let technologyObj = {
        title: `Technologies`,
        subtitle: `These are the technologies I'm familiar with:`,
        content: `
		<div class='techCol'>
			<div>
				<h2>Front-end:</h2>
					<p>- HTML5+CSS3</p>
					<p>- JavaScript (ES6)</p>
					<p>- React JS</p>
			</div>
			<div>
				<h2>Back-end:</h2>
					<p>- MongoDB</p>
					<p>- Node JS</p>
					<p>- Express JS</p>
			</div>
			<div>
				<h2>More Libraries:</h2>
					<p>- jQuery</p>
					<p>- Three.js</p>
					<p>- Socket.io</p>
			</div>
				<h2>I also have experience with:</h2>
					<p>- ES6 Syntax</p>
					<p>- Git and GitHub</p>
					<p>- AJAX</p>
					<p>- RESTful APIs</p>
					<p>- Creating High Quality Mockups on PhotoshopCC</p>
					<p>- And a variety of Javascript Libraries and CSS techniques (such as animations)</p>
		</div>`
    };

    let contactObj = {
        title: `Contact`,
        subtitle: ``,
        content: `<h2>Email: nkaosartor@gmail.com</h2>
        	<h2>LinkedIn: <a href='https://www.linkedin.com/in/nicolas-sartor-13604370/' target='_blank'>Nicolas Sartor</a></h2>
        	<h2>Github: <a href='https://github.com/DevTrader' target='_blank'>DevTrader</a></h2>`
    };

//Init content
    $('.aboutLi').addClass('active');
    $('.mobile-nav .aboutLi').removeClass('active');
    fadeFill(aboutObj);
    $('#currentYear').html(currentYear); //copyright year handler

//Nav Selected Class Handler
    $('li').click(function(e) {
        $(this).addClass('active').siblings().removeClass('active');
    });

//Event Handling To Fill Content Templates With Content Objects
    $('.aboutLi').click(function() {
        fadeFill(aboutObj);
    });

    $('.projectsLi').click(function() {
        fadeFill(projectsObj);
    });

    $('.techLi').click(function() {
        fadeFill(technologyObj);
    });

    $('.cntcLi').click(function() {
        fadeFill(contactObj);
    });

//Mobile Nav Menu
	if ($(window).width() <= 1200){
		console.log('mobile');
		$(".mobile-nav li a").css("display", "block");
		let menu = "close";
		$(".menu-toggle, .mobile-nav ul li").on("click", function() {
		    if (menu === "close") {
		      	$(".mobile-nav").css("transform", "translate(0, 0)");
		     	 menu = "open";
		     	 console.log(menu, this);
		    } else {
		      	$(".mobile-nav").css("transform", "translate(-100%, 0)");
		      	menu = "close";
		      	console.log(menu, this);
		    }
		});
		
    };
});