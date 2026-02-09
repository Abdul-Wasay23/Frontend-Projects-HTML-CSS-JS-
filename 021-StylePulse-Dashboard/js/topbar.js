// Dropdown Toggle Function
function initializeDropdowns() {
    const dropdowns = [
        { trigger: document.querySelector(".mailbox"), content: document.querySelector(".mail-messages") },
        { trigger: document.querySelector(".notification-box"), content: document.querySelector(".notification-messages-list") },
        { trigger: document.querySelector(".user-profile-box"), content: document.querySelector(".user-profile-dropdown") }
    ];

    dropdowns.forEach((item, index) => {
        if (!item.trigger || !item.content) return;

        item.trigger.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle current
            const isAhidden = item.content.classList.contains("d-none");

            // Close all first
            dropdowns.forEach((otherItem) => {
                if (otherItem.content) {
                    otherItem.content.classList.add("d-none");
                }
            });

            // If it was hidden, open it now (remove d-none)
            if (isAhidden) {
                item.content.classList.remove("d-none");
            }
        });
    });

    // Close all when clicking outside
    document.addEventListener("click", function (e) {
        dropdowns.forEach(item => {
            if (item.trigger && item.content) {
                if (!item.trigger.contains(e.target) && !item.content.contains(e.target)) {
                    item.content.classList.add("d-none");
                }
            }
        });
    });
}