export interface Player {
    id: number,
    name: string,
    score: number,
    scoreHistory: number[]
};

export interface GameState {
    round: number,
    players: Record<number, Player>
};