import { IListScoresDTO } from "../modules/dtos/IListScoresDTO";

class ResolveScoresService {
    private scoresResult: IListScoresDTO[];
    private position = 0;
    private lastScore = 0;
    private plusToNextPosition = 1;

    constructor(private scores: Omit<IListScoresDTO[], "position">) {
        this.setPosition(scores);
        this.setOrder();
    }

    private resolvePosition(totalScore: number): number | null {
        if (totalScore <= 0) {
            return null;
        }

        if (totalScore === this.lastScore) {
            this.plusToNextPosition += 1;
            return this.position;
        }

        this.position += this.plusToNextPosition;
        this.plusToNextPosition = 1;
        this.lastScore = totalScore;
        return this.position;
    }

    private setPosition(scores: Omit<IListScoresDTO[], "position">): void {
        this.scoresResult = scores.map((score) => {
            return {
                id: +score.id,
                name: String(score.name),
                totalScore: +score.totalScore,
                position: this.resolvePosition(+score.totalScore),
            };
        });
    }

    private setOrder(): void {
        this.scoresResult = this.scoresResult.sort((a, b) => {
            const currentScore = a.position;
            const comparationScore = b.position;

            if (currentScore < comparationScore || comparationScore === null) {
                return -1;
            }
            if (currentScore > comparationScore) {
                return 1;
            }

            return 0;
        });
    }

    public getResults(): IListScoresDTO[] {
        return this.scoresResult;
    }
}

export { ResolveScoresService };
