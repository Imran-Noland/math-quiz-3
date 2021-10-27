player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("player_question").innerHTML= "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;
function send(){
get_word= document.getElementById("word").value;
get_word1= document.getElementById("word1").value;

question= "<h4 id= 'word_display' q.>" + get_word + "X" + get_word1 + "</h4>";
input_box= "<br> answer: <input type='text' id='input_check_box'>";
check_button= "<br><br><button class= 'btn btn-info' onclick= 'check()'>check</button>";
row= question + input_box + check_button;
document.getElementById("output").innerHTML= row;
document.getElementById("word").value= "";
}