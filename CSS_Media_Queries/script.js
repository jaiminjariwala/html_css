const $desktop = 1200;
const $laptop = 992;
const $tablet = 694;
const $mobile = 348;

let updateScreenWidth = () => {
    let myWidth = window.innerWidth;
    document.getElementById('size').textContent = `Width: ${myWidth} px`;
    updateScreenSizeStatus(myWidth);
};

let updateScreenSizeStatus = (width) => {
    let statusMessage = "";
    let statusElement = document.getElementById('status');

    if (width >= $desktop) {
        statusMessage = `You are in <span class="bold">Desktop View</span>`;
    }
    else if (width >= $laptop) {
        statusMessage = `You are in <span class="bold">Laptop View</span>`;
    }
    else if (width >= $tablet) {
        statusMessage = `You are in <span class="bold">Tablet View</span>`;
    }
    else if (width >= $mobile) {
        statusMessage = `You are in <span class="bold">Pixel Unfold Mobile View</span>`;
    }
    else {
        statusMessage = `You are in <span class="bold">Pixel Fold Mobile View</span>`;
    }

    statusElement.innerHTML = statusMessage;
};

// Initial update when the page loads
updateScreenWidth();

// event listener for the resize event
window.addEventListener("resize", updateScreenWidth);
