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
        // console.log(new Date("us-Us" ,{day: "numeric", month: "long", year: "numeric"}))
        console.log(new Date().toLocaleDateString("us-US",{day: "numeric", month: "long", year: "numeric"}))  
    }
);

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
                    console.log(keyinfo.key)
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