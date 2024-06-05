const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const age = ("yearOfDeath" in person) ? person["yearOfDeath"] - person["yearOfBirth"] : new Date().getFullYear() - person["yearOfBirth"];
        return age > oldestPerson["age"] ? {"name": person["name"], "age": age} : oldestPerson;
    }, {"name": "", "age": 0});
};

// Do not edit below this line
module.exports = findTheOldest;
