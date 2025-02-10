import Providers from "./providers";
import BaseLayout from "../components/BaseLayout/BaseLayout";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
