var totalstudentlist =[]
function submit (){
    var studentlist =[ ];
    for (var j = 1; j <= 4; j++) {
        var studentname=document.getElementById("name_of_the_student_"+j).value
      studentlist.push(studentname)
      console.log(studentlist)
    } 
    var studentlength = studentlist.length
    for (var k = 0; k < studentlength; k++) {
     totalstudentlist.push("<h4>name-"+ studentlist[k]+"</h4>") 
    }
    document.getElementById("display_name_with_commas").innerHTML=totalstudentlist
    var removecommaslist=totalstudentlist.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=removecommaslist
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
} 
function sorting (){
    totalstudentlist.sort()
    var sortedarray=[]
    var studentlength =totalstudentlist.length
    for (var l= 0; l < studentlength; l++) {
      sortedarray.push(totalstudentlist[l])
    }
    var removecommassorted=sortedarray.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=removecommassorted
}


