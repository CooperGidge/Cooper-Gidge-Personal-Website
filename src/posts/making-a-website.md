---
title: 'How I Made A Website: Idea To Completion'
desc: How I made a website, going over all the steps from concept to finished product.
tags: 
    - web dev
date: 2021-11-06
author: coopergidge
---

Especially in the tech industry, having a website is not an option. It is an expectation. Given this, it is only standard that I have one too; one to house my projects and any other writings I want to share with the world.

This is not just the story of how I made a website, but how I built a *project*, going over all the steps from concept to finished product.

# The Goal

Before even coming up with a plan, a goal is needed. Whenever I start a project, I ask myself: “what do I want to accomplish with this?”

The goal for this website is to act as a hub for all my project descriptions, articles, and anything else I see fit, mostly in literature format.

# The Plan

Most importantly, I determined what I wanted on this website.

1. A homepage.
2. A page for browsing posts.
3. An about page, to introduce myself.
4. A contact page, so people can contact me.
5. A 404 page.

I wanted to keep things simple: no over-the-top amount of pages. Just the bare minimum to keep things easy for the visitor.

The rest of my plan was just deciding what stack I was going to use, designing for my budget, and other less relevant details. While this is also very important, it varies between projects so I won’t go over it in this post.

# The Mockup

I started by whipping up a homepage and post design in [Figma](https://www.figma.com/). Obviously, it differs slightly from the final product that is what you see on this very site right now, but it’s a start.

I also made a proof-of-concept, using pure HTML and CSS to code the design I had made so I could see how I wanted to approach it.

---

# Getting Started

Finally, it is time to start the actual product. I decided to build this site with [Eleventy](https://www.11ty.dev/), a simple static site generator that fit my needs. I built atop the [Vredeburg](https://github.com/dafiulh/vredeburg) starter, as it featured a lot of what I wanted.

## Functionality

Before anything else, I got a functional prototype of the site working with little CSS styling (it wasn’t pretty).

## Pages

I then started to code the actual site pages. I started with a base template that contained consistant components that all pages needed (such as the header, footer, etc). I used slight variations of this for the different pages of the site.

## Author System

In case down the line I ever want to feature guest authors, I decided to code an author system for posts. By this, I mean each post should be assigned its own author, which should also be displayed in the post preview.

During my planning, I had already designed a proof of concept, so implementing it wasn’t that tricky. Essentially, I gave each author an ID. This is so that if an author ever wants to change their name on the site, they can do so easily.

Each post is assigned an author ID (or not if I want the post to be anonymous), where I can then display author information in unique ways. For example, each author can have a short bio, which is then shown on their post alongside their name.

## Tag System

Similar to the author system, I also wanted to be able to mark certain posts with certain tags (for example, this post will be marked with “web dev”). I pretty much just replicated the author system for this, since it basically does the same thing.

---

# Launch

After writing a few initial posts, I was ready to launch the site. I went with [Netlify](), which is perfect for static sites like this. I bought my domain from [Google Domains](), and after configuring that, the website was finished and live at [{{ siteName.url }}]().

# Conclusion

This is how I went about designing this very website. I purposely kept things broad, but I will be taking much deeper dives into the specifics of future projects in future posts. Nevertheless, I hope this post gives you an outline of how I approach new projects, from start to finish.