import { cardInterface } from "./cardInterface";

export interface cardSuitRaceGameStateInterface {
    view : string,
    shownCards : number,
    race_size : number,
    race_map : cardInterface[][],
    hidden_map : cardInterface[],
    draw_card? : cardInterface,
    last_winner? : cardInterface,
}