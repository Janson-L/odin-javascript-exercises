const repeatString = function(input_str, rep_count) {
    if (rep_count < 0){
        return "ERROR"
    }

    let final_str = ""
    for (i=0;i<rep_count;i++){
        final_str +=input_str
    }

    return final_str
};

// Do not edit below this line
module.exports = repeatString;
