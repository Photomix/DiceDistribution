## How to solve Three Indistinguishable Dice Puzzle - Javascript version
This solution comes from the youtube video with the same name by standupmaths

####Disclaimer: This solution applies to throwing 1D12, not 2D6. I'll work on the real solution though. ;)

Here are the steps:

1. Launch the dice and make modulo 6 adding 1 to the result (this 1 is important to avoid the results overlapping on the occurrence 6)
2. Count the number of even numbers in the dice
3. if there is only 1 or 2 even number (meaning 1 even number or 1 odd number) and that number (odd or even) is under 5, add 6 to result

The distribution of that result is uniform between 1 and 12 as expected for 1D12 throw.
