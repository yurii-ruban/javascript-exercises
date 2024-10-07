const currentYear = new Date().getFullYear();

function getAge(person) {
    person.yearOfDeath ??= currentYear;
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    if (people.length === 0) return {};

    return people.reduce((oldest, person) => {
        const personAge = getAge(person);
        const oldestAge = getAge(oldest)

        if (personAge > oldestAge) {
            oldest = Object.assign({}, person);
        }

        return oldest;
    }, Object.assign({}, people[0]));
};

// Do not edit below this line
module.exports = findTheOldest;
