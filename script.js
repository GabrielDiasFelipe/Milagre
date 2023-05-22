function playAudio() {
    let x = document.getElementById("myAudio")
    x.play()
    document.getElementById('sec').style.display='none'
    document.getElementById('sec1').style.display='inline-block'
    document.getElementsByTagName('body')[0].style.backgroundImage='url(background.gif)'
}    
