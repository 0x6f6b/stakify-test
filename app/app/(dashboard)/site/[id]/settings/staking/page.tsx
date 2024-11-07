import prisma from "@/lib/prisma";
import Form from "@/components/form";
import { updateSite } from "@/lib/actions";

export default async function SiteSettingsStaking({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.site.findUnique({
    where: {
      id: decodeURIComponent(params.id),
    },
  });

  return (
    <div className="flex flex-col space-y-6">
      <Form
        title="Collection Mint Address"
        description="In Solana's NFT ecosystem, each collection can be identified by a unique collection mint address."
        helpText="Make sure to copy the complete address."
        inputAttrs={{
          name: "mintAddress",
          type: "text",
          defaultValue: data?.mintAddress!,
          placeholder: "",
        }}
        handleSubmit={updateSite}
      />
    </div>
  );
}
