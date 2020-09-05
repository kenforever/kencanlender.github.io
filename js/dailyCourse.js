$(document).ready(function(){
$.getJSON("/courseCalendar.json", function(data){
    var date = new Date();
    var exchange = ["一","二","三","四","五"];
    var today = exchange[date.getDay()-1];
    var Course_Today_temp = data[today];
    var time_temp = data["節次"]
    var color = ["#26453D","#787D7B","#6E75A4","#BC9F77","#C1693C","#6E552F","#E87A90","#A28C37"]
    var colorNumber = 0
    var Course_Number = 0;
    var Course_Name_temp = []
    if (Course_Today_temp == null){
        $('<div  class="card" style="background-color:#CB1B45"><h1>今天放假!!</h1></div>').appendTo(".course")
        
    }
    $.each(Course_Today_temp,function(index) {
        if (Course_Today_temp[index] != "") {
            time = time_temp[index].trim().split("\n")[1];
            Course_Today = Course_Today_temp[index].trim().split("\n");
            var Course_Name = Course_Today[0];
            var add = Course_Name_temp.push(Course_Name);
            Course_Number += 1;
            if (Course_Name != Course_Name_temp[Course_Number-2]){
                colorNumber +=1
            }
            $('<div  class="card" style="background-color:'+color[colorNumber]+'"><h1>'+Course_Today[0]+'</h1><p>'+time+Course_Today[2]+'</p></div>').appendTo(".course")
            
        }
       
    });

});
});