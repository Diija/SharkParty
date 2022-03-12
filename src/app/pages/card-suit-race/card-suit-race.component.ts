import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAppleWhole, faArrowLeft, faBomb, faChevronLeft, faChevronRight, faFish, faHorseHead, faIceCream, faMitten, faPersonPraying, faPlane, faPoop, faSkull, faToiletPaper, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { cardInterface } from './interface/cardInterface';
import { cardSuitRaceGameStateInterface } from './interface/cardSuitRaceGameState';

@Component({
  selector: 'app-card-suit-race',
  templateUrl: './card-suit-race.component.html',
  styleUrls: ['./card-suit-race.component.css']
})
export class CardSuitRaceComponent implements OnInit {

  icons = {
    faApple : faAppleWhole,
    faBomb : faBomb,
    faFish : faFish,
    faIceCream : faIceCream,
    faHorseHead : faHorseHead,
    faMitten : faMitten,
    faPersonPraying : faPersonPraying,
    faPlane : faPlane,
    faPoop : faPoop,
    faSkull : faSkull,
    faToiletPaper : faToiletPaper,
    faWineBottle : faWineBottle,
    faArrowLeft : faArrowLeft,
    faChevronLeft : faChevronLeft,
    faChevronRight : faChevronRight,
  }

  blockDraw = false;
  cards : cardInterface[] = [
    {"id":0, "card_position" : 0, "icon" : this.icons.faApple, "team_name":"Time maçã", "win_count" : 0},
    {"id":1, "card_position" : 0, "icon" : this.icons.faBomb, "team_name":"Time Bomba", "win_count" : 0},
    {"id":2, "card_position" : 0, "icon" : this.icons.faFish, "team_name":"Time Peixe", "win_count" : 0},
    {"id":3, "card_position" : 0, "icon" : this.icons.faIceCream, "team_name":"Time Sorvete", "win_count" : 0},
  ]

  gameState : cardSuitRaceGameStateInterface = {
    view : 'menu',
    shownCards : 0,
    race_size : 0,
    race_map : [],
    hidden_map : [],
  };

  instruction = {
    messages : [
      `A pista de corrida é definida por tantas cartas viradas para baixo.`,
      "Cada rodada, é virada uma carta aleatória, se for uma carta do seu time, você avança uma casa!",
      "Quando todos avançarem e deixarem um nível 'para trás' é virado uma carta da pista, se for a mesma que a sua, você volta uma casa.",
      "Vence o primeiro que ultrapassar a última carta. Quem ganhar, decide a punição dos perdedores!"
    ],
    state : 0,
    stateZeroCardCount : 0,
    stateMaxCardCount : 0,
  }

  constructor(
    private Router : Router,
  ) { }

  ngOnInit(): void {
  }

  resetToMenu(): void {
    this.instruction.state = 0;
    this.instruction.stateZeroCardCount = 0;
    this.resetGameState();

    this.gameState.view = 'menu';
  }
  
  resetGameState(): void {
    this.cards.forEach(card => {
      card.card_position = 0;
    })
    this.gameState.shownCards = 0;
    this.gameState.race_size = 0;
    this.gameState.race_map = [];
    this.gameState.hidden_map = [];
  }

  changeInstructionState(value : number) {
    this.instruction.state += value;

    if(this.instruction.state === 0) {
      this.instruction.stateMaxCardCount = Math.floor(window.innerWidth / 140);
      let interval = setInterval(() => {
        if(this.instruction.stateZeroCardCount < this.instruction.stateMaxCardCount) {
          this.instruction.stateZeroCardCount += 1;
        } else {
          clearInterval(interval);
        }
      }, 200)
    }
  }

  startGame(): void {
    this.resetGameState();
    this.gameState.race_size = Math.floor(window.innerWidth / 140);

    for(let i = 0; i < 4; i++) {
      let newLine : cardInterface[] = [];
      this.gameState.race_map.push(newLine);
      for(let j = 0; j < this.gameState.race_size; j++) {
        let newSlotCard : cardInterface = {
          "card_position" : j,
          "icon" : null,
          "id" : 0,
          "team_name" : "SLOT",
          "win_count" : 0,
        }
        this.gameState.race_map[i][j] = newSlotCard;
      }
      this.gameState.race_map[i][0] = this.cards[i];
    }

    for(let i = 0; i < this.gameState.race_size; i++) {
      let chosenCard = Math.floor((Math.random()*4));
      let newHiddenCard : cardInterface = {
        "card_position" : i,
        "icon" : this.cards[chosenCard].icon,
        "team_name" : this.cards[chosenCard].team_name,
        "win_count" : 0,
        "id" : this.cards[chosenCard].id,
        "hidden_card" : true,
      }
      this.gameState.hidden_map.push(newHiddenCard);
    }

    this.gameState.view = 'game';
  }

  drawCard(): void {
    this.blockDraw = true;
    this.gameState.draw_card = undefined;
    setTimeout(() => {
      let chosenCard = Math.floor((Math.random()*4));
      this.gameState.draw_card = this.cards[chosenCard];
      this.advanceCard(chosenCard)
    }, 1);

    setTimeout(() => {
      this.gameState.draw_card = undefined;
      this.blockDraw = false;
    }, 2500);
  }

  advanceCard(cardLine : number): void {
    setTimeout(() => {
      this.gameState.race_map[cardLine][this.cards[cardLine].card_position].advance_animation = true;

      if(this.cards[cardLine].card_position === this.gameState.race_size - 1) {
        this.cards[cardLine].win_count = this.cards[cardLine].win_count++;
        this.gameState.last_winner = this.cards[cardLine]
        this.gameState.view = 'winner';
      }

      setTimeout(() => {
        this.gameState.race_map[cardLine][this.cards[cardLine].card_position+1] = this.gameState.race_map[cardLine][this.cards[cardLine].card_position];
        this.gameState.race_map[cardLine][this.cards[cardLine].card_position] = {
          "card_position" : this.cards[cardLine].card_position,
          "icon" : null,
          "id" : 0,
          "team_name" : "SLOT",
          "win_count" : 0,
        }
        this.cards[cardLine].card_position++;
        this.gameState.race_map[cardLine][this.cards[cardLine].card_position].advance_animation = false;

        let anyCardBeforeLastShownCard = false;
        this.cards.forEach(card => {
          if(card.card_position <= this.gameState.shownCards) {
            anyCardBeforeLastShownCard = true;
          }
        });

        if(!anyCardBeforeLastShownCard) {
          this.turnNextHiddenCard();
        }
      }, 1000);
    }, 600);
  }

  backCard(cardLine : number): void {
    setTimeout(() => {
      this.gameState.race_map[cardLine][this.cards[cardLine].card_position].back_animation = true;
      
      setTimeout(() => {
        this.gameState.race_map[cardLine][this.cards[cardLine].card_position-1] = this.gameState.race_map[cardLine][this.cards[cardLine].card_position];
        this.gameState.race_map[cardLine][this.cards[cardLine].card_position] = {
          "card_position" : this.cards[cardLine].card_position,
          "icon" : null,
          "id" : 0,
          "team_name" : "SLOT",
          "win_count" : 0,
        }
        this.cards[cardLine].card_position--;
        this.gameState.race_map[cardLine][this.cards[cardLine].card_position].back_animation = false;
      }, 1000)
    }, 600);

  }

  turnNextHiddenCard(): void {
    this.gameState.hidden_map[this.gameState.shownCards].turn_in_animation = true;
    setTimeout(() => {
      this.gameState.hidden_map[this.gameState.shownCards].hidden_card = false;
      this.gameState.hidden_map[this.gameState.shownCards].turn_out_animation = true;

      setTimeout(() => {
        this.backCard(this.gameState.hidden_map[this.gameState.shownCards].id);
        this.gameState.shownCards++;
      }, 500);
    }, 500);
  }

  redirectTo(to : string): void {
    this.Router.navigate([to]);
  }

}
