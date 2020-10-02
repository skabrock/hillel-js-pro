"use strict";

function greetings(name) {
  alert(`${this.greetingWord}, ${this.title} ${name}! ${this.wish}`.trim());
}

const doctor = {
  greetingWord: "Hello",
  title: "dr.",
  wish: "Have a nice day",
};

const colleague = {
  greetingWord: "Hi",
  title: "dear",
  wish: "Regards, John",
};

const helloDoctor = greetings.bind(doctor);
const helloColleague = greetings.bind(colleague);

helloDoctor("Watson");
helloColleague("Kristy");
