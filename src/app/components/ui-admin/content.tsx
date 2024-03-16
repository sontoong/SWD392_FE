import { Content } from "antd/es/layout/layout";
import React from "react";
import { useAppSelector } from "../../redux/hook";

export default function MyContent({ children }: { children: React.ReactNode }) {
  const { headerTitle } = useAppSelector((state) => state.header);
  const currentHeader = headerTitle[headerTitle.length - 1];
  return (
    <Content className="pb-20 pt-16">
      {currentHeader.title ? (
        <div className="bg-main p-5 text-xl uppercase text-white ">
          {currentHeader.title}
        </div>
      ) : (
        <></>
      )}
      <main className=" h-full bg-white">{children}</main>
    </Content>
  );
}
