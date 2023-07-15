import React from "react";
import "./scss/index.scss";
import { Navbar, Footer } from "../../layout";

export const OurStory = () => {
  return (
    <div>
      <Navbar />
      <div className="our_story_section">
        <div className="banner_section">
          <h1>Our Story</h1>
          {/* {loading ? "Loading" : ProudctList.filter(value => value.length)} */}
        </div>
        <div className="our_story_content">
          <h2>Our Story</h2>
          <div>
            <p>
              Fine linen existed during ancient Egyptian times 6,000 years ago.
              The Egyptians referred to it as 'Woven of Moonlight.'
            </p>
            <p>
              These days Native Linum has followed the same time honored
              craftsmanship to create the luxurious collections you see here
              today. From bedding, window treatments, tableware and so much
              more, we deliver the best of the best.
            </p>
            <p>
              Our process is a precise and arduous one, taking approximately 100
              days from start to finish. Extracting fibers from the stem is
              still done by hand. It is then separated, combed, spun, and dyed
              and put onto spools that in turn are set up to be woven into
              fabric. At this stage we cut by hand and sew our linens into the
              collections that you see today. This is costly in time and labor
              but reaps the ultimate reward.
            </p>
            <p>
              As linen fibers are hollow, they allow more air flow over your
              body than any other material. Highly absorbent, gaining up to 20%
              of their dry weight in moisture without feeling damp to the touch
              makes this an ideal fabric for getting a sound night’s sleep. Not
              only that, if you suffer from allergies, you can relax in the
              knowledge that linens antiallergic and anti-dust mite naturally
              occurring properties can possibly alleviate symptoms.
            </p>
            <p>
              Machine washable without the need for ironing give a comfy,
              relaxed look and feel to any decor, of course ironing is an option
              if so desired. An elegant addition with time honored sustainable
              craftsmanship, it's not a wonder that our linens are sought after
              by so many.
            </p>

          </div>
          <div>
          <video width={"100%"} controls>
                  <source src="https://wholesalenativelinum.com/images/story-video.mp4" type="video/mp4"/>
                  </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
