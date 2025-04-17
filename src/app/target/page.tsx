"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TargetPage() {
  const router = useRouter();

  function sendMessage() {
    const res = {
      eventType: "navigation",
      eventName: "close",
      payload: null,
    };

    // if (window.ReactNativeWebView) {
    //   console.log("MessagePosted", JSON.stringify(res));
    // }
    window.ReactNativeWebView?.postMessage(JSON.stringify(res));
  }

  useEffect(() => {
    sendMessage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Target Page</h1>
      <button
        onClick={() => router.back()}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
        Go Back
      </button>
    </div>
  );
}
