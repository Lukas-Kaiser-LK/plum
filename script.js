const createmeetingbutton = document.querySelector("#createmeeting");
const meetingslist = document.querySelector("#meetingslist");

createmeetingbutton.addEventListener(
    "click",
    function () {
        const meetingitem = document.createElement("li");
        const meetingname = document.createElement("span")
        meetingname.tabIndex = "0"
        meetingitem.append(meetingname)
        meetingname.textContent = "New Meeting";
        meetingslist.prepend(meetingitem)
        meetingname.click()
    }
);

meetingslist.addEventListener(
    "click",
    function (clickinfo) {
        const clickedmeeting = clickinfo.target;
        const editablemeeting = document.createElement("input"); //creating an editable meeting as an input
        if(clickedmeeting.tagName == "SPAN") {
            editablemeeting.value = clickedmeeting.textContent; //the default value of the editable meeting
            clickedmeeting.replaceWith(editablemeeting)
            editablemeeting.focus()
            editablemeeting.select()

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

