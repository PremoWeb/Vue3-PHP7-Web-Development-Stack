// Prevent scrolling on touch activity
var stopScrolling = false;

window.addEventListener("touchmove", handleTouchMove, {
  passive: false
});

function handleTouchMove(e) {
	if (!stopScrolling) return;
  e.preventDefault();
}

function onTouchStart() {
    stopScrolling = true;
}

function onTouchEnd() {
  stopScrolling = false;
}