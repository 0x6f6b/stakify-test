import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { getSiteData } from "@/lib/fetchers";

export async function generateStaticParams() {
  const allSites = await prisma.site.findMany({
    select: {
      subdomain: true,
      customDomain: true,
    },
    // feel free to remove this filter if you want to generate paths for all sites
    where: {
      subdomain: "demo",
    },
  });

  const allPaths = allSites
    .flatMap(({ subdomain, customDomain }: any) => [
      subdomain && {
        domain: `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
      },
      customDomain && {
        domain: customDomain,
      },
    ])
    .filter(Boolean);

  return allPaths;
}

export default async function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const domain = decodeURIComponent(params.domain);
  const data = await getSiteData(domain);

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          <h1 className="font-title text-3xl font-bold">{data.name}</h1>
        </div>
        test
        <p className="text-lg">{data.description}</p>
      </div>
    </>
  );
}
