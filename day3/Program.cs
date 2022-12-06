namespace day3;

internal class Program
{
    private static void Main(string[] args)
    {
        string[] input = File.ReadAllLines("./input.txt");
        Part1(input);
        Part2(input);
    }

    private static void Part2(string[] input)
    {

        int value = 0;

        for (int i = 0; i < 300; i += 3)
        {
            string elf1 = input[i];
            string elf2 = input[i + 1];
            string elf3 = input[i + 2];

            foreach (char item in elf1)
            {
                if (elf2.Contains(item))
                {
                    if (elf3.Contains(item))
                    {
                        value += GetValueOfItem(item);
                    }
                }
            }
        }
        Console.WriteLine($"Part 2 value: {value}");
    }

    private static int GetDuplicateItem(string pack)
    {
        int packSize = pack.Count();
        string firstHalf = pack.Substring(0, packSize / 2);
        string secondHalf = pack.Substring(packSize / 2, packSize / 2);

        foreach (char c in firstHalf)
        {
            if (secondHalf.Contains(c)) return c;
        }
        return Int32.Parse("!");

    }

    private static int GetValueOfItem(int item)
    {
        if (item > 96) return item - 96;
        else return item - 38;
    }

    private static void Part1(string[] input)
    {
        int value = 0;
        foreach (string s in input)
        {
            value += GetValueOfItem(GetDuplicateItem(s));
        }
        Console.WriteLine($"part 1 value: {value}");
    }
}