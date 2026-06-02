function songTypo(response){
    console.log(response.data.answer);
    new Typewriter('#song-generator', {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    loop:false,
    cursor:" ",
});
}

function songGenerator(event){
    event.preventDefault();

    let searchBox=document.querySelector("#searchBox");

    let apiKey="fa802d0et31047o097e3a46943abb4fe";
    let prompt=`Generate an original Telugu movie-style song about ${searchBox.value}`;
    let context="Write exactly 6 short lines. Use Telugu words written in English letters. Separate each line with <br/>. Make it sound like a Telugu movie song.";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let songGenerator=document.querySelector("#song-generator");
    songGenerator.classList.remove("hidden")
    songGenerator.innerHTML=`<div class="blink">⌛ Genarating a song on  ${searchBox.value}</div>`;
    axios.get(apiUrl).then(songTypo);
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener('click',songGenerator);