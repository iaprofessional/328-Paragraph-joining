function submit(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++){
        inputs.push(document.getElementById("name_student_" + i).value);
        document.getElementById("display_name").innerHTML = inputs.join(". ");
    }
    for(var i = 1 ; i <=6 ; i++){
        inputs.push(document.getElementById("name_student_2.0_" + i).value);
        document.getElementById("display_name").innerHTML = inputs.join(". ");
    }
}