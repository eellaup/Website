(this.webpackJsonpWebsite=this.webpackJsonpWebsite||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},16:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),i=(t(16),t(1)),c=t(2),s=t(4),m=t(3),u=t(5),d=t(8),h=(t(19),t(20),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap",className:"headerNav"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home",onClick:this.props.frontpageHandler},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",onClick:this.props.aboutHandler},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",onClick:this.props.resumeHandler},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#projects",onClick:this.props.projectHandler},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#food",onClick:this.props.foodHandler},"Food")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Paul Lee"),l.a.createElement("h3",null,"An Austin based ",l.a.createElement("span",null,"Mechanical Engineer")," "),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},l.a.createElement("li",{key:"linkedin"},l.a.createElement("a",{href:"https://www.linkedin.com/in/pjl655/"},l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("li",{key:"github"},l.a.createElement("a",{href:"https://github.com/Eellaup"},l.a.createElement("i",{className:"fab fa-github"})))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#aboutBrief"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),p=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},l.a.createElement("li",{key:"linkedin"},l.a.createElement("a",{href:"https://www.linkedin.com/in/pjl655/"},l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("li",{key:"github"},l.a.createElement("a",{href:"https://www.github.com/Eellaup"},l.a.createElement("i",{className:"fab fa-github"}))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),E={aboutme:["Hey, welcome to my web! I'm currently working as a mechanical engineer in a startup with one of my professors and mentors from UT. I decided to make a website in ReactJS for fun, and hopefully for you to get to know me a little better.","I graduated from the University of Texas at Austin as a Mechanical Engineer in 2018. I tailored my academic career heavily towards graduate school, and luckily got accepted to Georgia Tech (joint with Seoul National University) and The University of Michigan. But about three weeks before I graduated, I decided not to go. I feared pigeon-holing myself in career path I hardly knew about. Instead I began soul-searching in industry.","In June 2018, I started my first job at Tesla as a quality technician for the Model 3 battery module. In October 2018, I received the Quality Employee of the Quarter Award for participating in designing, managing, and leading a pilot production line that saved the company over $10M. After that project, I deployed several applications packaged in Java, Python and MySQL for quick & easy data analysis on manufacturing root-cause analysis. These apps were praised by engineers, managers, and fellow technicians. Soon after, I internally transfered to the Quality Data Science and Systems team for all of Gigafactory 1."],why_meche:["Legos. My favorite childhood toy. You could literally build anything you could've imagine with merely plastic bricks. There's so many levels of engineering that goes into Legos. From mass manufacturing techniques like injection molding to ","There's two ways to play with Legos; follow the instructions or be creative. Similar to engineers, there are those who never deviate from the process and those were constantly innovate. Both are equally as important, so which one am I? I have the passion to innovate, but lack natural creativity. Instead I take pieces of past experiences and stitch them together to create something new.","Just like legos, I want to stack foundation building blocks together to create something amazing. I chose mechanical engineering because of diversity, ability to solve problems directly, etc. "],interests:["Snowboarding","Tennis","Bowling","Short-Term Investing"]},f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=E.aboutme.map((function(e){return l.a.createElement("div",null,l.a.createElement("p",null,e))}));E.why_meche.map((function(e){return l.a.createElement("div",null,l.a.createElement("p",null,e))})),E.interests.map((function(e){return l.a.createElement("li",null,e)}));return l.a.createElement("section",{id:"about"},l.a.createElement("nav",{id:"nav-wrap",className:"compNav"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#home",onClick:this.props.frontpageHandler},"Home")),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#about",onClick:this.props.aboutHandler},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",onClick:this.props.resumeHandler},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#projects",onClick:this.props.projectHandler},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#food",onClick:this.props.foodHandler},"Food")))),l.a.createElement("div",{id:"home"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("p",null,l.a.createElement("img",{className:"portrait",src:"/images/aboutme.jpg"}),l.a.createElement("h1",null,"About Me"),e))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("h1",null,"Why Mechanical Engineering?"),l.a.createElement("p",null,"Coming Soon..."),l.a.createElement("h1",null,"Interests?"),l.a.createElement("p",null,"Coming Soon..."))))}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).toResume=function(){window.location="/pdf/Resume_Paul_Lee.pdf"},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"aboutBrief"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I'm on a mission to fulfill one of our Alma Mater's core philosophy, \"What Starts Here, Changes the World.\" In preparation to be the catalyst that will create solutions for tomorrow's problems, I have made it a point in my career to pursue a multi-disciplinary background and be a stakeholder in all parts of a process. I am driven to assimilate, invent, and inspire the next-gen technology that will be perennial."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("a",{href:"mailto:paullee11760@gmail.com"},l.a.createElement("span",null,"Paullee11760@gmail.com")))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"javascript:void(0)",onClick:this.toResume,className:"button",download:!0},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),g={skillmessage:"",education:[{school:"University of Texas at Austin",degree:"B.S. Mechanical Engineering Honors",graduated:"May 2018, GPA: 3.92/4.00",description:["Engineering Honors Program: Honors Thesis - Safety Risks with DIY Electric Rideables","Accolades: Mechatronics Certificate, Engineer-in-Training (EIT 64856)","Clubs & Activities: Tau Beta Pi, ASME"],othertitle:["Graduate School Admission (2018)"],otherdesc:{"Graduate School Admission (2018)":["Georgia Tech joint with Seoul National University","University of Michigan"]}}],work:[{company:"Stealth Mode Start Up",title:"Engineer #1 | VP of Engineering",years:"Sept 2019 - Present",description:["Developing innovative safety solutions for renewable energy storage systems","Seeded by the NSF SBIR/STTR grant"]},{company:"Tesla, Inc.",title:"Quality Data Science & Systems",years:"Jun 2019 - Sept 2019",description:["Was in transit for a formal position as an Associate Data Scientist","Developed micro-web applications in Python Flask to promote efficient communication of critical information","Analyzed quality metrics in compliance with Tesla's Quality Management System (QMS)","Utilized Confluence REST API's to autonomously maintain information","Offered a formal position as an Associate Process Engineer for the Model 3 Drive Unit"]},{company:"Tesla, Inc.",title:"Quality Engineering Technician II",years:"Jun 2018 - Jun 2019",description:["Employee of the Quarter - Q3 2018","Successfully saved the company $10.5M in the third and fourth quarters of 2018 by coordinating with an engineering team and senior managers to develop and implement a new production line","Deployed stand-alone applications in Java, Python, and MySQL as serviceable quality tools","Maximized efficiency and quality in accordance with the company\u2019s standards by utilizing root-cause analysis and lean manufacturing methodologies in the Model 3 battery module production"]},{company:"UT Fire Research",title:"Undergraduate Research Assistant",years:"Feb 2017 - May 2018",description:["Contributed to research for the automation of a testing facility that simulated indoor flashover fires","Acted as the leader for a team of undergraduate students, providing mentorship and coaching where needed","Conducted comprehensive research into the lithium-ion battery degredation"]},{company:"Applied Research Laboratories",title:"Student Intern",years:"Mar 2016 - Dec 2016",description:["Expedited the full-cycle of system development, designing, commissioning, fabricating, and assembly of experimental test systems according to exact specifications by utilizing an extensive knowledge of CAD software","Developed new parts and modified existing parts in PTC Creo CAD software to enhance functionality","Created accurate engineering drawings by leveraging Geometric Dimensioning and Tolerancing practices","Maintained an attentive, professional attitude while communicating with vendors to commission custom parts","Supervised the packaging, shipping, and receiving of custom and original equipment parts"]}],skills:[{name:"Mechanical Engineering",level:"80%"},{name:"Solidworks",level:"70%"},{name:"Python",level:"70%"},{name:"MySQL",level:"70%"},{name:"Raspberry Pi",level:"70%"},{name:"Java",level:"65%"},{name:"MATLAB",level:"65%"},{name:"PTC Creo",level:"60%"},{name:"LabVIEW",level:"60%"},{name:"React JS",level:"30%"}],courses:[{number:"ME344",name:"Dynamic Systems & Controls"},{number:"ME379M",name:"Theory/Design of Mechanical Measurements"},{number:"ME348D",name:"Mechatronics II"},{number:"ME348C",name:"Mechatronics I"},{number:"ME340",name:"Mechatronics (Undergrad)"},{number:"ME679",name:"Undergraduate Honors Thesis"},{number:"ME339",name:"Heat Transfer"},{number:"ME334",name:"Materials Engineering"},{number:"ME338",name:"Machine Elements"},{number:"ME330",name:"Fluid Mechanics"},{number:"ME318M",name:"Engineering Computational Methods"},{number:"ME324",name:"Dynamics"},{number:"EM319",name:"Mechanics of Solids"},{number:"ME326",name:"Thermodynamics"},{number:"M427J",name:"Differential Equations"},{number:"M340L",name:"Linear Algebra"},{number:"EM306",name:"Statics"},{number:"ME353",name:"Engineering Finance"},{number:"ME335",name:"Engineering Statistics"},{number:"CS312",name:"Introduction to Programming (Java)"}]},v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).toResume=function(){window.location="/pdf/Resume_Paul_Lee.pdf"},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=g.skillmessage,a=g.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("ul",{className:"desc"},e.description.map((function(e){return l.a.createElement("li",null,e)}))),e.othertitle.map((function(a){var t=a,n=e.otherdesc[t];return l.a.createElement("div",null,t,l.a.createElement("ul",{className:"other"},n.map((function(e){return l.a.createElement("li",null,e)}))))})))})),t=g.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("ul",{className:"desc"},e.description.map((function(e){return l.a.createElement("li",null,e)}))))})),n=g.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))})),r=g.courses.map((function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"course-dot"},l.a.createElement("p",{className:"course-name"}," \u2022")),l.a.createElement("h4",{className:"course-number"},e.number,":"),l.a.createElement("p",{className:"course-name"},e.name))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("nav",{id:"nav-wrap",className:"compNav"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#home",onClick:this.props.frontpageHandler},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",onClick:this.props.aboutHandler},"About")),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#resume",onClick:this.props.resumeHandler},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#projects",onClick:this.props.projectHandler},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#food",onClick:this.props.foodHandler},"Food")))),l.a.createElement("div",{id:"home"}),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Experience"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))),l.a.createElement("div",{className:"row course"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Courses"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"course-container"},l.a.createElement("ul",{className:"course-list"},r)))),l.a.createElement("div",{className:"row download"},l.a.createElement("p",null,l.a.createElement("a",{href:"javascript:void(0)",onClick:this.toResume,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume"))))}}]),a}(n.Component),y=(n.Component,function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("nav",{id:"nav-wrap",className:"compNav"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#home",onClick:this.props.frontpageHandler},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",onClick:this.props.aboutHandler},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",onClick:this.props.resumeHandler},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#projects",onClick:this.props.projectHandler},"Projects")),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#food",onClick:this.props.foodHandler},"Food")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Coming Soon"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component)),w=t(7),N=[{name:"E-Skateboard",icon:"fa fa-bolt",text:l.a.createElement("div",{className:"projectBox"},l.a.createElement("h1",null,"Homemade Electric Skateboard"),l.a.createElement("div",{className:"projectPic-wide"},l.a.createElement("img",{src:"/images/board_tahoe.jpg"}),l.a.createElement("figcaption",null,"Electric Skateboard V2 at Lake Tahoe")),l.a.createElement("br",null),l.a.createElement("p",null,"Project Motivation:",l.a.createElement("br",null)," ",l.a.createElement("br",null),"In the summer after my second-year (2016) in college, I made a homemade electric skateboard to accomodate my ambivalence to walking to class.",l.a.createElement("br",null),l.a.createElement("br",null),'Walking to class in Texas heat across "The Forty Acres," which now stretches 431 acres, was every student\'s biggest dread. Alternative to walking, other options were biking, bus commuting, or skipping class, which seemed to be the most popular option. (Note: This was before all the electric scooters and cheaper modes of transportation existed.)',l.a.createElement("br",null),l.a.createElement("br",null),"My ideal alternative was something that didn't require a lot of physical strain, while being portable enough carry into class. Parking, even for bikes, was limited.",l.a.createElement("br",null),l.a.createElement("br",null),"To be continued..."),l.a.createElement("hr",null),l.a.createElement("h1",null,"Electric Skateboard Version 1"),l.a.createElement("div",{className:"projectPic-wide"},l.a.createElement("img",{src:"/images/board_v1.jpg"}),l.a.createElement("figcaption",null,"Electric Skateboard Version 1 (2016)")),l.a.createElement("hr",null),l.a.createElement("h1",null,"Electric Skateboard Version 2"),l.a.createElement("div",{className:"projectPic-wide"},l.a.createElement("img",{src:"/images/board_v2.jpg"}),l.a.createElement("figcaption",null,"Electric Skateboard Version 2 (2017)")),l.a.createElement("hr",null),l.a.createElement("h1",null,"Honors Thesis - Safety Risks with DIY Electric Rideables"),l.a.createElement("div",{className:"projectPic"},l.a.createElement("img",{src:"/images/skateboard-graph.png"}),l.a.createElement("figcaption",null,"Figure from Honors Thesis")))},{name:"USAR Robot",icon:"fa fa-robot",text:l.a.createElement("div",{className:"projectBox"},l.a.createElement("h1",null,"Urban Search and Rescue Robot"),l.a.createElement("p",null,"Project Motivation:",l.a.createElement("br",null),l.a.createElement("br",null),"In our senior design course, we were tasked with developing a robot capable of performing urban search and rescue (USAR) operations within a burning building. The setting for the USAR operation was to aid firefighters by locating an incapacited person/pet in a smokey high-temperature environment.",l.a.createElement("br",null),l.a.createElement("br",null),"Design Constraints:",l.a.createElement("br",null),l.a.createElement("br",null),"Concept Generation:",l.a.createElement("br",null),l.a.createElement("br",null),"Pugh Chart:",l.a.createElement("br",null),l.a.createElement("br",null)))},{name:"Home Cloud Network",icon:"fa fa-cloud",text:"Coming Soon..."},{name:"Maze Robot",icon:"fa fa-map-marked-alt",text:"Coming Soon..."}],k=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).state={activeTab:0,data:N},e.changeTabOnClick=e.changeTabOnClick.bind(Object(w.a)(e)),e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"changeTabOnClick",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"tabs-body"},l.a.createElement(j,{data:this.state.data,click:this.changeTabOnClick,activeId:this.state.activeTab}),l.a.createElement(H,{data:this.state.data,activeId:this.state.activeTab}))}}]),a}(n.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"doClick",value:function(e,a){this.props.click(e)}},{key:"render",value:function(){var e=this,a=this.props.activeId,t=this.props.data.map((function(t,n){return l.a.createElement("li",{className:a===n?"active":""},l.a.createElement("a",{onClick:e.doClick.bind(e,n)},l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("i",{className:t.icon})),t.name)))}));return l.a.createElement("ul",{className:"tabs-header"},t)}}]),a}(l.a.Component),H=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.activeId,a=this.props.data.map((function(a,t){return l.a.createElement("div",{className:"tabs-textItem "+(e===t?"show":"")},a.text)}));return l.a.createElement("div",{className:"tabs-content"},a)}}]),a}(l.a.Component),C=k,S=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement("nav",{id:"nav-wrap",className:"compNav"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#home",onClick:this.props.frontpageHandler},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",onClick:this.props.aboutHandler},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",onClick:this.props.resumeHandler},"Resume")),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#projects",onClick:this.props.projectHandler},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#food",onClick:this.props.foodHandler},"Food")))),l.a.createElement("div",{id:"home"}),l.a.createElement("div",{className:"row"},l.a.createElement("h1",null," Personal & Professional Projects "),l.a.createElement(C,null)))}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).frontpageHandler=function(){return t.setState({frontpage:!0,about:!1,resume:!1,project:!1,food:!1})},t.aboutHandler=function(){return t.setState({frontpage:!1,about:!0,resume:!1,project:!1,food:!1})},t.resumeHandler=function(){return t.setState({frontpage:!1,about:!1,resume:!0,project:!1,food:!1})},t.projectHandler=function(){return t.setState({frontpage:!1,about:!1,resume:!1,project:!0,food:!1})},t.foodHandler=function(){return t.setState({frontpage:!1,about:!1,resume:!1,project:!1,food:!0})},t.state={foo:"bar",resumeData:{},frontpage:!0,resume:!1,project:!1,food:!1},d.a.initialize("UA-158878203-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,this.state.frontpage?l.a.createElement(h,{frontpageHandler:this.frontpageHandler,aboutHandler:this.aboutHandler,resumeHandler:this.resumeHandler,projectHandler:this.projectHandler,foodHandler:this.foodHandler}):null),l.a.createElement("div",null,this.state.frontpage?l.a.createElement(b,null):null),l.a.createElement("div",null,this.state.about?l.a.createElement(f,{frontpageHandler:this.frontpageHandler,aboutHandler:this.aboutHandler,resumeHandler:this.resumeHandler,projectHandler:this.projectHandler,foodHandler:this.foodHandler}):null),l.a.createElement("div",null,this.state.resume?l.a.createElement(v,{frontpageHandler:this.frontpageHandler,aboutHandler:this.aboutHandler,resumeHandler:this.resumeHandler,projectHandler:this.projectHandler,foodHandler:this.foodHandler}):null),l.a.createElement("div",null,this.state.project?l.a.createElement(S,{frontpageHandler:this.frontpageHandler,aboutHandler:this.aboutHandler,resumeHandler:this.resumeHandler,projectHandler:this.projectHandler,foodHandler:this.foodHandler}):null),l.a.createElement("div",null,this.state.food?l.a.createElement(y,{frontpageHandler:this.frontpageHandler,aboutHandler:this.aboutHandler,resumeHandler:this.resumeHandler,projectHandler:this.projectHandler,foodHandler:this.foodHandler}):null),l.a.createElement(p,{data:this.state.resumeData.main}))}}]),a}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(M,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):I(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.cdd7694a.chunk.js.map