
class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location  
    }
    speak() {
       console.log (`Hello my name is ${this.name}, I am from ${this.location}`) 
    }
}

class Instructor extends Person {
    constructor(attributes) {
      super(attributes)
      this.specialty = attributes.specialty
      this.favLanguage = attributes.favLanguage
      this.catchPhrase = attributes.catchPhrase
    }
    demo() {
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
    grade() {
        console.log(`${wesJ.name} receives a perfect score on ${subject}`)
    }
}
const subject = "Javascript-IV";
const channel = "Web20_Jay"

class ProjectManager extends Instructor {
    constructor(attributes) {
      super(attributes)
      this.gradClassName = attributes.gradClassName
      this.favInstructor = attributes.favInstructor
    }
    standUp() {
        console.log (`${this.name} announces to ${channel}, "@channel standy times!"}`)
    }
    debugsCode() {
        console.log (`${this.name} debugs ${wesJ.name}'s code on ${subject}`)
    }
}


class Student extends Person {
    constructor(attributes) {
      super(attributes)
      this.previousBackground = attributes.previousBackground
      this.className = attributes.className
      this.favSubjects = attributes.favSubjects
      this.subject = attributes.subject
    }
    listsSubjects() {
        console.log (`${this.favSubjects}`)
    }
    prAssignment() {
        console.log (`${this.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallenge() {
        console.log (`${this.name} has begun the sprint challenge on ${this.subject}`)
    }
}
    

// PEOPLE////

///////Instructor////////
const jamesD = new Instructor({
    name: 'James Dean',
    location: 'vegas baby',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `I'm sorry your honor, I forgot where I was`
  });

  const sharonS = new Instructor({
    name: 'Sharon Stone',
    location: 'hiding somehwere close',
    age: 40,
    favLanguage: 'Python',
    specialty: 'SQL',
    catchPhrase: `Awesome Sauce`
  });

  const danL = new Instructor({
    name: 'Dan Levy',
    location: 'Downtown living',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Im not angry... I'm just blind`
  });
////^^^^^^^^Instructor^^^^^^^^^/////

///////ProjectManager////////

const jayS = new ProjectManager({
    name: 'Jay Sebagh',
    location: 'Out West Somewhere?',
    age: 22,
    gradClassName : 'Web15',
    favInstructor : 'John Doe'
  });

  const SamS = new ProjectManager({
    name: 'Sam Smith',
    location: 'Brooklyn',
    age: 60,
    gradClassName : 'Web18',
    favInstructor : 'Capt. Obvious'
  });

  const alexP = new ProjectManager({
    name: 'Alex Pompodompolous',
    location: 'Jersey',
    age: 28,
    gradClassName: 'Web17',
    favInstructor: 'Adam Smigelski'
  });
////^^^^^^^^ProjectManager^^^^^^^^^/////

///////Student////////

 const wesJ = new Student({
    name: 'Wes Jonke',
    location : 'Atlanta',
    age: 36,
    previousBackground : 'Project Manager',
    className : 'Web20',
    favSubjects : ['CSS', 'JS'],
    subject : 'Javascript-IV'
  });

  const alexM = new Student({
    name: 'Alex Morgan',
    location: 'GA',
    age: 29,
    previousBackground: 'Professional Soccer Player',
    className: 'Web20',
    favSubjects: ['HTML', 'Flexbox'],
    subject : 'Javascript-IV'
  });

  const danJ = new Student({
    name: 'Dan Johnson',
    location: 'OH',
    age: 36,
    previousBackground : 'Guitar Player' ,
    className :  'Web20',
    favSubjects : ['JS', 'React'],
    subject : 'Javascript-IV'
  });
////^^^^^^^^Student^^^^^^^^^/////


//////TESTING//////

console.log(jamesD.catchPhrase);
console.log(jamesD.favLanguage);
console.log(jamesD.specialty);
 jamesD.demo();
 jamesD.grade();




console.log(jayS.favInstructor);
console.log(jayS.gradClassName);
jayS.standUp();
jayS.debugsCode();




console.log(danJ.favSubjects);
console.log(danJ.className);
console.log(danJ.previousBackground);
wesJ.listsSubjects();
wesJ.sprintChallenge();
wesJ.prAssignment();









//^^^^^^^^^TESTING^^^^^^^^^^//
