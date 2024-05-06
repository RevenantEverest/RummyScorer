export interface ScoreHistory {
    started: number,
    gained: number
};

export interface DirtyRummyActions {
    switchHands: boolean,
    stealMeld: boolean,
    reDrawHand: boolean,
    goFishCard: boolean
};

export interface Player {
    id: number,
    name: string,
    score: number,
    dirtyRummyActions: DirtyRummyActions,
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