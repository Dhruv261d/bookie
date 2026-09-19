'use client';

import PricingCard from "@/components/PricingCard";
import { PLANS, PLAN_LIMITS } from "@/lib/subscription-constants";
import { useSubscription } from "@/hooks/useSubscription";
import { toast } from "sonner";

export default function SubscriptionsPage() {
  const { plan: currentPlan, isLoaded } = useSubscription();

  const handleSelectPlan = (plan: string) => {
    if (plan === PLANS.FREE) {
        toast.info("You're already on the free plan!");
        return;
    }
    // In a real app, this would redirect to a Stripe checkout session
    toast.success(`${plan.toUpperCase()} checkout is coming soon!`);
  };

  return (
    <div className="container wrapper py-10 sm:py-20">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-[var(--text-primary)]">
            Elevate Your Reading
        </h1>
        <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
          Choose the plan that fits your literary journey. Upgrade to unlock more books, 
          longer sessions, and your personal voice session history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <PricingCard 
            plan={PLANS.FREE}
            price="$0"
            description="Perfect for casual readers just starting out."
            limits={PLAN_LIMITS[PLANS.FREE]}
            isCurrentPlan={isLoaded && currentPlan === PLANS.FREE}
            onSelect={handleSelectPlan}
        />
        <PricingCard 
            plan={PLANS.STANDARD}
            price="$9"
            description="For avid readers who want more time with their favorite books."
            limits={PLAN_LIMITS[PLANS.STANDARD]}
            isPopular={true}
            isCurrentPlan={isLoaded && currentPlan === PLANS.STANDARD}
            onSelect={handleSelectPlan}
        />
        <PricingCard 
            plan={PLANS.PRO}
            price="$19"
            description="The ultimate experience with unlimited sessions and maximum depth."
            limits={PLAN_LIMITS[PLANS.PRO]}
            isCurrentPlan={isLoaded && currentPlan === PLANS.PRO}
            onSelect={handleSelectPlan}
        />
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-[var(--text-muted)]">
            All plans include access to our full library of standard voices. 
            Pricing is in USD.
        </p>
      </div>
    </div>
  );
}
