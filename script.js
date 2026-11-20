const newmeetingbutton = document.querySelector("#newmeeting");
const meetings = document.querySelector("#meetings");


newmeetingbutton.addEventListener(
    "click",
    function () {
        const newmeeting = document.createElement("li");
        newmeeting.textContent = "New Meeting";
        meetings.prepend(newmeeting)
    }
);


meetings.addEventListener(
        "click",
        function (clickinfo) {
        const clickedmeeting = clickinfo.target;
        const editablemeeting = document.createElement("input"); //creating an editable meeting as an input
        editablemeeting.value = clickedmeeting.textContent; //the default value of the editable meeting
        clickedmeeting.textContent = ''
        clickedmeeting.append (editablemeeting) //replace the text content of the clickedmeeting with editable meeting
        console.log(clickedmeeting.tagName);
        }     
)