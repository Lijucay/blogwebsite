---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Classes and Objects'
pubDate: 2024-04-16
description: "Learn what classes and objects are, how they organize data and behavior in object-oriented programming, and how inheritance helps create relationships between classes."
image:
  url: '/assets/blog-covers/bits_and_beyond_2.webp'
  alt: 'Macbook Pro on a brown desk, half-opened'
author: 'Lijucay'
tags: ["basics", "classes", "objects", "learning in public"]
in: "Bits & Beyond"
---

In the realm of programming, understanding the concept of classes and objects is important. Whether you're delving Python, Java, C++, or any object-oriented programming (OOP) language, classes and objects form the backbone of structuring code and modeling real-world entities.

So, let us learn about classes and objects!

## Objects

To start, let's demystify what an object truly is.

At its core, an object represents and entity, a tangible and conceptual "thing" in your program. What makes objects so powerful is their ability to encapsulate data and behaviors within a single unit, making them manageable and reusable.

An object contents of attributes and operations / methods. Let's demystify these terms as well:

### Attributes

You can think of attributes as defining characteristics of an object. They are like variables attached to the object, storing information that describes its state or properties. For example, if you have an object representing shoes, its attributes might include properties like color, name and size.

### Methods

If attributes are the nouns of objects (so describing what it is), methods are the verbs (defining what it does). Methods encapsulate behaviors or actions that an object can perform. Going back to our shoe example, methods could include actions like `open` or `close`.

## Classes

You can imagine classes as a blueprint, a template that defines the structure and behavior of objects belonging to a certain category or type. It serves as a central hub where you outline what attributes and methods each object should possess.

In our shoe object example, a class would define what makes a shoe a shoe. This includes common attributes like color, size and name, as well as methods like `open` and `close`.

Once we have our class defined, we can create individual shoe objects based on this blueprint. Each shoe object will inherit the attributes and methods defined by the class, but can also have unique values for those attributes.

### About showing the class's information

Class diagrams serve as a universal language to represent the blueprint of a class, regardless of the programming language. They visually showcase the structure of a class, including its attributes and methods. Here is how a class diagram might look like:

![A picture of the blueprint of a class diagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1713194532822/6ad1ab2b-d6c0-4b28-be19-7fdfc566c274.png)

The top row contains the class name, followed by the attributes in the next row. And in the last row, we specify the operations.

Let's create a class diagram for our shoes:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1713195247927/2d0c7eee-98ef-48bf-abed-503f34aef643.png)

What information do we get?

* The class's name is `Shoe`

* The class gets a string for the name, an integer for the size and a string for the color

* The class has a constructor (`Shoe`) that takes the parameters name, size and color

* The class has a setter method for the name (`setName`), that takes a string, as setter method for the size (`setSize`), that takes an integer, and a setter method for the color (`setColor`), that takes a string

* The class has a getter method for the name (`getName`), that returns a string (indicated through `: String`), a getter method for the size (`getSize`), that returns an integer (indicated through `: Int`), and a getter method for the color (`getColor`), that returns a string.

* The class has the operation methods `open` and `close`


Wait, wait, wait, a constructor? Getter and Setter?  
A constructor is getting called, when the object is created. It specifies which parameters in needs to have to work. For shoes, it requires knowing the name, the size and the color.  
Setter methods are used to override the existing value of the specified attribute.  
Getter methods are used to get the current value of the specified attribute.

#### How to create a class in a programming language with this set of information?

Since the information are general and not bound to a programming, you can use this set of information to create a class in whatever language you want to create it. In this blog, we use Java. We will do it step by step.

1. **The class's name**

   We can receive the name of the class by its class diagram. As previously mentioned, the class's name is the top row of the diagram. That means for us, it is `Shoe`

    ```java
    public class Shoe {}
    ```

   In this example:

    * The class's visibility is set to public, which means any other class in this project can create an object out of this class

    * The class's name is Shoe

2. **The class's attributes**

    ```java
    public class Shoe {
        private String name;
        private int size;
        private String color;
    }
    ```

   In this example:

    * The class has three private attributes: name (of type string), size (of type integer) and color (of type string)

3. **The classes constructor**

    ```java
    public class Shoe {
        private String name;
        private int size;
        private String color;
    
        public Shoe(String name, int size, String color) {
            this.name = name;
            this.size = size;
            this.color = color;
        }
    }
    ```

   In this example:

    * The constructor takes the parameters name, size, and color

    * The constructor assigns the parameters to the class's attributes (`this.name` refers to the class's attribute)

4. **The class's getters and setters**

    ```java
    public class Shoe {
        private String name;
        private int size;
        private String color;
    
        public Shoe(String name, int size, String color) {
            this.name = name;
            this.size = size;
            this.color = color;
        }
    
        public void setName(String name) {
            this.name = name;
        }
        public String getName() {
            return name;
        }
    
        public void setSize(int size) {
            this.size = size;
        }
        public int getSize() {
            return size;
        }
    
        public void setColor(String color) {
            this.color = color;
        }
        public String getColor() {
            return color;
        }
    }
    ```

   In this example:

    * The setter functions are getting the parameters of the same type as the attributes, they override. The assignment refers to the class's attributes (`this.name`), because name is defined in the scope as a parameter, and thus it needs to be clarified what name value is reassigned.

    * The getter functions are returning the attributes. The function's return type is equal to the type of the attribute it returns.

5. **The class's operations**

    ```java
    public class Shoe {
        private String name;
        private int size;
        private String color;
    
        public Shoe(String name, int size, String color) {
            this.name = name;
            this.size = size;
            this.color = color;
        }
    
        public void setName(String name) {
            this.name = name;
        }
        public String getName() {
            return name;
        }
    
        public void setSize(int size) {
            this.size = size;
        }
        public int getSize() {
            return size;
        }
    
        public void setColor(String color) {
            this.color = color;
        }
        public String getColor() {
            return color;
        }
    
        public void open() {}
        public void close() {}
    }
    ```

   In this example:

    * The operations open and close are empty, since the class diagram only shows their existence but not what they are doing internally.


### Creating an object from a class

Since we now have a class `Shoe`, let us create an object of type Shoe now:

```java
public class Clothes {
    public static void main(String[] args) {
        Shoe shoe = new Shoe("Name", 30, "Blue"); // A shoe constructor needs this set of information
        
        shoe.setName("New name"); // Changes the current name "Name" to "New name"
        shoes.setSize(42); // Changes the current size 30 to 42

        String currentName = shoe.getName(); // Receives the current name
        int currentSize = shoe.getSize(); // Receives the current size
    }
}
```

### Inheritance

Inheritance allows classes to inherit attributes and methods from another class, promoting code reuse and organizational hierarchy.

A class diagram with inheritance would look like that:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1713218452609/dff90393-5216-447e-8719-a6abf4780cb3.png)

In this example:

* The class `IceSkate` inherits from the `Shoe` class. That means, it inherits the attributes and operations. The arrow always points to the super-class. The class, that inherits attributes and operations, does not contain these operations and attributes in its class diagram, since the inheritance is made visible.

* The class `IceSkate` has an attribute of its own (`blade`), which is not an attribute that is part of the `Shoe` class

* The class `IceSkate` has getters and setters of its own, that are not part of the `Shoe` class it inherits from


We can implement this in our language of choice. Here is an example for Java:

```java
public class IceSkate extends Shoe {
    private String blade;

    public void setBlade(String blade) {
        this.blade = blade;
    }

    public String getBlade() {
        return blade;
    }

    @Override
    public void open() {
        // Override what happens in this function
    }
}
```

Key Points:

* Inheritance is denoted by using the `extends` keyword followed by the superclass name

* The subclass inherits attributes and methods from the superclass but can also have its own unique attributes and methods

* Method overriding allows subclasses to provide their own implementation of methods inherited from the superclass


And that's it. You should now have a basic understanding of classes and objects, as well as class diagrams and inheritance.