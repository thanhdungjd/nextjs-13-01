"use client";
import React from "react";

export default function Error(props: { error: Error }) {
  return (
    <div>
      <div>Error Blog slug page:</div>
      <div style={{ color: "red" }}>{props.error.message}</div>
    </div>
  );
}
