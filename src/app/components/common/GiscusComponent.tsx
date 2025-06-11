"use client";

import React from "react";
import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return (
    <div className="mt-8">
      <Giscus
        repo="PriyanshuPz/Pz"
        repoId="R_kgDOMq_-tA"
        category="General"
        categoryId="DIC_kwDOMq_-tM4Cirpt"
        mapping="number"
        term="2"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="noborder_dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
