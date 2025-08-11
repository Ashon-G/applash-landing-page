import React, { ReactNode } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { Card } from "../utils/Card";
import { GhostButton } from "../buttons/GhostButton";
import { FiCheck, FiX } from "react-icons/fi";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
      }}
      className="relative overflow-hidden"
    >
      <MaxWidthWrapper className="relative z-10 mx-auto max-w-5xl py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>Simple pricing</SectionHeading>
          <SectionSubheading persistCenter>
            Start for free, upgrade as you grow.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PriceCard
            tier="Starter"
            price="$0/mo"
            bestFor="Test the waters"
            CTA={<GhostButton className="w-full">Get started free</GhostButton>}
            benefits={[
              { text: "One app", checked: true },
              { text: "Live preview", checked: true },
              { text: "Email support", checked: true },
              { text: "Automatic signing", checked: false },
              { text: "TestFlight upload", checked: false },
              { text: "Push notifications", checked: false },
            ]}
          />
          <PriceCard
            tier="Pro"
            price="$79/mo"
            bestFor="For growing projects"
            CTA={
              <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                14-day free trial
              </GhostButton>
            }
            benefits={[
              { text: "Three apps", checked: true },
              { text: "Automatic signing", checked: true },
              { text: "Push notifications", checked: true },
              { text: "TestFlight upload", checked: true },
              { text: "Priority support", checked: false },
              { text: "Custom branding", checked: false },
            ]}
          />
          <PriceCard
            tier="Business"
            price="Contact us"
            bestFor="For high-volume apps"
            CTA={<GhostButton className="w-full">Contact us</GhostButton>}
            benefits={[
              { text: "Unlimited apps", checked: true },
              { text: "Automatic signing", checked: true },
              { text: "Push notifications", checked: true },
              { text: "Store publishing", checked: true },
              { text: "Priority support", checked: true },
              { text: "Custom branding", checked: true },
            ]}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const PriceCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
}: {
  tier: string;
  price: string;
  bestFor: string;
  CTA: ReactNode;
  benefits: BenefitType[];
}) => {
  return (
    <Card>
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium ">{price}</span>
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

type BenefitType = {
  text: string;
  checked: boolean;
};

const Benefit = ({ text, checked }: BenefitType) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
          <FiCheck />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <FiX />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};
