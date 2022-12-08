string[] input = File.ReadAllLines("./input.txt");

Part1(input);
Part2(input);

void Part1(string[] input)
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

void Part2(string[] input)
{
    int intersectors = 0;
    foreach (string elfPair in input)
    {
        int[] leftElf = GetRanges(elfPair.Split(',')[0]);
        int[] rightElf = GetRanges(elfPair.Split(',')[1]);


        if (CompareCompleteRanges(GetCompleteRange(leftElf), GetCompleteRange(rightElf)))
        {
            intersectors++;
        }
    }
    Console.WriteLine($"Total value of intersectors is: {intersectors}");
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

Range GetCompleteRange(int[] unfilledRange)

{
    return new Range(unfilledRange[0], unfilledRange[1]);
}

bool CompareCompleteRanges(Range elfRight, Range elfLeft)
{

    if (elfRight.Start.Value <= elfLeft.End.Value && elfLeft.Start.Value <= elfRight.End.Value) return true;
    return false;
}