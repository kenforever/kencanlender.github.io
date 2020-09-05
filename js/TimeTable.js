$(document).ready(function(){
    $.getJSON("/courseCalendar.json", function(data){
        var number=0
        var exchange = ["一","二","三","四","五"];
        var time_temp = data["節次"];
        var day1_temp = data["一"];
        var day2_temp = data["二"];
        var day3_temp = data["三"];
        var day4_temp = data["四"];
        var day5_temp = data["五"];
        var n = 1;
        $.each(time,function(index){
            var time = time_temp[index].trim().split("\n")[1];
            // var day1 = day1_temp[index].replace(/\n/g,"<br>")
            // var day2 = day2_temp[index].replace(/\n/g,"<br>")
            // var day3 = day3_temp[index].replace(/\n/g,"<br>")
            // var day4 = day4_temp[index].replace(/\n/g,"<br>")
            // var day5 = day5_temp[index].replace(/\n/g,"<br>")
            var day1 = day1_temp[index].trim().split("\n");
            var day2 = day2_temp[index].trim().split("\n");
            var day3 = day3_temp[index].trim().split("\n");
            var day4 = day4_temp[index].trim().split("\n");
            var day5 = day5_temp[index].trim().split("\n");

            $('<tr><th class="c1">'+time+'</th><th class="otherC">'+day1[0]+'</th><th class="otherC">'+day2[0]+'</th><th class="otherC">'+day3[0]+'</th><th class="otherC">'+day4[0]+'</th><th class="otherC">'+day5[0]+'</th></tr>').appendTo("tbody")
        });
    });
});