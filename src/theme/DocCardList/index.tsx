import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
  useDocById,
} from "@docusaurus/plugin-content-docs/client";
import DocCard from "@theme/DocCard";
import type { Props } from "@theme/DocCardList";
import type { PropVersionDoc } from "@docusaurus/plugin-content-docs";
import { categoryHrefToDocID } from "/server/docs-helpers";

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props: Props): JSX.Element {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items).map((item) => {
    const doc = useDocById(item.docId);

    if (item.type == "link") {
      return {
        href: item.href,
        label: item.label,
        description: doc?.description,
      };
    }
    if (item.type == "category") {
      const indexPage = useDocById(categoryHrefToDocID(item.href) ?? undefined);

      return {
        href: item.href,
        label: item.label + " (section)",
        description: indexPage?.description,
      };
    }
  });

  return (
    <ul className={clsx("row", className)}>
      {filteredItems.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.label}</a>: {item.description}
        </li>
      ))}
    </ul>
  );
}
