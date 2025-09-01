---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Data structures'
pubDate: 2024-04-02
description: "Data structures organize and manage data efficiently. This guide covered arrays, stacks, and queues, showing how to use them in Java. These basics prepare you for more complex structures like trees."
image:
  url: '/assets/blog-covers/bits_and_beyond_3.webp'
  alt: 'Spiral of orange blocks on a dark background'
author: 'Lijucay'
tags: ["basics", "data_structures", "learning in public"]
in: "Bits & Beyond"
---

In our last adventure, we explored the world of algorithms – the recipes that tell our computers how to solve problems.  
Today, we're diving into the fundamental building blocks of programming: data structures.

Data structures are like containers that hold and organize our information. They determine how efficiently we can access, manipulate, and store data. Just like a toolbox has different compartments for screwdrivers, hammers, and nails, programmers use a variety of data structures depending on the task at hand.

We will mainly focus on static arrays, dynamic arrays, stacks and queues here but remember, that there is more.

### Static arrays

An array is a collection of variables of the same type. It can be addressed by its index.

An index starts at 0. That means, we start counting at 0, which would be the first item of the array.

Static arrays have a fixed size, which means that they cannot grow or shrink later.

#### Declaration without value assignments

When you declare an array without assigning values, you specify the type of data the array will hold and its size. Here's the breakdown for Java:

```java
// Declaration of a String array with a size of 10
String[] names = new String[10];
```

In this example:

* <span class="inline-code">String[]</span>: Indicates that the variable <span class="inline-code">names</span> will hold an array of Strings.

* <span class="inline-code">new String[10]</span>: Indicates that the array will have a size of 10


If you declare an array without assigning values, each entry will be filled with the default value of the data type (<span class="inline-code">null</span> for objects, <span class="inline-code">0</span> for integers, <span class="inline-code">false</span> for booleans, etc.).

#### Declaration with value assignments

When you declare an array and assign values directly, you list the values within curly braces (<span class="inline-code">{}</span>) after the variable's name. Here is how it looks:

```java
String[] names = {"Ken", "Nila", "Mika", "Elisa"}; // Declare an array with assigning values
```

In this example:

<span class="inline-code">{"Ken", "Nila", "Mika", "Elisa"}</span>: Assigns these strings to the <span class="inline-code">names</span> array.

#### Get a value on a specific index

To retrieve a value from a specific index in the array, you use square brackets (<span class="inline-code">[]</span>) with the index inside. For example:

```java
int[] numbers = {1, 2, 3, 4, 5, 6};
numbers[0]; // Retrieves the value on index 0 (which is 1)
```

#### Assigning values

To change the value at a specific index in the array, you again use square brackets (<span class="inline-code">[]</span>) with the index inside, and then assign the new value. Here is an example:

```java
int[] numbers = {1, 3, 3, 4, 5, 6};
numbers[1] = 2; // Changes the value at index 1 from 3 to 2
```

#### Get the length of an array

In Java, you can get the length of an array by using the <span class="inline-code">length</span> property. Here is how you do it:

```java
int[] numbers = {1, 2, 3, 4, 5, 6};
int size = numbers.length; // Returns 6, the length of the array
```

### Dynamic arrays

In Java, <span class="inline-code">ArrayList</span> is a dynamic array implementation provided by the standard library.  
Unlike static arrays, <span class="inline-code">ArrayList</span> can grow and shrink as needed.

Here is how you create one:

```java
ArrayList<String> strings = new ArrayList<>();
```

In this example:

* <span class="inline-code">ArrayList<String></span>: Indicates that strings will hold elements of type <span class="inline-code">String</span>.

* <span class="inline-code">new ArrayList<>()</span>: Creates a new <span class="inline-code">ArrayList</span> instance.


#### Adding elements

You can add elements to the end of the <span class="inline-code">ArrayList</span> or at a specific index using the <span class="inline-code">add</span> method:

```java
strings.add("world"); // Adds "world" to the end of the list
strings.add(0, "Hello"); // Adds "Hello" at index 0, pushing other elements forward
strings.add("!");
```

#### Removing elements

You can remove elements by their index or by their value:

```java
strings.remove(1); // Removes the element at index 1
strings.remove("Hello"); // Removes the element with the value "Hello"
```

#### Accessing elements

You can access elements by their index using the <span class="inline-code">get</span> method:

```java
String firstElement = strings.get(0); // Retrives the element at index 0
```

### 2-dimensional arrays

A two-dimensional array in Java is like a table with rows and columns. You specify the dimensions when you create it. Here's how you create a 3x3 2D array of type integer

```java
int[][] twoDArray = new int[3][3]
```

In this example:

* <span class="inline-code">int[][]</span>: Indicates that <span class="inline-code">twoDArray</span> is a two-dimensional array of integers

* <span class="inline-code">new int\[3][3]</span>: Create a new 2D array with 3 rows and 3 columns


#### Initializing values

You can initialize values when creating the array...

```java
int[][] twoDArray = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

... or assign them later

```java
twoDArray[0] = {1, 3, 3};
twoDArray[0][1] = 2;
```

#### Accessing values

To access a value in the 2D array, you use two sets of square brackets (<span class="inline-code">\[rowIndex]\[columnIndex]</span>):

```java
int secondRowFirstVal = twoDArray[1][0] // Retrieves the value at row 1, column 0 (which is 4)
```

#### Accessing a row

You can also access an entire row as a 1D array:

```java
int[] secondRow = twoDArray[1]; // Retrieves the entire second row (4, 5, 6)
```

### Queue

A queue is a fundamental data structure, that follows the First-In-First-Out (FIFO) principle. It means that the element added first will be removed first. In Java, you can implement a queue using the <span class="inline-code">Queue</span> interface. In this example, we will use the <span class="inline-code">LinkedList</span> as an underlying implementation, but note that there are other implementations.

Here is how you create a queue of integers:

```java
Queue<Integer> queue = new LinkedList<>();
```

In this example:

* <span class="inline-code">Queue<Integer></span>: Indicates that <span class="inline-code">queue</span> is a queue that stores integers.

* <span class="inline-code">new LinkedList<>()</span>: Creates a new linked list-based queue instance.


#### Adding elements

To add elements to the end of the queue, you use the <span class="inline-code">add</span> method:

```java
queue.add(1);
queue.add(2);
```

In this example, <span class="inline-code">1</span> will be added first, followed by <span class="inline-code">2</span>.

#### Removing elements (polling)

To remove and retrieve the first element from the queue, you use the <span class="inline-code">poll</span> method:

```java
int firstElement = queue.poll(); // Retrieves and removes the first element from the queue
```

Subsequent calls to <span class="inline-code">poll</span> will remove and return the next element in the queue.

```java
int secondElement = queue.poll(); // Retrieves and removes the second element from the queue
```

### Stack

A stack is a fundamental data structure that follows the Last-In-First-Out (LIFO) principle. It means that the last element added to the stack will be the first one removed. In Java, you can implement a stack using the <span class="inline-code">Stack</span> class. Here is how you create a stack of integers:

```java
Stack<Integer> stack = new Stack<>();
```

In this example:

* <span class="inline-code">Stack<Integer></span>: Indicates that <span class="inline-code">stack</span> is a stack that stores integers.

* <span class="inline-code">new Stack<>()</span>: Creates a new stack instance.


#### Adding elements

To add elements to the top of the stack, you use the <span class="inline-code">push</span> method

```java
stack.push(1);
stack.push(2);
```

In this example, <span class="inline-code">1</span> will be added first, followed by <span class="inline-code">2</span>.

#### Removing elements (popping)

To remove and retrieve the top element from the stack, you use the <span class="inline-code">pop</span> method:

```java
int topElement = stack.pop() // Removes and returns the top element from the stack
```

Subsequent calls to <span class="inline-code">pop</span> will remove and return the next element from the top of the stack.

```java
int nextElement = stack.pop(); // Removes and returns the next element from the stack
```

Now that's it so far. You should now have a basic understanding of data structures, including arrays and stacks. Our next topic will be binary trees, so stay tuned!