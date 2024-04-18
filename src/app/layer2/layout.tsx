
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
          Layout 2
          {children}
          </div>
    );
  }