console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('Let-Me-Love-You(PaglaSongs).mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

 {songName: "let me love you", filePath: "song/Let-Me-Love-You(PaglaSongs).mp3", coverPath: "cover2.jpg"},
 {songName: "Chal tere ishq mai", filePath: "song/Chal_Tere_Ishq_Mein_-_Gadar_2_128_Kbps.mp3", coverPath: "chal tere ishq mai.jpeg"},
 {songName: "Kho Gaye", filePath: "Kho-Gaye(PaglaSongs).mp3", coverPath: "kho gaye img.jpeg"},
 {songName: "Dil main ho tum", filePath: "song/Dil-Mein-Ho-Tum(PaglaSongs).mp3", coverPath: "dil mai ho tum.jpeg"},
]
songItems.forEach((element) => {
    element.getElementsByTagName("img")[0].src = songs[i].songName
    
});

    

// audioElement.play();    

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//  Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    // Update Seekbar  
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})