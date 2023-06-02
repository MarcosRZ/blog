import SupabaseProvider from "@blog/auth/SupabaseProvider";
import { Content } from "@blog/components/content/Content";
import Navbar from "@blog/components/navbar/Navbar";
import { Nunito } from "next/font/google"
import './global.css';

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
      <SupabaseProvider>
          <Navbar />
          <Content>
            {children}
          </Content>
      </SupabaseProvider>
    </body>

  </html>
)

export default RootLayout;
