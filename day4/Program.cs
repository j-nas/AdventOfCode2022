string[] input = File.ReadAllLines("./input.txt");

Day4(input);


void Day4(string[] input)
{
    int overLappers = 0;

    foreach (string elfPair in input)
    {
        int[] leftElf = GetRanges(elfPair.Split(',')[0]);
        int[] rightElf = GetRanges(elfPair.Split(',')[1]);

        if (CompareRanges(leftElf, rightElf))
        {
            overLappers++;
        }


    }

    Console.WriteLine($"Total value of overlappers is: {overLappers}");
}

int[] GetRanges(string elf)
{
    var range = elf.Split('-');
    int[] rangeInt = { 0, 0 };
    rangeInt[0] = int.Parse(range[0]);
    rangeInt[1] = int.Parse(range[1]);
    return rangeInt;
}

bool CompareRanges(int[] elfLeft, int[] elfRight)
{
    if (elfLeft[0] <= elfRight[0] && elfLeft[1] >= elfRight[1]) return true;
    if (elfRight[0] <= elfLeft[0] && elfRight[1] >= elfLeft[1]) return true;

    return false;
}

