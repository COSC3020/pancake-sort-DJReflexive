# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

## My Runtime Analysis

Looking at the comparisons and flips, when pancakeSort() is called, it enters
a for loop that will iterate through the array backwards (loops $n$ times for the 
length of the array). Inside the loop is the findMaxIndex() method which looks 
through a sub-array of the array given. Within this method, there are $n$ 
comparisons made because you are comparing every element to identify the maximum 
value. Since this method is nested with a loop that happens $n$ times, the 
findMaxIndex() method makes $\Theta(n^2)$ comparisons.

Looking to the flip() calls nested within this large loop, the flip() method
doesn't make any comparisons, so every flip() call is constant number of 
comparisons ($\Theta(1)$). Since there are two flip() calls are nested within the
larger loop, the number of comparisons become $\Theta(2n)$. 

Combining these two ideas, we can see that the number of comparisons are 
$\Theta(n^2 + 2n)$, which simplifies to $\Theta(n^2)$ comparisons.


# Sources

- Lars: Conversation over GitHub on why help functions are in terms of n, 
        and not of it's own linear complexity. And also the conversation
        about the difference between number of operations and comparisons.

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice.