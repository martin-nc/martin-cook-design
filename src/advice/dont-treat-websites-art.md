---
title: Don't treat websites like art
order: 6
description: "Why you should not do what is commonly done in development: treat websites and applications as artworks."
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word astro against an illustration of planets and stars."
---

There are basically four element to developing a website or application:

1. Research and strategy (see [Don't skip the strategy](/advice/dont-skip-strategy/)).
2. Information architecture. This is working out the structure of the site: what information should go where, and what label will you give it? When we talked about [testing with wireframes](/advice/test-little-often/), this is testing the information architecture.
3. Graphic design. This is informed by 1 and 2, which give you the structure the site should have, not only in terms of navigation (which pages should go under which menu item), but in terms of page layout (what items are needed and where they should go).
4. Coding of the site.

**Getting input from stakeholders and users takes place throughout** (see [Test little and often](/advice/test-little-often/)) These elements don't have to happen one after another, incidentally. They can run in parallel or iteratively.

What sometimes happens is that there are cursory discussions around 1 and 2, more heated discussions around 3, and excited discussions about the cool technology you're going to use in 4. The way the website is approved is that internal stakeholders are shown screenshots and a demo. If it looks nice and seems to work, everyone is happy.

## The hierarchy of user needs

In his 2011 book <cite>Designing for Emotion</cite>, Aaron Walter proposed a hierarchy of user needs. The hierarchy progresses through functional, reliable, usable to pleasurable. If you fulfil all these needs then you give users "delight".

How does this hierarchy relate to our points 1-4 above? Well, points 1 and 2 (Research and strategy, Information architecture), plus iterative user testing, address the first three stages of the hierarchy. The "Pleasurable" at the top of the hierarchy is given by point 3. The hierarchy only looks at user experience, so does not cover point 4, the coding stage.

INSERT IMAGE

This hierarchy has become a popular paradigm, and certainly confirms my own experience. In fact, I'd say with some individuals, you can remove the "pleasurable" bit at the top, since they are not sensitive to the aesthetics of websites, but very sensitive to whether they can find things on the site or not.

Unfortunately, the bottom layers of the hierarchy are often skipped over, and instead discussions revolve around what is fashionable in graphic design and technology.

To keep focusing on what's most important, we can ask the questions we looked at in [Don't skip the strategy](/advice/dont-skip-strategy/), like "Why does the website or app exist?"

<div class="tinted">

## Design blindness

People have varied sensitivity to what something looks like. Some people have strong feelings about graphic design, and notice subtle differences in colours and font shapes, whereas others barely notice the aesthetics.

I've shown choices of three designs to people, and some people have gone into a close analysis of what they like or dislike, whereas others have looked blank and said, "What's the difference?"

The aesthetically sensitive don't necessarily know the aesthetically indifferent exist (see [Beware of false consensus](/advice/beware-false-consensus/)). Individual differences in aesthetic sensitivity have been extensively studied by psychologists. For example, see [A new conception of visual aesthetic sensitivity](https://www.researchgate.net/publication/336286225_A_new_conception_of_visual_aesthetic_sensitivity) by Corradi _et al._ (2019) and its references.

What ths means is that some of your users will hardly notice the effort you put into the appearance of your site. They are more likely to notice if they can't do what they want to do on the site.

**This does not mean aesthetics is not important.** It just means it should not come before the usefulness of the site or app.

</div>

<div class="highlighted">

## Case Study: archives you can't search

In the UK each county has an archives which holds historic documents about the county. One of the main things you want to do on an archives website is to search their records. Perhaps you want to research your family history or local area, and you want to see if the archives has any relevant records.

An archives to me launched a site where the advanced search doesn't work. Every search returns the same 62,000 results. Why? Because the advanced search opened a modal window that relied entirely on JavaScript, and the JavaScript wasn’t passing the search terms to the scripts that did the search.

So instead of looked for your search terms in the database, the script defaulted to searching for “.\*”, which is a symbol for "anything with one or more characters in it". As long as a record had a letter, number or symbol in it, it got returned. So all the records in the archive got returned as the result.

Again, clearly no-one tested this. There is one field that does do a search but returns “@todo No posts page”. This is a note the web developer had left in to remind themselves to make a “No results” page, but they never made the page. No-one checked the search enough to notice the page didn’t exist.

There are also a couple of interesting usability issues. The search form has no submit button, which may look clean, but how do you submit a search? You can press return, but that returns all records in the database, so did the form submit properly? You could stop this by having a script to stop or warn of searches for “.\*”, since it's unlikely anyone will search for that.

A final example: the advanced search form does not save search terms. If you want to go back and tweak one term you use then you have to type them all in again. Testing with one single user would probably have flagged this.

</div>

<div class="tinted">

## Have websites got worse?

I was recently doing a course with a librarian from an academic institute. Librarians use the web a lot to search for references, look in digital archives and use social media.

She said she'd just been to a conference for librarians and someone had said, "Is it just me, or have websites got worse in the last ten years?" They all agreed they had: websites were more complicated to use, and it was more difficult to find things.

It's curious how often I hear this observation from people who have used the web for a long time. I don't know if this is true. If it were, one explanation is that there is much more information online than there was ten or twenty years ago, so it is more difficult to locate.

Another might be that the web is driven more by design and technology trends rather than usability and customer service. Joseph Schumpeter talked about the concept of "creative destruction" in capitalism, that products in a free market economy are always trying to "disrupt" existing products, by claiming they are more "modern" because they do something better or different. They have a new emotional appeal.

The web is capitalism on steroids. It is a whirl of continuously changing technology and "modern best practices", each competing to imply other approaches are outdated or inadequate. This plays on some people's fear of being weird and out of touch.

It also provides decision makers a way of judging which technology and design approach to use. The assumption is that is enough people are saying you should use approach A, and are using it, then approach A must be a good one to take.

The lesson here is to be aware of this, and be aware that the approach most in vogue may not be the one that matches the needs of you or your users.

</div>
