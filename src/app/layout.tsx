import SupabaseProvider from "@blog/auth/SessionProvider";
import { Content } from "@blog/components/content/Content";
import Navbar from "@blog/components/navbar/Navbar";
import { Nunito } from "next/font/google"
import './global.css';
import StyledComponentsRegistry from "./styled/StyledComponentRegistry";

export const revalidate = 0;

export const metadata = {
  title: 'Next Blog',
  description: 'Marcos Rz.',
}

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--nunito-font',
})

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en" style={nunito.style}>
    <body>
      <StyledComponentsRegistry>
        <SupabaseProvider>
          <Navbar />
          <Content>
            {children}
          </Content>
        </SupabaseProvider>
      </StyledComponentsRegistry>
    </body>

  </html>
)

export default RootLayout;
