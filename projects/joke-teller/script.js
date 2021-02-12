// @ts-check
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// const audio = document.getElementById('audio1');

// Disable/Enable button so joke can finish playing
function toggleButton() {
    button.disabled = !button.disabled;
}

// Pass joke to VoiceRSS API
function tellMe(joke) {
    const jokeString = joke.trim().replace(/ /g, '%20');
    // VoiceRSS Speech Parameters
    VoiceRSS.speech({
        key: apiKey,
        src: jokeString,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

}

// Get Jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Assign One or Two Park Joke
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }

        // Pass Joke to VoiceRSS API
        tellMe(joke);
        //Disable Button
        toggleButton();
    } catch (err) {
    }
}

// Event Listensers
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);

