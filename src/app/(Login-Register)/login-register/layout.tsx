import Image from "next/image";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-primary/15 flex gap-4 justify-between items-center h-svh p-4">
      {children}

      <div className="basis-1/2">
        <Image
          className="object-cover object-center max-w-2xl max-h-96 m-auto"
          src="/images/png/login-image.png"
          alt="login image"
          height={600}
          width={800}
        />
      </div>
    </main>
  );
}
