---
title: 'Take The Stress Out Of Loops'
desc: When do you use a for loop versus a while loop? This is the general rule of thumb I follow.
tags: 
    - programming
date: 2022-04-19
author: coopergidge
---

When do you use a for loop versus a while loop? This is the general rule of thumb I follow.

1. If you need to run code a certain number of times, use a for loop.
2. If you need to run code indefinitely, use a while loop.

# Run Code x Times

This meets the first criteria, so use a for loop.

```js
for (var i = 0; i < x; i++) {
    // Code in here will be ran x times
}
```

This will print all numbers between and including 0 and 100.

```js
for (var i = 0; i <= 100; i++) {
    console.log(i);
}
```

Notice how the second part of the for loop isn’t `i < 100`, but is `i <= 100` because we also want to print the 100. So the code will be ran 101 times.

# Loop Code Until The User Says Otherwise

This meets the second criteria, so use a while loop. Here is a possible solution written in JavaScript:

```js
var keepLooping = true;
while (keepLooping) {
    console.log("This will print over and over again until the user tells me to stop.");
    var stop = prompt("Do you want to stop? (y or n)");
    if (stop == "y") {
        keepLooping = false;
    }
}
```

While `keepLooping` is true, the code will loop. On the first loop, `console.log` will run, and at the end of the loop, the user is asked whether or not they want to stop the loop. If they say yes, `keepLooping` is set to false and the loop ends. If they say no, the loop repeats.

# Loop Code Forever (Bad Idea)

An infinite loop is certainly a [bad idea]() but it can be achieved. This meets the second criteria, so use a while loop and just make it so the condition is never false.

```js
while (true) {
    console.log("This will be printed over and over again for infinity.");
}
```

Notice how the code above will never stop executing. This is generally a bad practice; there should always be a stopping condition.

# Recursion

Did you know that functions can call themselves? While technically not a loop, recursion is an option.

```js
function callMe() {
    console.log("When this function is called, I will print.");
    callMe();
}
```

{% alert %}
The above example will cause a Stack Overflow Error because the function never stops looping.
{% endalert %}

When to use recursion is a completely different story, however, which I plan to write about in the near future.