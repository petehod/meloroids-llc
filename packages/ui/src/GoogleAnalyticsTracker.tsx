"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

interface GoogleProps {
  gaId: string;
}

export const GoogleAnalyticsTracker = ({ gaId }: GoogleProps) => {
  return (
    process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={gaId} />
  );
};
