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

// For 
meetingslist.addEventListener(
    "click",
    function (clickinfo) {
        const clickedmeeting = clickinfo.target;
        const editablemeeting = document.createElement("input"); //creating an editable meeting as an input
        if(clickedmeeting.tagName == "SPAN") {
            editablemeeting.value = clickedmeeting.textContent; //the default value of the editable meeting
            clickedmeeting.replaceWith(editablemeeting)

            editablemeeting.addEventListener(
                "blur",
                function (focusinfo) {
                    console.log(focusinfo.target.value)
                    clickedmeeting.textContent = editablemeeting.value
                    editablemeeting.replaceWith(clickedmeeting)
                }
            )
            
        } 
    }     
)

