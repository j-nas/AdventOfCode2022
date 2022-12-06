namespace day3;

internal class Program
{
    private static void Main(string[] args)
    {
        string[] input = File.ReadAllLines("./input.txt");
        int value = 0;
        foreach (string s in input)
        {
            value += GetValueOfItem(GetDuplicateItem(s));
        }
        Console.WriteLine(value);

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
}