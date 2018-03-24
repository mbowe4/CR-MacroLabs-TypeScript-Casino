interface GameEngineInterface<GameTypePlayer, GameType> {

    getGame(): GameType;
    evaluateTurn(player: GameTypePlayer): void;
    run(): void;
}