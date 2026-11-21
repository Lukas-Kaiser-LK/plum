const createmeetingbutton = document.querySelector("#createmeeting");
const meetingslist = document.querySelector("#meetingslist");

createmeetingbutton.addEventListener(
    "click",
    function () {
        const meetingitem = document.createElement("li");
        const meetingname = document.createElement("span")
        meetingitem.append(meetingname)
        meetingname.textContent = "New Meeting";
        meetingslist.prepend(meetingitem)
    }
);

meetingslist.addEventListener(
    "click",
    function (clickinfo) {
        const clickedmeeting = clickinfo.target;
        const editablemeeting = document.createElement("input"); //creating an editable meeting as an input
        console.log (clickedmeeting.tagName)
        if(clickedmeeting.tagName == "SPAN") {
            editablemeeting.value = clickedmeeting.textContent; //the default value of the editable meeting
            clickedmeeting.textContent = '';
            clickedmeeting.append(editablemeeting); //replace the text content of the clickedmeeting with editable meeting
        }
    }     
)

