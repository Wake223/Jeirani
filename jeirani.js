const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Tamashshi shesvlis punqcia
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click",() =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //tamashis tamashis punqcia
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands Img')
        


        hands.forEach(hand =>{
            
            
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        });
        //compiuteris archevani
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach( option=> {
            option.addEventListener("click",function() {                //Computer Choice
                const computerNumber = Math.floor(Math.random()* 3); 
                const computerChoise = computerOptions[computerNumber];
                //aq vidzaxebt shedarebis punqcias
                setTimeout(() =>{
                    console.log(this);3
                    console.log(computerChoise);
                    compareHands(this.textContent,computerChoise);
                    //jeiranis suratebis atvirtva
                     playerHand.src = `./${this.textContent}.png`;
                     computerHand.src =`./${computerChoise}.png`;
                    }, 2000)
                

            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";        
                
            });
              
        });
    };

  //gazrdis punqcia
    const updateScore =() =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

     const compareHands = (playerChoice, computerChoise) =>{
         //textis apdeiti
         const winner = document.querySelector('.winner');
         //pris shemtxveva
         if(playerChoice === computerChoise){
             winner.textContent = 'It is a tie';
             return;
         }
         //Chhis shemtxveva
         if(playerChoice === 'rock'){
             if(computerChoise === 'scissors'){
                 winner.textContent ='Player Wins';
                
                pScore++;
                updateScore();
                return ;
             }else{
                 winner.textContent ='Computer Wins';
                 cScore++;
                 updateScore();
                 return;
             }
         }
         //bade
         if(playerChoice === 'paper'){
            if(computerChoise === 'rock'){
                winner.textContent ='Player Wins';
                pScore++;
                updateScore();
                return 0;
                
            }else{
                winner.textContent ='Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //makratelii bozebo
        if(playerChoice === 'scissors'){
            if(computerChoise === 'paper'){
                winner.textContent ='Player Wins';
                pScore++;
                updateScore();
                return 0;
            }else{
                winner.textContent ='Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
     }

    startGame();
    playMatch();
};

game();