import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { Card } from "../utils/Card";
import { SiX } from "react-icons/si";
import { BubbleButton } from "../buttons/BubbleButton";
import { motion } from "framer-motion";
import { useWindowSize } from "../utils/useWindowSize";
import { CornerGrid } from "../utils/CornerGrid";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";

export const Customers = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const shouldCollapseColumns = width ? width <= 768 : false;

  return (
    <section id="testimonials" className="relative overflow-hidden">
      <MaxWidthWrapper className="relative z-10 py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading>Loved by site owners</SectionHeading>
          <SectionSubheading>
            Creators around the world use Applash to reach mobile users and
            grow their businesses.
          </SectionSubheading>
        </SectionHeadingSpacing>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          style={{
            overflow: "hidden",
          }}
          variants={{
            open: {
              height: "fit-content",
            },
            closed: {
              height: 400,
            },
          }}
          className="relative grid grid-cols-1 gap-3 md:grid-cols-3"
        >
          {shouldCollapseColumns ? (
            <>
              <ReviewsColumn
                reviews={[...REVIEWS.left, ...REVIEWS.center, ...REVIEWS.right]}
              />
            </>
          ) : (
            <>
              <ReviewsColumn reviews={REVIEWS.left} />
              <ReviewsColumn reviews={REVIEWS.center} />
              <ReviewsColumn reviews={REVIEWS.right} />
            </>
          )}

          <motion.div
            variants={{
              open: {
                top: "100%",
              },
              closed: {
                top: "0%",
              },
            }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
          />
        </motion.div>
        <BubbleButton
          onClick={() => setOpen((pv) => !pv)}
          className="mx-auto mt-12"
        >
          {open ? "View less" : "View more"}
        </BubbleButton>
      </MaxWidthWrapper>
      <CornerGrid />
    </section>
  );
};

const ReviewsColumn = ({ reviews }: { reviews: typeof REVIEWS.left }) => {
  return (
    <div className="h-fit space-y-3">
      {reviews.map((r) => (
        <Card
          style={{
            padding: "20px",
          }}
          key={r.name}
        >
          <div className="mb-1.5 flex items-center justify-between">
            <div className="relative flex items-center gap-2 py-2 text-xs">
              <img
                src={r.src}
                alt={`Placeholder image for faux user ${r.name}`}
                className="size-8 rounded-full"
              />
              <div>
                <span className="block font-medium text-zinc-300">
                  {r.name}
                </span>
                <span className="block text-zinc-500">{r.handle}</span>
              </div>
            </div>

            <SiX className="text-sky-300" />
          </div>
          <p>{r.review}</p>
        </Card>
      ))}
    </div>
  );
};

const REVIEWS = {
  left: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      name: "John Johnson",
      handle: "@johns6",
      review:
        "Applash turned our blog into an app before lunch. So easy!",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan",
      name: "Dan Daniels",
      handle: "@DannyD",
      review:
        "The live preview let us fine-tune everything instantly.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phil",
      name: "Phil Phillips",
      handle: "@phillipsp55104",
      review:
        "Publishing to TestFlight without a Mac blew my mind.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andy",
      name: "Andy Anderson",
      handle: "@andyandyandy",
      review:
        "Our customers love the push notifications powered by Applash.",
    },
  ],
  center: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steve",
      name: "Steve Stevenson",
      handle: "@steves",
      review: "No code needed and the app feels completely native.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
      name: "Peter Peterson",
      handle: "@petey.pete",
      review:
        "Payment plans with Stripe were set up in minutes.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paul",
      name: "Paul Paulson",
      handle: "@p.paulson44",
      review:
        "We launched on iOS and Android with one click.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phil",
      name: "Andrew Andrews",
      handle: "@andrewA",
      review:
        "Support was fast and friendly throughout the build.",
    },
  ],
  right: [
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeff",
      name: "Jeff Jefferson",
      handle: "@jeffJ99",
      review:
        "The templates look great right out of the box.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jess",
      name: "Jess Jessica",
      handle: "@jess",
      review:
        "Finally, a simple way to offer an app to our users.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ben",
      name: "Ben Benjamin",
      handle: "@banjamin4491",
      review:
        "Applash handles updates automatically—huge time saver.",
    },
    {
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank",
      name: "Frank Franklin",
      handle: "@frankyf00",
      review:
        "Our site became a smooth Flutter app in no time.",
    },
  ],
};
