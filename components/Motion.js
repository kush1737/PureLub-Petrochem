"use client";
import { useEffect } from "react";
import { init } from "../lib/client";

export default function Motion() {
  useEffect(() => init(), []);
  return null;
}
