"use client";

import { PageHero } from "@/components/shared/PageHero";

export function StudioHero() {
  return (
    <PageHero
      index="02"
      section="Studio"
      title={["HYERI", "GWON"]}
      subtitle={
        <>
          Brand &amp; Product Designer
          <span className="block text-text-muted text-sm md:text-base mt-1">
            Seoul · Independent practice
          </span>
        </>
      }
    />
  );
}
