// src/app/layout.tsx

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio to showcase my skills and projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags or link stylesheets here */}
      </head>
      <body>
        {children} {/* Render the content of the current page */}
      </body>
    </html>
  );
}
