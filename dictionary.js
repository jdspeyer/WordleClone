/**
 * Adds a method to strings for easy replacement of characters
 * @param {*} index index to be replaced 
 * @param {*} replacement string to be replaced at index
 * @returns the updated string
 */
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

/**
 * sleep
 * 
 * Sleeps for the duration in SECONDS. Used to add delays for
 * animations an suspense!
 * @param {*} duration The duration of the delay in seconds.
 * @returns 
 */
function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration * 1000)
    })
}

/**
 * shakeButton
 * 
 * Shakes the button to indicate to the user that you should not be using
 * "return" to enter your guess.
 * @param {*} e 
 * @returns 
 */
async function shakeButton(e) {
    e.preventDefault();
    let submitButton = document.getElementById("submitGuess");
    submitButton.classList.add("shakeButton")
    await sleep(1);
    submitButton.classList.remove("shakeButton")
    return false;
}

/**
 * removeAlert
 * 
 * Removes the alert shown on screen.
 */
function removeAlert() {
    let alertWrapper = document.getElementById("alertWrapper");
    alertWrapper.classList.add('hidden');

    let alertBox = document.getElementById("alert");
    alertBox.classList.remove('scaleAlert');
}

/**
 * showAlert
 * 
 * shows a customizable alert on screen and forces the user to dismiss it before
 * continuing.
*/
function showAlert(title, message) {
    let alertWrapper = document.getElementById("alertWrapper");
    alertWrapper.classList.remove('hidden');

    let alertBox = document.getElementById("alert");

    let alertTitle = document.getElementById("alertId");
    alertTitle.innerHTML = title;

    let alertMessage = document.getElementById("alertMessage");
    alertMessage.innerHTML = message;

    alertBox.classList.add('scaleAlert');
}

let dictionary = ['Abuse', 'Adult', 'Agent', 'Anger', 'Apple', 'Award', 'Basis', 'Beach', 'Birth', 'Block', 'Blood', 'Board', 'Brain', 'Bread', 'Break', 'Brown', 'Buyer', 'Cause', 'Chain', 'Chair', 'Chest', 'Chief', 'Child', 'China', 'Claim', 'Class', 'Clock', 'Coach', 'Coast', 'Court', 'Cover', 'Cream', 'Crime', 'Cross', 'Crowd', 'Crown', 'Cycle', 'Dance', 'Death', 'Depth', 'Doubt', 'Draft', 'Drama', 'Dream', 'Dress', 'Drink', 'Drive', 'Earth', 'Enemy', 'Entry', 'Error', 'Event', 'Faith', 'Fault', 'Field', 'Fight', 'Final', 'Floor', 'Focus', 'Force', 'Frame', 'Frank', 'Front', 'Fruit', 'Glass', 'Grant', 'Grass', 'Green', 'Group', 'Guide', 'Heart', 'Henry', 'Horse', 'Hotel', 'House', 'Image', 'Index', 'Input', 'Issue', 'Japan', 'Jones', 'Judge', 'Knife', 'Laura', 'Layer', 'Level', 'Lewis', 'Light', 'Limit', 'Lunch', 'Major', 'March', 'Match', 'Metal', 'Model', 'Money', 'Month', 'Motor', 'Mouth', 'Music', 'Night', 'Noise', 'North', 'Novel', 'Nurse', 'Offer', 'Order', 'Other', 'Owner', 'Panel', 'Paper', 'Party', 'Peace', 'Peter', 'Phase', 'Phone', 'Piece', 'Pilot', 'Pitch', 'Place', 'Plane', 'Plant', 'Plate', 'Point', 'Pound', 'Power', 'Press', 'Price', 'Pride', 'Prize', 'Proof', 'Queen', 'Radio', 'Range', 'Ratio', 'Reply', 'Right', 'River', 'Round', 'Route', 'Rugby', 'Scale', 'Scene', 'Scope', 'Score', 'Sense', 'Shape', 'Share', 'Sheep', 'Sheet', 'Shift', 'Shirt', 'Shock', 'Sight', 'Simon', 'Skill', 'Sleep', 'Smile', 'Smith', 'Smoke', 'Sound', 'South', 'Space', 'Speed', 'Spite', 'Sport', 'Squad', 'Staff', 'Stage', 'Start', 'State', 'Steam', 'Steel', 'Stock', 'Stone', 'Store', 'Study', 'Stuff', 'Style', 'Sugar', 'Table', 'Taste', 'Terry', 'Theme', 'Thing', 'Title', 'Total', 'Touch', 'Tower', 'Track', 'Trade', 'Train', 'Trend', 'Trial', 'Trust', 'Truth', 'Uncle', 'Union', 'Unity', 'Value', 'Video', 'Visit', 'Voice', 'Waste', 'Watch', 'Water', 'While', 'White', 'Whole', 'Woman', 'World', 'Youth']