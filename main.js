//////////////////
//stats section
/////////////////

let player1 = "";
let player2 = "";
let play = $("#turn");

function rename(){
	player1 = prompt("Escribe el nombre del jugador 1", "Jugador 1");
	player2 = prompt("Escribe el nombre del jugador 2", "Jugador 2");
	
	if (player1 == null) {
		player1 = "Jugador 1"
	}
	if (player2 == null) {
		player2 = "Jugador 2"
	}

	$("#player1Name").html(player1);
	$("#player2Name").html(player2);
};

$("#renamePlayers").click(function(){
	rename();
});

rename();

////////////////
//game section
///////////////

function game() {
	let wins1 = $("#wins1");
	let	loses1 = $("#loses1");
	let	draws1 = $("#draws1");
	let	wins2 = $("#wins2");
	let	loses2 = $("#loses2");
	let	draws2 = $("#draws2");
	let turnCounter = $("#turnCounter");
	let	turn = 1;
	let turns = 0;
	let	min = 0;
	let	sec = 0;
	let	secs = 10;
	let time;

	function resetHtml() { 
		let cat = $(".selection");

		for (var i = 0; i < cat.length; i++) {
			cat[i].innerHTML = "";
		};

		cat.off();
	}

	///////////////
	//this function check gameplay time and count down time per turn
	function timing(stop) {
		if (stop == false) {
			time = setInterval(function(){
				document.getElementById("chronometer").innerHTML = "Tienes " + secs +" segundos para jugar";
				secs = secs -1;

				if (secs == 0) {
					if (turn == 1) {
						turn = 2;
						secs = 10;
					} else {
						turn = 1;
						secs = 10;
					};
				};

				sec ++;

				if (sec < 10){
						sec = "0" + sec
					} else if (sec == 60) {
						sec = 0;
						min ++;
					}

				document.getElementById("playingTime").innerHTML = min + ":" + sec; 
			}, 1000);
			time;
		} else {
			window.clearInterval(time);
		}
	}	

	//////////////
	//this function control gameplay
	function playing() {
		$("#selection1").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection2").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection3").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection4").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection5").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection6").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection7").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection8").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});

		$("#selection9").on("click", function() {
			if (turn == 1) {
				$(this).html("O");
				$(this).off();
				turn = 2;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			} else {
				$(this).html("X");
				$(this).off();
				turn = 1;
				turns ++;
				secs = 10;
				turnCounter.html(turns);
			};
		});
	}


	//////////////
	//this function return the 
	function resolve() {
		$("#game").on("click", function() {
			let cat = $(".selection");
			let draw = false;

			//turn evaluations
			if (turn == 1) {
				play.html(player1);
			} else {
				play.html(player2);
			}

			if (turns == 9) {
				draw = true;
			}

			//horizontal evaluations
			if ((cat[0].innerHTML !== "" && cat[1].innerHTML !== "") && cat[2].innerHTML !== "") {
				if (cat[0].innerHTML == cat[1].innerHTML && cat[1].innerHTML == cat[2].innerHTML ) {
					if (cat[0].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					}
					draw = false;
					resetHtml();
					timing(true);
				}
			}

			if ((cat[3].innerHTML !== "" && cat[4].innerHTML !== "") && cat[5].innerHTML !== "") {
				if (cat[3].innerHTML == cat[4].innerHTML && cat[4].innerHTML == cat[5].innerHTML ) {
					if (cat[3].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					} 
					draw = false;
					resetHtml();
					timing(true);
				}
			}

			if ((cat[6].innerHTML !== "" && cat[7].innerHTML !== "") && cat[8].innerHTML !== "") {
				if (cat[6].innerHTML == cat[7].innerHTML && cat[7].innerHTML == cat[8].innerHTML ) {
					if (cat[6].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					} 
					draw = false;
					resetHtml();
					timing(true);
				}
			}

			//vertical evaluations
			if ((cat[0].innerHTML !== "" && cat[3].innerHTML !== "") && cat[6].innerHTML !== "") {
				if (cat[0].innerHTML == cat[3].innerHTML && cat[3].innerHTML == cat[6].innerHTML ) {
					if (cat[0].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					}
					draw = false; 
					resetHtml();
					timing(true);
				}
			}

			if ((cat[1].innerHTML !== "" && cat[4].innerHTML !== "") && cat[7].innerHTML !== "") {
				if (cat[1].innerHTML == cat[4].innerHTML && cat[4].innerHTML == cat[7].innerHTML ) {
					if (cat[1].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					} 
					draw = false;
					resetHtml();
					timing(true);
				}
			}

			if ((cat[2].innerHTML !== "" && cat[5].innerHTML !== "") && cat[8].innerHTML !== "") {
				if (cat[2].innerHTML == cat[5].innerHTML && cat[5].innerHTML == cat[8].innerHTML ) {
					if (cat[2].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					} 
					draw = false;
					resetHtml();
					timing(true);
				}
			}

			//diagonal evaluations
			if ((cat[0].innerHTML !== "" && cat[4].innerHTML !== "") && cat[8].innerHTML !== "") {
				if (cat[0].innerHTML == cat[4].innerHTML && cat[4].innerHTML == cat[8].innerHTML ) {
					if (cat[0].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					} 
					draw = false;
					resetHtml();
					timing(true);
				}
			} 

			if ((cat[6].innerHTML !== "" && cat[4].innerHTML !== "") && cat[2].innerHTML !== "") {
				if (cat[6].innerHTML == cat[4].innerHTML && cat[4].innerHTML == cat[2].innerHTML ) {
					if (cat[6].innerHTML == "O") {
						alert("EL JUGADOR 1 GANA");
						let win = parseInt(wins1.html());
						let lose = parseInt(loses2.html());
						
						win += 1;
						lose += 1; 

						wins1.html(win);
						loses2.html(lose);
						$(this).off();

					} else {
						alert("EL JUGADOR 2 GANA");

						let win = parseInt(wins2.html());
						let lose = parseInt(loses1.html());
						
						win += 1;
						lose += 1; 

						wins2.html(win);
						loses1.html(lose);
						$(this).off();
					}
					draw = false; 
					resetHtml();
					timing(true);
				}
			}

			//draw evaluation
			if (draw == true) {
				alert("EMPATE");

				let draw1 = parseInt(draws1.html());
				let draw2 = parseInt(draws2.html());

				draw1 += 1;
				draw2 += 1;
				

				draws1.html(draw1);
				draws2.html(draw2);

				$("#game").off();
				resetHtml();
				timing(true);
			}
		}) 
	}

	timing(false);
	playing();
	resolve();
}

$("#start").click(function() {
	let cat = $(".selection");
	for (var i = 0; i < cat.length; i++) {
		cat[i].innerHTML = "";
	};

	play.html(player1);
	game();
})

$("#resetButton").click(function (){
	location.reload();
})