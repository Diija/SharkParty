export interface cardInterface {
    id : number;
    icon : any;
    team_name : string;
    card_position : number;
    win_count : number;
    advance_animation? : boolean;
    back_animation? : boolean;
    turn_in_animation? : boolean;
    turn_out_animation? : boolean;
    hidden_card? : boolean;
}