import { Content } from "antd/es/layout/layout";
import React from "react";

export default function MyContent({ children }: { children: React.ReactNode }) {
  return (
    <Content className="pb-20 pt-16">
      <main className="h-full bg-white">{children}</main>
    </Content>
  );
}
