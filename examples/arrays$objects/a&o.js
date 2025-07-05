var people = [
    {
        name: "Jake",
        rate: 100
    },
    {
        name: "Martha",
        rate: 70
    },
    {
        name: "Patrick",
        rate: 90
    },
    {
        name: "Oliver",
        rate: 60
    },
    {
        name: "Jo",
        rate: 115
    },
    {
        name: "Derek",
        rate: 95
    },
    {
        name: "Elliot",
        rate: 120
    },
    {
        name: "Emilly",
        rate: 40
    },
    {
        name: "Mark",
        rate: 80
    }
]

$(function() {
    var array1 = [];
    var array0 = []
    people.forEach(function(person) {
        if (person.rate >= 30 && person.rate <= 100) {
            array1.push(person);
        } else {
            array0.push(person);
        }
    });

    console.log("Results from array \'array1\'", array1);
    console.log("Results from array \'array0\'", array0);
});







