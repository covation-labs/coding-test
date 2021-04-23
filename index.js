const date=new Date();

function render()
{

document.querySelector(".month-grid").innerHTML = ``;   

//Month check
let month=date.getMonth();
let year=date.getFullYear();
    let monthname=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    document.querySelector(".month").innerHTML = `
    <div class="month-year">
    ${monthname[month]} ${year}
    </div>`; 

//Date Display
let monthEndDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

let prevMonthEndDate = new Date(date.getFullYear(),date.getMonth(),0).getDate();

let MonthEndDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

let nextMonthDay = 7 - MonthEndDay - 1;

//Privous Month Dates
let monthFirstDay = date.getDay();

for(let d = monthFirstDay; d > 1 ; d--)
{
    document.querySelector(".month-grid").innerHTML += `
    <div class="grid-element-grey">
    <div class="date-grey">${prevMonthEndDate-d+1}</div>
    </div>`;
}

//Current Month Dates
for(let i=1; i<=monthEndDate; i++)
{
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth())
    {
        document.querySelector(".month-grid")
        .innerHTML += `
        <div class="grid-element" value=${i}>
        <div class="currdate">${i}</div>
        </div>`;
    }
    else
    {
        document.querySelector(".month-grid")
        .innerHTML += `
        <div class="grid-element" value=${i}>
        <div class="date">${i}</div>
        </div>`;
    }
}

// Next Month Dates
for(let n = 1; n <= nextMonthDay; n++){
    document.querySelector(".month-grid")
    .innerHTML += `
    <div class="grid-element-grey">
    <div class="date-grey">${n}</div>
    </div>`;
}
    
let cover = document.querySelector(".popup-cover");
let popupbox = document.querySelector(".popup-box");

let popup = document.querySelectorAll(".grid-element"); 
for ( let i = 0; i < popup.length; i++) {
    let day = i+1;
    popup[i].addEventListener("click", () => {
        cover.style.display = "grid";      
       });   
  }

let x = document.querySelector(".close-popup");
x.addEventListener("click", () => {
      cover.style.display = "none";
  });  

let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
      cover.style.display = "none";
  });
   
window.addEventListener("click", () => {
    if (event.target == cover) {
        cover.style.display = "none";
      }
  });

}
   


//Month Change
document.querySelector(".left").addEventListener("click", () => {
    date.setMonth(date.getMonth()-1);
    render();
});
    
document.querySelector(".right").addEventListener("click", () => {
    date.setMonth(date.getMonth()+1);
    render();
});

//Today
document.querySelector(".today").addEventListener("click", () => {
    document.location.reload();
});


render()