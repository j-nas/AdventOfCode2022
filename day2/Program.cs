namespace day2;

internal class Program
{
    private static void Main(string[] args)
    {
        string[] input = File.ReadAllLines("./input.txt");
        int total = 0;
        foreach (string game in input)
        {
            total += RockPaperScissors(game.ToLower());


        }
        Console.Write(total);
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


}

