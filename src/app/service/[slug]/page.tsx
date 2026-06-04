"use client";

import ServiceSinglePage from "../../../legacy/servicesPages/ServiceSinglePage";

export default function Page({ params }: { params: { slug: string } }) {
  return <ServiceSinglePage slug={params.slug} />;
}
