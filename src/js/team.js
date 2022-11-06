import Person from './person.js';

class Team {
  constructor() {
    this.members = new Set();
  }

  add(characterObj) {
    this.members.add(characterObj);
  }

  [Symbol.iterator]() {
    const data = Array.from(this.members);
    let index = -1;
    return {
      next() {
        index += 1;
        if (index === data.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: data[index],
          done: false,
        };
      },
    };
  }
}

const person1 = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
const person2 = new Person('Лучник2', 'Bowman2', 50, 1, 40, 10);
const team = new Team();
team.add(person1);
team.add(person2);
/* eslint-disable-next-line */
for (let i of team) {
  console.log(i);
}
