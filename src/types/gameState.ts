export interface ScoreHistory {
    started: number,
    gained: number
};

export interface Player {
    id: number,
    name: string,
    score: number,
    scoreHistory: ScoreHistory[]
};

export interface Settings {
    dirtyRummy: boolean
};

export interface GameState {
    round: number,
    players: Player[],
    settings: Settings
};