import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import FooterEncrypted from "@/shared/FooterEncrypted/FooterEncrypted";
import CurrentHeader from "@/shared/CurrentHeader";
import { InitAuthClient } from "@/shared/InitAuthClient";
import { StripeProvider } from "@/shared/components/StripeProvider";

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <>
      <InitAuthClient />
      <NextIntlClientProvider messages={messages}>
       <StripeProvider>
          <CurrentHeader />
          {children}
          <FooterEncrypted />
        </StripeProvider>
      </NextIntlClientProvider>
    </>
  );
}
