namespace day2;

internal class Program
{
    private static void Main(string[] args)
    {
        string[] input = File.ReadAllLines("./input.txt");
        int total = 0;
        int totalPart2 = 0;
        foreach (string game in input)
        {
            total += RockPaperScissors(game.ToLower());
            totalPart2 += Part2Scoring(game.ToLower());
            Console.WriteLine(Part2Scoring(game.ToLower()));

        }
        Console.WriteLine($"total part 1: {total}");
        Console.WriteLine($"total part 2: {totalPart2}");


    }

    private static int RockPaperScissors(string game)
    {

        int playerScore(char choice) => choice switch
        {
            'x' => 0,
            'y' => 1,
            'z' => 2,
            'a' => 0,
            'b' => 1,
            'c' => 2,
            _ => 0
        };



        var opp = playerScore(game[0]);
        var player = playerScore(game[2]);
        int score = 0;

        if ((opp + 1) % 3 == player) score = 6;
        else if (opp == player) score = 3;
        else score = 0;

        return score += (player + 1);
    }

    private static int Part2Scoring(string game)
    {
        int choice(char choice) => choice switch
        {
            'a' => 0, //rock
            'b' => 1, //paper
            'c' => 2 //scissors
        };

        int opp = choice(game[0]);
        int playerChoice = 0;

        int desiredResult(char choice) => choice switch
        {
            'z' => 6, //win
            'y' => 3, //draw
            'x' => 0,  //loss
        };
        if (desiredResult(game[2]) == 6)
        {
            playerChoice = ((opp + 1) % 3) + 1;
        }
        else if (desiredResult(game[2]) == 3)
        {
            playerChoice = opp + 1;

        }
        else if (desiredResult(game[2]) == 0)
        {
            playerChoice = (opp % 3) + 1;

        }

        return desiredResult(game[2]) + (playerChoice);




    }
}

