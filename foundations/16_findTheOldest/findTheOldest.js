const findTheOldest = function (people_details) {
    const ages = people_details.map(calculatePeopleAge)
    const oldest_idx = ages.indexOf(Math.max(...ages));

    return people_details[oldest_idx];
};


function calculatePeopleAge(people_detail){

    const yod = people_detail["yearOfDeath"] || new Date().getFullYear();
    const yob = people_detail["yearOfBirth"]

    return yod - yob;
}


// Do not edit below this line
module.exports = findTheOldest;
