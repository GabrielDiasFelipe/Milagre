function playAudio() {
    let x = document.getElementById("myAudio")
    x.play()
    document.getElementById('sec').style.display='none'
    document.getElementsByTagName('section')[0].style.display='none'
    document.getElementById('sec1').style.display='inline-block'
}    
