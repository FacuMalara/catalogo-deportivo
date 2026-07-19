"use client";

import { Select, ListBox } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

type CategoryOption = {
  slug: string;
  name: string;
};

export function CatalogFilters({
  categories,
}: {
  categories: CategoryOption[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get("categoria") ?? "all";

  return (
    <Select
      aria-label="Filtrar por categoría"
      selectedKey={selected}
      onSelectionChange={(key) => {
        const params = new URLSearchParams(searchParams.toString());

        if (key === "all") {
          params.delete("categoria");
        } else {
          params.set("categoria", String(key));
        }

        const query = params.toString();
        router.push(query ? `/?${query}` : "/");
      }}
      className="w-full max-w-xs"
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="all" textValue="Todas las categorías">
            Todas las categorías
          </ListBox.Item>
          {categories.map((category) => (
            <ListBox.Item
              key={category.slug}
              id={category.slug}
              textValue={category.name}
            >
              {category.name}
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
