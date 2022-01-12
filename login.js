function Login(){
Player1Name=document.getElementById("texty").value
Player2Name=document.getElementById("texty2").value
localStorage.setItem("Details1",Player1Name)
localStorage.setItem("Details2",Player2Name)
window.location="game_page.html"

}
