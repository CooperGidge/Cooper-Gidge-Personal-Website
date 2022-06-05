---
title: 'Cracking The Equal Sign Code'
desc: Equal signs are fun things in programming. They have three uses with (mostly) different intents.
tags: 
    - programming
date: 2022-04-05
author: coopergidge
---

Equal signs are fun things in programming. They have three uses with (mostly) different intents.

# The Single Equal Sign

The single equal sign is used to *assign* a value.

```js
var x = 2;
```

Notice the use of *assign*. You are not setting x “equal to” 2 in the above code. Instead, think of x as a container. You are putting the value 2 in the container x.

Given this, the below code example will not work, because you are not testing if x is equal to 2, but you are assigning x the value of 2. Doing so in an if statement will cause an error.

```js
if (x = 2) {...} // Error
```

Despite all the years I’ve been programming, I still occasionally make this mistake.

# The Double Equal Sign

When people think of the equal sign, they think of it representing *equivalence*. In programming, that is what the double equal sign is.

```js
if (x == 2) {...}
```

The statement above tests for equivalence, specifically if x is equal to 2. It doesn’t assign x the value of 2, it checks if the value of x is equal to 2.

If the programming language does not support the triple equal sign, this will also test for equivalence in data type along with equivalence in value.

Funnily enough, the “equals not” or “does not equal” sign, `!=`, only uses one equal sign. I believe that is why it is easy to accidentally use a single equals sign in an if statement instead of a double.

# The Triple Equal Sign

Personally, I don’t believe I’ve ever actually used this, but the triple equal sign tests not only for equivalence in value, but for equivalence in *data type* as well.

```js
var x = 2;
if (x == "2") {...} // True
if (x === "2") {...} // False
```

The first if statement will be true, because it is comparing the value, not the data type. It is comparing the integer (number) 2 with the string (text) 2, which is equal.

The second if statement will be false, because it is not only comparing the value, but also the data type. While 2 is equal to 2, an integer is not a string.

However, this is only the case if the programming language supports it. Otherwise, a double equal sign will function like a triple equal sign.

And there you go— the three uses of equal signs in programming, explained.