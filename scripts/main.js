// variable definitions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// function definition
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// text strings
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// event listener
randomize.addEventListener('click', result);

// function definition 
function result() {

    // assign random array elements to the text items
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // replace empty spaces with randomly generated items
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    // if a name is entered, replace Bob with chosen name
    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    // if uk version is chosen, convert weight and temperature
    if(document.getElementById("uk").checked) {
        let weight = Math.round(300/14) + ' stone';
        let temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
        
        // replace elements in text
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
