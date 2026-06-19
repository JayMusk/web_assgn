document.addEventListener("DOMContentLoaded", () => {

    // ===== DATE PICKER =====
    const month = document.querySelector(".date-picker input[placeholder='Month']");
    const day = document.querySelector(".date-picker input[placeholder='Day']");
    const hour = document.querySelector(".date-picker input[placeholder='Hour']");
    const dateDisplay = document.querySelector(".date-picker input[type='text']:last-of-type");

    function updateDate() {
        dateDisplay.value = `${month.value}/${day.value} - ${hour.value}:00`;
    }

    month.addEventListener("input", updateDate);
    day.addEventListener("input", updateDate);
    hour.addEventListener("input", updateDate);

    // ===== COST CALCULATOR =====
    const description = document.querySelector(".vehicle-info textarea");

    const serviceCostInput =
        document.querySelector(".calculator input[placeholder='Service cost']");

    const partsCostInput =
        document.querySelector(".calculator input[placeholder='Parts cost']");

    const totalCostInput =
        document.querySelector(".calculator input[type='text']:last-of-type");

    const SERVICE_COST = 5000;
    const PART_COST = 1000;

    serviceCostInput.value = SERVICE_COST;

    function calculatePartsCost() {

        const text = description.value.trim();

        if (text === "") {
            return 0;
        }

        // Count parts separated by commas
        const parts = text.split(",")
                          .map(part => part.trim())
                          .filter(part => part !== "");

        return parts.length * PART_COST;
    }

    function updateTotal() {

        const partsCost = calculatePartsCost();

        partsCostInput.value = partsCost;
        totalCostInput.value = SERVICE_COST + partsCost;
    }

    description.addEventListener("input", updateTotal);

    updateDate();
    updateTotal();

    // ===== BOOK BUTTON =====
    const bookBtn = document.querySelector(".calculator button");

    bookBtn.addEventListener("click", () => {

        alert(
            `Booking Successful!\n\n` +
            `Date: ${dateDisplay.value}\n` +
            `Total Cost: R${totalCostInput.value}`
        );

    });

});