
window.onload = function() {

    const markReadBtn = document.querySelector(".mark-read-button");
    const notificationNumber = document.querySelector(".notification-number");
    const unreadNotifications = document.querySelectorAll(".unseen-notification");
    const unseenMarks = document.querySelectorAll(".unseen-mark");


    markReadBtn.addEventListener("click", function() {
        notificationNumber.innerHTML = "0";
        unreadNotifications.forEach(element => {
            element.classList.remove("unseen-notification");
        })
        unseenMarks.forEach(element => {
            element.remove();
        })
    });


}
