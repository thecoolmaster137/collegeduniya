import type { MetaFunction } from "@remix-run/react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";

export const meta: MetaFunction = () => {
  return [{ title: "Services" }];
};

export default function Services() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Services</PageHeaderHeading>
        <PageHeaderDescription>Page Under Development.</PageHeaderDescription>
      </PageHeader>
    </div>
  );
}
