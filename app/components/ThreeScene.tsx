"use client";

import dynamic from "next/dynamic";

const ThreeSceneClient = dynamic(() => import("./ThreeSceneClient"), {
  ssr: false,
});

export default function ThreeScene() {
  return <ThreeSceneClient />;
}
