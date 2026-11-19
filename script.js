const newmeetingbutton = document.querySelector("#newmeetingbutton");

newmeetingbutton.addEventListener(
    "click",
    function () {
        const newitem = document.createElement("li");
        newitem.textContent = "New Meeting"
        const meetingslist = document.querySelector("#listofmeetings");
        meetingslist.prepend(newitem)
    }
);