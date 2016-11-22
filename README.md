## Questions

1. Is this popup going to be used in a different view?
1. What happens when "current" reaches the target (in terms of the progress bar)?
  - For this I had to move the label below the progress bar and place it inside
  the bar itself. So when it reaches 100% there's no overlapping of the content.
1. Since we're using animations, what are going to be the targeted browsers for
  this element?
  - I assumed IE10+ and used plain jQuery animate. If we're targeting older browsers
  the animations will be limited.
1. I also assumed the design for the mobile view. Instead of showing the elements inline, I added the usual stacking feature for smaller screens.

Check [demo ](https://dcortes92.github.io/progress-challenge/dist) here.
