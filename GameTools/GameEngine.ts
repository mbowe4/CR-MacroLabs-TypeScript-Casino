abstract class GameEngine<GameType, GameTypePlayer> implements GameEngineInterface<GameType, GameTypePlayer> {
    getGame(): GameTypePlayer {
        throw new Error("Method not implemented.");
    }
    evaluateTurn(player: GameType): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
}