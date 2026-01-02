import { Component } from '@angular/core';
import {  IBackskill, Iskill, ITabs } from './models/tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSwitchTab';
 selectedTab : string=''
  newSelectedTab: string='About Us'
  selectedSkill:string='html'
  backendSkill:string='';
  backendSkillArr:IBackskill[] =[
    {
      skillName:'mongoDb',
      id:1
    },
    {
      skillName:'expressJs',
      id:1
    },
    {
      skillName:'nodeJs',
      id:1
    },
    {
      skillName:'moongoose',
      id:1
    },
     {
      skillName:'python',
      id:1
    }
  ];
  tabsLinkArr :ITabs[]= [
    { fontIcon:'home', 
      Title: 'home' ,
      content:'Welcome to our website! We aim to deliver quality products and valuable information to our users.',
       id:1
    },
    {
       fontIcon:'shopping_bag', 
     Title: 'product' ,
     content:'Discover a wide range of products carefully designed to meet customer needs and expectations.',
     id:2
     },
    { 
      fontIcon:'post_add', 
     Title: 'blog' ,
     content:'Our blog section shares useful articles, tips, and updates to keep users informed.',
       id:3
     },
    { 
      fontIcon:'add_call', 
     Title: 'contact',
     content:'We are always happy to hear from you. Feel free to contact us anytime.Phone: +91 98765 43210',
       id:4
      }
  ];

 tabArr :ITabs[] =[
  {
  fontIcon: 'info',
  Title: 'about us',
  content: 'Learn more about our company values, vision, and journey so far.',
  id: 5
},
{
  fontIcon: 'design_services',
  Title: 'services',
  content: 'We offer consulting, development, and support services tailored to client needs.',
  id: 6
},
{
  fontIcon: 'reviews',
  Title: 'testimonials',
  content: 'Read what our customers say about our products and services.',
  id: 7
}

]


skillsArr:Iskill[]=[
{
title:'html',
content:'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
avtar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy53EMPHeImTci6zEMctEViRzixpk5yBc-oblmN4LxbCZup8Qdok5PFnW4E1-brJ6X1R_OYgiT8t34Bnw7eeUzINz15Qgor4oVK8eFTA&s',
skillId:1
},
{
title:'css',
content:'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
avtar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnOJcTOGbteu83-KHFa1NqO6JNy9jG5B5rOWjMAapiSJ1p9SYMEyKRZhItrt3q-7h49dMX97gOP-793Bm3aftgDIFQEwu-IMAOO58Ow&s=10',
skillId:2
},
{
title:'javascript',
content:'JavaScript is a programming language and core technology of the Web, alongside HTML and CSS. It was created by Brendan Eich in 1995. As of 2025, the overwhelming majority of websites uses JavaScript for client side webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.',
avtar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7HZFCI0Euwzq8qotUFeCbHhhISYdqUt4rg&s',
skillId:3
},
{
title:'angular',
content:'AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.',
avtar:'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80YWI1YjNjOTg2MmZjOTFlNTFlMmU2ZjY5YTY2ZTk5Mz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.vn16SpUv_a299JVQYFcyqEx22Z2eknMUgaL2l2ilARU',
skillId:4
},
]
  trackByTabId(index: number, tab:ITabs ): number {
  return tab.id;
}
trackBySkillId(index:number, tab:Iskill):number{
  return tab.skillId
}
trackByBackSkill(index:number, id:any){
  return id
}
 
}
