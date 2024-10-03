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

When pancakeSort() is called, it enters a for loop that will iterate through
 the array backwards. This operation will be a complexity of $\Theta(n)$. 

Inside this loop is the function findMaxIndex() which looks through a sub-array 
of the array given. The time complexity of this function is is $\Theta(n)$.
The flip() method is also called within the loop, and there are two for loops that 
are called. The first one going through the sub-array and reversing the elements. 
The second one then replaces these element in the original array. Both of these 
loops combines will take a time complexity of $\Theta(2n)$ (using $m$ for the same 
reasoning as with the findMaxIndex() method). There are then two flip() calls 
inside the main loop, which increases the complexity to $\Theta(4n)$.

Combining these complexities, we get $\Theta(n*5n)$. Ignoring constants, this 
can simplify down to $\Theta(n*n)$ or $\Theta(n^2)$ for the final complexity.


# Sources

- Lars: Conversation over GitHub on why help functions are in terms of n, 
        and not of it's own linear complexity

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice.