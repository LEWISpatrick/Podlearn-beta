"use client";

import { useState, useEffect } from "react";
import { EmailSubscriptionForm } from "@/components/emailform";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);

  useEffect(() => {
    fetchSubscriberCount();
  }, []);

  const fetchSubscriberCount = async () => {
    try {
      const response = await fetch("/api/email-count");
      const data = await response.json();
      setSubscriberCount(data.count);
    } catch (error) {
      console.error("Error fetching subscriber count:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-indigo-900">
            PodLearn Beta
          </h1>
          <p className="text-xl text-indigo-800 mb-8">
            Transform your learning experience with AI-generated podcasts while
            you sleep.
          </p>
          <EmailSubscriptionForm onSubscribe={fetchSubscriberCount} />
          {subscriberCount !== null && (
            <p className="mt-4 text-lg text-indigo-700">
              Join {subscriberCount} others waiting for the beta!
            </p>
          )}
        </section>

        {/* Feature Explanation */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-900 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Choose Your Topic"
              description="Select any subject you want to learn about, from history to coding."
              icon="🎯"
            />
            <FeatureCard
              title="AI-Generated Content"
              description="Our AI creates personalized podcast episodes tailored to your learning goals."
              icon="🤖"
            />
            <FeatureCard
              title="Learn While You Sleep"
              description="Listen to your custom podcasts as you drift off, reinforcing your learning."
              icon="💤"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-indigo-900">{title}</h3>
    <p className="text-indigo-700">{description}</p>
  </div>
);
