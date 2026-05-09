const removeFromArray = function(elements, ...removal_elements) {
    return elements.filter(element => !removal_elements.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
