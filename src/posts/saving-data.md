---
title: 'The Way To Save Data For Your Project'
desc: When programming an application, it is common to want to save some data for the next time the it is run.
tags: 
    - programming
date: 2022-05-21
author: coopergidge
---

When programming an application, it is common to want to save some data for the next time the it is run. This can be something simple like saving whether or not the user prefers dark mode [as a cookie](), or something complex like saving the entire profile information of a customer to a database.

However, how you save this data depends on the project as a whole. For example, if all you want to do is save whether or not the user prefers dark mode on a website, you probably don’t need to store that in a database. A cookie will do just fine.

But on the contrary, you probably shouldn’t save emails client-side, because the user could always lose the device or simply just want to access the emails on different device.

# The Two Methods Of Data Saving

There are two methods of saving data I will discuss.

1. **Client-side:** data that is saved on the device.
2. **Server-side:** data that is saved on an external server.

## Client-side

In general, I prefer client-side saving when the data being saved is not critical. For example, it’s not worth creating an entire server and database just to save whether or not the user prefers dark mode.

{% highlight %}
It is also worth mentioning that client-side saving can be better security-wise. After all, you can’t hack a server that doesn’t exist!
{% endhighlight %}

## Server-side

Instead, if you have something like a social media app where users can send and recieve messages, you will want to save those messages to a server so that they can be accessed anywhere. Saving these client-side means they will be lost if the user loses their device or if they want to switch devices.

Similarly, if the data is supposed to be accessed by more than one person, it is likely that more than one device will be involved, meaning server-side data saving exceeds in this regard.

## Where Things Get Blurry

However, another thing I want to touch on is how this very website handles storing data.

Every article on this website isn’t saved to a server— at least not in the traditional sense. Instead, this is a static site that is generated from data files. This could be done client-side, but I do host this website’s source code on GitHub, which one could argue acts as a server.

Ultimately, this is sort of where the difference between client-side and server-side data saving gets blurry.

---

# When To Use Client-side VS Server-side

So, when should you use client-side saving VS server-side saving?

## Use client-side saving if...

- The data is not critical.
- The data won’t need to be accessed on other devices.
- The data is crucial and needs to be protected. Keeping it on a device that is not connected to the internet is the same as locking it in a safe!

## Use server-side saving if...

- The data is critical.
- The data should be accessible on any device.
- The data needs to be accessed by more than one person.