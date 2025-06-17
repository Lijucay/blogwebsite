---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Basics of Algorithms'
pubDate: 2024-04-02
description: "Algorithms are the backbone of modern computing. Everything is powered by them, from search engines to social media feed. Yet, for many, the word \"algorithm\" can be a bit intimidating, so let's clarify the basics of algorithms."
image:
  url: '/assets/blog-covers/bits_and_beyond_1.webp'
  alt: 'A macbook with a window opened, showing lines of code, standing on a white desk.'
author: 'Lijucay'
tags: ["basics", "algorithms", "learning in public"]
in: "Bits & Beyond"
---
Algorithms are the backbone of modern computing. Everything is powered by them, from search engines to social media feed. Yet, for many, the word "algorithm" can be a bit intimidating, so let's clarify the basics of algorithms.

### What is an algorithm?
A German collection of formulas, defines algorithms as follows:

> An algorithm is the clear description of a procedure to solve similar problems. It specifies how input data is gradually converted into output data.

Before we explore the five principles that every algorithm should follow, let us quickly define some words, we are going to use later.

### Definitions

#### Definition 1: Statement

A statement typically refers to a line of code that performs a specific action or operation within a program. It can include various operations, such as variable declarations, assignments, or method calls.

```java
int counter = 0; // This is an declaration statement
counter = 1; // This is an assigment statement
incrementCounter(); // This is a method call
```

#### Definition 2: Sequence

A sequence refers to a series of statements or instructions executed in a linear order, typically from top to bottom. It represents the flow of control within a program, ensuring that instructions are executed in a predetermined sequence.

```java
int counter = 0;
counter++; // This sequence just increments the counter by one
```

#### Definition 3: Loop

A loop is a programming construct that allows a sequence of statements to be executed repeatedly based on a specified condition. It helps in reducing repetition and writing more efficient code by automating repetitive tasks.

```java
for (int i = 0; i < 8; i++) {
    println(i + 1);
}
// This loop repeats itself 8 times. The condition is, that i is smaller than 8
// Since i is declared to be 0 at the beginning and we want to print the numbers 1 to 8, we simply add 1 to i when we print it. This does not affect i
// The last part of the first line just tells the loop to increment i by one on every repitition.
```

#### Definition 4: Conditions

Conditions, also known as conditional statements, allow the execution of different sequences of code based on the evaluation of one or more conditions. They enable branching within a program, facilitating decision-making based on specific criteria.

```java
if (condition = isFulfilled) {
    // Do code when condition 1 is fulfilled
} else {
    // Do code when condition 2 is fulfilled
}
// This simple if-else-condition block only executes the code that should be executed when different conditions are met.
```

#### Definition 5: Arithmetic operations

Arithmetic operations consist of basic mathematical operations such as addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%). They are used to performing calculations and manipulate numerical data within a program.

```java
// Examples for modulus
int r = 6 % 3; // r will be 0, since there is no rest in this division
int r = 7 % 2; // r will be 1, since 7 % 2 = 3 with 1 being left (3 * 2 = 6 => 7 - 6 = 1).
```

#### Definition 6: Logical operators

Logical operators, including AND (&&), OR (||), and NOT (!), are used to perform logical operations on boolean expressions. They allow for the combination and manipulation of conditions to control the flow of execution within a program.

```java
if (condition1 == isMet && condition2 == isNotMet) {
    // This will not be executed as only one condition is met
}
if (condition1 == isMet && condition2 == isMet) {
    // This will be executed as both conditions are met
}
if (condition1 == isNotMet && condition2 == isNotMet) {
    // This will not be executed as neither of the condition is met
}
if (condition1 == isMet || condition2 == isNotMet) {
    // This will be executed as one condition is met
}
if (condition1 == isNotMet || condition2 == isNotMet) {
    // This will not be executed as no condition is met
}
if (condition1 == isMet || condition2 == isMet) {
    // This will be executed as both conditions are met
}
```

#### Definition 7: Comparison

Comparison operators are used to compare two values or expressions and determine their relationship. They include EQUAL TO (==), NOT EQUAL TO (!=), GREATER THAN (&gt;), LESS THAN (&lt;), GREATER THAN OR EQUAL TO (&gt;=), and LESS THAN OR EQUAL TO (&lt;=).

```java
int index = 0;

boolean isMet = index == 0; // returns true since index is 0
boolean isMet = index == 1; // returns false since index is not 1

int index = 0;

boolean isMet = index != 0; // returns false since index is 0
boolean isMet = index != 1; // returns true since index is not 1

int index = 1;

boolean isMet = index > 0; // returns true since index is greater than 0
boolean isMet = index > 1; // returns false since index is equal to 1, not greater
boolean isMet = index > 2; // returns false since index is smaller than 2
boolean isMet = index < 0; // returns false since index is greater than 0
boolean isMet = index < 1; // returns false since index is equal to 1, not smaller
boolean isMet = index < 2; // returns true since index is smaller than 2

int index = 1;

boolean isMet = index >= 0; // returns true since index is greater than 0
boolean isMet = index >= 1; // returns true since index is equal to 1
boolean isMet = index >= 2; // returns false since index is smaller than 2
boolean isMet = index <= 0; // returns false since index is greater than 0
boolean isMet = index <= 1; // returns true since index is equal to 1
boolean isMet = index <= 2; // returns true since index is smaller than 2
```

#### Definition 8: Parameters

Parameters are variables that are used to pass information into a method. They allow for customization and flexibility in the behavior of the method by providing input values that can be used within the method's execution.

#### Definition 9: Return-type

The return type of a method specifies the type of data that the method will return upon completion of its execution. It indicates what type of value the method produces as output, allowing callers to know what to expect from invoking the method.

### The five principles of an algorithm.

#### Principle 1: Generality

An algorithm should not be limited to solving only one specific example but should be applicable to a variety of similar problems.

#### Principal 2: Feasibility

Each instruction in an algorithm should provide clear and unambiguous actions that can be understood and executed by an execution system, such as a computer, without interpretation problems.

#### Principal 3: Finiteness

An algorithm must be expressible in a finite number of steps to avoid infinite loops.

#### Principal 4: Clarity

Every instruction within an algorithm should be precise and unambiguous, avoiding any ambiguous formulations and clearly indicating which action should be executed.

#### Principal 5: Timeliness

An algorithm should terminate within a finite timeframe to ensure practical applicability and prevent endless loops.

### Variables: Understanding the basics

A fundamental aspect of algorithms is understanding how to save values in variables.

#### What is a variable?

A variable serves as a container for storing and manipulating data. They allow us to work with values that may change during the execution of our algorithm.

<div data-node-type="callout">
<div data-node-type="callout-emoji">❗</div>
<div data-node-type="callout-text">Names of variables must be unique within the same algorithm.</div>
</div>

#### Types of variables

While there are many types of variables, we'll cover six commonly used ones:

##### Type 1: Integer-Variables

Integer variables can store positive and negative whole numbers, and arithmetic operations can be executed with them.

<div data-node-type="callout">
<div data-node-type="callout-emoji">❗</div>
<div data-node-type="callout-text">Since these are integers, the operation integer1 / integer2 always results in an integer. For example, 7 / 2 = 3, not 2.5!</div>
</div>

##### Type 2: Float-Variables

Float variables are floating-point numbers that can store decimal numbers, and arithmetic operations can be executed with them as well.

##### Type 3: Double-Variables

Double variables are similar to float variables but offer more precision and can accommodate larger or smaller values. Arithmetic operations can also be executed with them.

##### Type 4: String-Variables

String variables can store text, numbers, special characters, and spaces, or they can be empty. Arithmetic operations do not work with them, but they can be concatenated or split.

##### Type 5: Character-Variables

Character variables can store a single character, unlike string variables. However, like string variables, they can store numbers, characters, special characters, and spaces. While theoretically, arithmetic operations can be performed with character variables, they operate based on Unicode values. For example, calculating 'A' + 1 would result in 'B', as the Unicode value of 'A' is 65, and incrementing it returns 66, the Unicode value of 'B'.

##### Type 6: Boolean-Variables

Boolean variables can store only two different values: true and false.
Understanding the different types of variables and their characteristics is essential for effectively utilizing them in algorithm design and implementation.

#### Data types

There are two data types: primitive data and object references.
Primitive data represents simple values, just like numbers and characters. They have standard values if not initialized, and they cannot be null. Primitive data is passed to a method as a value, and changing this value inside the method does not affect the initial variable.
Object references are referring to instances of classes, which have complex structures and methods. Initially, they are null, which means not initialized. They are passed to methods as references, and changing the reference can affect the initial object.

### Local and Global Variables: Understanding Scope and Lifetime

#### Local variables

Local variables are declared within a specific block of code, such as a method, and are only visible and accessible within that block. They have a limited scope, confined to the block in which they are declared. Once the execution of the block is complete, the local variables are destroyed, and their memory is released.

#### Global variables

Global variables, on the other hand, are declared outside of any method or block and are accessible from anywhere within the program. They have a broader scope and are visible throughout the entire class they are declared in, as well as any other classes within the same project, provided their visibility is set to public. Global variables persist as long as the instance of the class exists. However, they are destroyed when the instance is destroyed or when the program terminates.

### Methods: Understanding the basics

Methods are essential for structuring and organizing code, improving efficiency by allowing the reuse of code segments without duplication. A method declaration typically consists of a return type, a name, and parameters, though some methods may have optional return types or parameters.

```java
private String name = "user#1";
// Method with a return-type of String and no parameters
public String getString() {
    return name;
}

// Method with no return-type (void) and 1 parameter
public void setString(String name) {
    this.name = name;
}

// Method with no return-type (void) and two parameters
public void setNameWithLastName(String name, String lastName) {
    this.name = name + lastName; // Concatenation of Strings
}

// Method with a return-type of String and two parameters
public String setNameWithLastNameAndReturn(String name, String lastName) {
    this.name = name + lastName;
}
```

#### Method overload

Method overloading allows multiple methods within the same class to share the same name but differ in parameters. This can be achieved by having different parameter types, parameter counts, or both.

```java
public void doSomething(String param1, int param2) {
    // Do something
}
public void doSomething(String param1, String param2) {
    // Do something
}
public void doSomething(String param) {
    // Do something
}
```

#### Recursion

Recursion involves a method calling itself to solve a task. Recursive methods continue calling themselves until a base case condition is met, at which point the recursion stops. Recursion is particularly useful for problems that can be broken down into smaller sub-problems, often following a "divide-and-conquer" approach.

```java
public static int factorial(int n) {
    // Base case: if n is 0 or 1, return 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case: call the factorial method with n-1 and multiply it by n
    else {
        return n * factorial(n - 1);
    }
}
```

And that's it. Now you should have a basic understanding of the algorithms, including variables and methods.