import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="m-0 h-full p-0">
      <Head />
      <body className=" m-0 h-full bg-light-neutral font-jetbrainsMono dark:bg-dark-neutral">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
