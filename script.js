const createmeetingbutton = document.querySelector("#createmeeting");
const meetingslist = document.querySelector("#meetingslist");

//Create a new meeting item.
createmeetingbutton.addEventListener(
    "click",
    function () {
        const meetingitem = document.createElement("li");
        const meetingname = document.createElement("span")
        const today = new Date().toLocaleDateString("us-US",{day: "numeric", month: "long", year: "numeric"})
        meetingname.tabIndex = "0"
        meetingitem.append(meetingname)
        meetingname.textContent = "New Meeting | " + today;
        meetingslist.prepend(meetingitem)
        meetingname.click()
    }
);

// Shotcut for creating a meeting.
let ntimestamp
let mtimestamp
addEventListener(
    "keydown",
    function (keyinfo) {
        if(keyinfo.target.tagName != "INPUT") { //If user is not curently editing a meeting.
            if(keyinfo.key == "n") {
                // Measures N timestamp.
                ntimestamp = keyinfo.timeStamp
                // Supportive shortcut: If you try to press N & M at the time, sometimes you might press M first. This makes sures meetting will be created anyway.
                if(ntimestamp - mtimestamp < 50) {
                    keyinfo.preventDefault()
                    createmeetingbutton.click()
                }
            }

            if(keyinfo.key == "m") {
                // Measures M timestamp.
                mtimestamp = keyinfo.timeStamp
                // Main shortcut: Press N then M to create a meeting.
                if(mtimestamp - ntimestamp < 600) {
                    keyinfo.preventDefault()
                    createmeetingbutton.click()
                }
            }
        }


    }
)

//Edit meeting names.
meetingslist.addEventListener(
    "click",
    function (clickinfo) {
        //Enable name editing for the meetings.
        const clickedmeeting = clickinfo.target;
        const editablemeeting = document.createElement("input"); //creating an editable meeting as an input
        if(clickedmeeting.tagName == "SPAN") {
            editablemeeting.value = clickedmeeting.textContent; //the default value of the editable meeting
            clickedmeeting.replaceWith(editablemeeting)
            editablemeeting.focus()
            editablemeeting.select()

        //Save the edited meeting name.
            editablemeeting.addEventListener(
                "keydown",
                function (keyinfo) {
                    if(keyinfo.key == "Escape" || keyinfo.key == "Enter") {
                        editablemeeting.blur()
                    }

                }
            )
            editablemeeting.addEventListener(
                "blur",
                function (focusinfo) {
                    clickedmeeting.textContent = editablemeeting.value
                    clickedmeeting.textContent = clickedmeeting.textContent.trim()
                    editablemeeting.replaceWith(clickedmeeting)
                }
            )
            
        }
    }     
)