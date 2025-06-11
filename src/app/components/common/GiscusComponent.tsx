"use client";

import React from "react";
import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return (
    <div className="mt-8">
      <Giscus
        repo="PriyanshuPz/Pz"
        repoId="R_kgDOO5tKEg"
        category="General"
        categoryId="DIC_kwDOO5tKEs4CrVUi"
        mapping="number"
        term="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="noborder_gray"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
