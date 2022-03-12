import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faBasketShopping, faChessQueen, faChevronLeft, faChevronRight, faComments, faCrown, faDiceFive, faDiceFour, faDiceSix, faDiceThree, faDiceTwo, faHand, faHatCowboy, faQuoteLeft, faRing, faWater } from '@fortawesome/free-solid-svg-icons';
import { cardInterface } from './interface/card';

@Component({
  selector: 'app-kings-cup',
  templateUrl: './kings-cup.component.html',
  styleUrls: ['./kings-cup.component.css']
})
export class KingsCupComponent implements OnInit {

  icons = {
    faCrown : faCrown,
    faChessQueen : faChessQueen,
    faChevronLeft : faChevronLeft,
    faChevronRight : faChevronRight,
    faArrowLeft : faArrowLeft,
    faWater : faWater,
    faDiceTwo : faDiceTwo,
    faDiceThree : faDiceThree,
    faDiceFour : faDiceFour,
    faDiceFive : faDiceFive,
    faDiceSix : faDiceSix,
    faHand : faHand,
    faRing : faRing,
    faBasketShopping : faBasketShopping,
    faComments : faComments,
    faHatCowboy : faHatCowboy,
    faQuoteLeft : faQuoteLeft
  }

  gameState = {
    view : 'menu',
  }

  instruction = {
    messages : [
      "As regras do jogo são simples, você compra uma carta e cada carta tem uma regra para seguir"
    ],
    state : 0,
  }

  cards : cardInterface[] = [
    {"icon" : this.icons.faWater, "title":"Cascata", "instruction":"A pessoa que tirou essa carta começa bebendo um shot, em seguida a pessoa da esquerda e por aí vai, você só pode parar de virar quando a pessoa da sua direita parar!"},
    {"icon" : this.icons.faDiceTwo, "title":"Hora do 2", "instruction":"Você aponta pra duas pessoas tomar um shot, você também pode mandar alguém todar dois shots."},
    {"icon" : this.icons.faDiceThree, "title":"Jerso, desce 3", "instruction":"Você toma 3 golaço, boa sorte!"},
    {"icon" : this.icons.faDiceFour, "title":"Todo mundo vai sofrer", "instruction":"Você toma 2 golaço, mas você escolhe alguém que vai tomar com você"},
    {"icon" : this.icons.faDiceFive, "title":"Mestre mandou", "instruction":"Você define uma regra, por exemplo, sempre que alguém beber, tem falar 'aoooba'"},
    {"icon" : this.icons.faDiceSix, "title":"Moscou levou", "instruction":"Esta carta permanece no jogo até você gastar, quando você colocar a mão na nuca, todos devem fazer o mesmo, o último a fazer, toma 2 golão, hehe"},
    {"icon" : this.icons.faHand, "title":"Levanta a mão pra Deus levar", "instruction":"Levanta a mão, o último que levantar bebe"},
    {"icon" : this.icons.faRing, "title":"Na saúde e na doença", "instruction":"Escolha alguém, sempre que essa pessoa beber, você bebe e vice-versa"},
    {"icon" : this.icons.faBasketShopping, "title":"Eu fui na feira", "instruction":"E comprei um abacaxi..."},
    {"icon" : this.icons.faComments, "title":"STOP", "instruction":"Escolha um tema, vá falando palavras desse tema até alguém traver"},
    {"icon" : this.icons.faHatCowboy, "title":"Meninas usam meninos", "instruction":"Todos homens na mesa bebem"},
    {"icon" : this.icons.faChessQueen, "title":"Meninos usam meninas", "instruction":"Todas mulheres na mesa bebem"},
    {"icon" : this.icons.faQuoteLeft, "title":"É sobre isso", "instruction":"Todes não bináries na mesa bebem"},
    {"icon" : this.icons.faCrown, "title":"REI DO COPO", "instruction":"Adicione algo ao copo do rei, na quarta vez que essa carta for comprada, a pessoa vira o copo"},
  ];

  drawnCards : cardInterface[] = []

  constructor(
    private Router : Router,
  ) { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.gameState.view = 'game';
  }

  resetGameState(): void {
    this.gameState.view = 'menu';
    this.drawnCards = [];
  }

  drawnCard(): void {
    let newDrawnCardIndex = Math.floor(Math.random() * this.cards.length);
    let drawnCard : cardInterface = {
      "icon" : this.cards[newDrawnCardIndex].icon,
      "instruction" : this.cards[newDrawnCardIndex].instruction,
      "title" : this.cards[newDrawnCardIndex].title,
    }
    this.drawnCards.push(drawnCard);
    this.drawnCards[this.drawnCards.length-1].drawSide = Math.floor(Math.random() * 2) === 0;
    this.drawnCards[this.drawnCards.length-1].rotate = Math.floor(Math.random() * (16 - (-16)) + (-16));
    if(this.drawnCards.length > 25) {
      this.drawnCards.shift()
    }
  }

  redirectTo(to : string): void {
    this.Router.navigate([to]);
  }

}
