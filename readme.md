# nuxt steps

I walked a lot, so I decided to build a very simple app that calculates the total number of steps I walked in 2020 (3,776,610, which is 1,653 miles / 2,660 km) and also the number of steps I walked per week.

### tech stack

**Front end**: Nuxt (Vue)

**Back end**: Express (Node)

### goals of this project

The main goal of this project was exploration! Specifically I wanted to play around with two things: (1) functional programming, and (2) is Nuxt. A project this simple really didn't benefit from Nuxt, but I wanted to use it anyways just so I could get a feel for it.

With that being said, I don't think the Nuxt code is that interesting. The most interesting bit of code in this project is probably going to be in the [`utils`](https://github.com/ivana94/nuxt-steps/tree/main/server/utils) directory, which is where the functional bits of code are. I tried to not only write in a functional style, but also think about what code should go in what file.

I start off by exporting my step data from my app as a CSV. The app just exports the step data without filters (so I can't filter by week or year in the app), so my first goal was to do split up the data into weeks. From there I was able to calculate weekly and yearly step data.
