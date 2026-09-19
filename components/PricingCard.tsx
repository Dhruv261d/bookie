'use client';

import { Check, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlanLimits, PlanType } from "@/lib/subscription-constants";

interface PricingCardProps {
    plan: PlanType;
    price: string;
    description: string;
    limits: PlanLimits;
    isCurrentPlan?: boolean;
    isPopular?: boolean;
    onSelect?: (plan: PlanType) => void;
}

const PricingCard = ({
    plan,
    price,
    description,
    limits,
    isCurrentPlan = false,
    isPopular = false,
    onSelect
}: PricingCardProps) => {
    const features = [
        { label: `${limits.maxBooks} Books Library`, included: true },
        { label: `${limits.maxSessionsPerMonth === Infinity ? 'Unlimited' : limits.maxSessionsPerMonth} Sessions / Mo`, included: true },
        { label: `${limits.maxDurationPerSession} Min / Session`, included: true },
        { label: "Voice Session History", included: limits.hasSessionHistory },
        { label: "Priority Support", included: plan === 'pro' },
    ];

    return (
        <div className={cn(
            "relative flex flex-col p-8 bg-white rounded-2xl transition-all duration-300",
            isPopular ? "shadow-soft-lg border-2 border-[var(--color-brand)] scale-105 z-10" : "shadow-soft border border-[var(--border-subtle)] hover:shadow-soft-md",
        )}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand)] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Sparkles size={14} />
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold font-serif capitalize text-[var(--text-primary)] mb-2">
                    {plan} Plan
                </h3>
                <p className="text-sm text-[var(--text-secondary)] min-h-[40px]">
                    {description}
                </p>
            </div>

            <div className="mb-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[var(--text-primary)] font-serif">{price}</span>
                    <span className="text-[var(--text-secondary)]">/month</span>
                </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                        {feature.included ? (
                            <div className="size-5 rounded-full bg-[#f3e4c7] flex items-center justify-center shrink-0">
                                <Check size={12} className="text-[#663820]" />
                            </div>
                        ) : (
                            <div className="size-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                <X size={12} className="text-gray-400" />
                            </div>
                        )}
                        <span className={cn(
                            feature.included ? "text-[var(--text-primary)]" : "text-gray-400"
                        )}>
                            {feature.label}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => onSelect?.(plan)}
                disabled={isCurrentPlan}
                className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all font-serif text-lg cursor-pointer",
                    isCurrentPlan 
                        ? "bg-gray-100 text-gray-500 cursor-default" 
                        : isPopular 
                            ? "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] shadow-md"
                            : "bg-white border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-gray-50"
                )}
            >
                {isCurrentPlan ? "Current Plan" : "Choose Plan"}
            </button>
        </div>
    );
};

export default PricingCard;
