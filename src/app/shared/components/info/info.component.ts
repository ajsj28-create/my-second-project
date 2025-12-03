import { Component, ElementRef, OnInit } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Iframe } from '../../models/info.type';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  frameworksInfo: Iframe[] = [
    {
      title: "React",
      info: "React is a widely used JavaScript library for building dynamic user interfaces, especially single-page applications. Developed by Meta, React focuses on creating reusable UI components using a declarative and efficient approach. One of its key strengths is the Virtual DOM, which improves performance by updating only the necessary parts of the UI. React uses JSX, a syntax that blends JavaScript with HTML-like elements, making development more intuitive. The React ecosystem is large and flexible, including tools like React Router for navigation and state management libraries such as Redux, Zustand, and Recoil. Frameworks like Next.js extend React with server-side rendering and static site generation capabilities, improving SEO and loading performance. React Native also extends the framework beyond the web, allowing developers to build mobile applications using the same logic. Companies like Meta, Netflix, and Shopify rely on React because of its scalability, performance, and developer productivity. With strong community support, TypeScript integration, and continuous improvement, React remains one of the most influential tools in frontend development."
    },
    {
      title: "Angular",
      info: "Angular is a full-featured frontend framework maintained by Google and designed for scalable enterprise applications. It uses TypeScript and provides a structured architecture based on components, modules, and services. Angular includes many built-in features such as routing, dependency injection, form handling, and validation, reducing the need for external tools. Two-way data binding helps keep the UI and application state synchronized automatically. Angular CLI simplifies setup and project management, while Angular Material provides prebuilt UI components following Material Design. The framework also integrates RxJS for advanced asynchronous data handling. Because of its structure and long-term maintainability, Angular is widely used by organizations such as Microsoft and IBM. While the learning curve can be higher than frameworks like React or Vue, Angular's consistency, tooling, and strong patterns make it ideal for long-term and large-scale applications where standardization and stability matter."
    },
    {
      title: "Vue.js",
      info: "Vue.js is a progressive JavaScript framework designed for building user interfaces with simplicity and flexibility. Created by Evan You, Vue offers an approachable syntax and a gentle learning curve that makes it suitable for beginners and professionals. Vue uses a component-based architecture and a powerful reactivity system that updates the UI automatically when data changes. Its template syntax allows developers to write readable markup while binding data using directives. For larger applications, Vue provides official tools such as Vue Router for navigation and Pinia or Vuex for centralized state management. Frameworks like Nuxt.js extend Vue by offering features like server-side rendering and static site generation. Vue's ecosystem includes UI libraries like Vuetify and Quasar, which provide ready-made responsive components. Many organizations, including Xiaomi and GitLab, use Vue because of its performance, documentation quality, and easy scalability. With ongoing improvements like the Composition API and strong TypeScript support, Vue continues to be a major choice in modern frontend development."
    },
    {
      title: "Node.js",
      info: "Node.js is a fast and scalable JavaScript runtime that enables server-side programming using JavaScript. Built on Google’s V8 engine, Node.js uses an event-driven, non-blocking architecture, which makes it ideal for applications requiring real-time communication or handling large numbers of concurrent requests. Node relies on npm, one of the largest package ecosystems in software development, giving developers access to countless tools and libraries. While Node.js itself is not a framework, it forms the foundation for popular backend frameworks like Express.js, NestJS, and Fastify. With support for asynchronous programming through callbacks, promises, and async/await, Node can efficiently manage file operations, API requests, and networking tasks. Node integrates well with MongoDB, PostgreSQL, and Redis, making it suitable for APIs, microservices, and full-stack JavaScript development. Companies such as Netflix, Uber, and LinkedIn use Node.js due to its performance and scalability. Its ability to unify frontend and backend development continues to make Node a dominant backend choice."
    },
    {
      title: "Django",
      info: "Django is a high-level Python web framework designed for building fast, secure, and scalable applications. It follows the Model-View-Template (MVT) pattern and includes built-in tools such as routing, authentication, ORM, form handling, and admin dashboards. Django emphasizes clean code and the “don’t repeat yourself” principle, making development efficient and maintainable. Its ORM allows developers to interact with databases like PostgreSQL and MySQL using Python instead of raw SQL. Django includes strong security protections by default, helping prevent SQL injection, CSRF attacks, and XSS vulnerabilities. With Django REST Framework (DRF), developers can easily build RESTful and GraphQL APIs. Django's built-in admin panel is a major advantage, enabling quick management of application data. Companies like Instagram, Pinterest, and Coursera rely on Django for its reliability and scalability. With strong community support and ongoing improvements, Django remains a top choice for backend web development."
    }
  ];

  onShowHide(eve: Event, obj: Iframe) {
    if((eve.target as HTMLElement).innerHTML === ` Show more`){
      ((eve.target as HTMLElement).previousSibling as HTMLElement).innerHTML = obj.info;
      (eve.target as HTMLElement).innerHTML = ` Show less`;
    }else{
      ((eve.target as HTMLElement).previousSibling as HTMLElement).innerHTML = this._truncatePipe.transform(obj.info);
      (eve.target as HTMLElement).innerHTML = ` Show more`;   
    }
  }

  constructor(private _truncatePipe: TruncatePipe) { }

  ngOnInit(): void {
  }

}
