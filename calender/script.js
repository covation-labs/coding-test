var months = [31,28,31,30,31,30,31,31,30,31,30,31];
var monthNames = ['jan','feb','march','april','may','june','july','august','september','october','november','december']
var days = ['sun','mon','tue','wed','thur','fri','sat']
var events = {}
var date = new Date(new Date().getFullYear(), 0, 1);

var startDay = date.getDay();

console.log(startDay);

var searchDate = "";

$(document).ready(function () {

$("#eventCont").hide();

let j =0;
var temp = 0;
while(true){

    if(j==startDay){
        for(let i = 0; i<=11;i++){
            let monthDiv = document.createElement("div");
            let monthName = document.createElement("div");
            temp = temp+j;
            monthDiv.classList.add("month");
            monthName.classList.add("monthName")
            monthName.innerHTML=monthNames[i];
            document.getElementById("dates").appendChild(monthName);
            document.getElementById("dates").appendChild(monthDiv);
            j=temp%7;
            for(j;j>0;j--){
                let dateDiv = document.createElement("div");
                monthDiv.appendChild(dateDiv);
            }
            let month = months[i]
            for(let k = 1;k<=month;k++){
                let dateDiv = document.createElement("div");
                dateDiv.innerHTML=k;
                dateDiv.setAttribute('data-day',""+k);
                dateDiv.setAttribute('data-month',""+(i+1));


                $(dateDiv).click(function (e) { 
                    e.preventDefault();
                    $("#eventCont").show();

                    searchDate = ""+dateDiv.dataset.day+","+dateDiv.dataset.month

                    console.log(searchDate)

                    document.getElementById("eventList").innerHTML="";
                    if(events[searchDate]){
                        let list = "";
                        events[searchDate].forEach(element => {
                            list = list + `<div class="eventItem"><p>`+element+`</p></div>`;
                        });
                        document.getElementById("eventList").innerHTML=list;
                        $("#noEvents").hide();
                    }
                    else{
                        $("#noEvents").show();
                    }
                   

                });


                monthDiv.appendChild(dateDiv);
                j++
            }
        }
        break;
    }
j++;
}


$("#addEvent").click(function (e) { 
    let list="";
    e.preventDefault();
    let txtval = document.getElementById("txtarea").value;
    if(events[searchDate])
    {   
        events[searchDate].push(txtval);
        events[searchDate].forEach(element => {
            list = list + `<div class="eventItem"><p>`+element+`</p></div>`;
        });
    }
    else{
        events[searchDate]=[txtval]
        list = `<div class="eventItem"><p>`+txtval+`</p></div>`;
        $("#noEvents").hide();
    }
    document.getElementById("eventList").innerHTML=list;
    document.getElementById("txtarea").value="";
});

$("#close").click(function (e) { 
    e.preventDefault();
    $("#eventCont").hide();
});
    
});