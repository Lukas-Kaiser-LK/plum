const newmeetingbutton = document.querySelector("#newmeeting");
const meetings = document.querySelector("#meetings");


newmeetingbutton.addEventListener(
    "click",
    function () {
        const newmeeting = document.createElement("li");
        newmeeting.textContent = "New Meeting"
        newmeeting.contentEditable = "true"
        meetings.prepend(newmeeting)
    }
);


// meetings.addEventListener(
//         "click",
//         function (clickinfo) {
//         const clickedmeeting = clickinfo.target
//         console.log(clickedmeeting);
//         const editablemeeting = document.createElement("input")
//         editablemeeting.value = clickedmeeting
//         editablemeeting.prepend(clickedmeeting)
//         }
        
// )