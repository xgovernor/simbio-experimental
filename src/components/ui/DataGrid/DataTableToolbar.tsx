"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter, TFilterItem } from "./DataTableFacetedFilter";
import { DataTableViewOptions } from "./DataTableViewOptions";

export type DataGridFilter = {
  key: string;
  label: string;
  // options: Record<string, TFilterItem[]>;
  options: TFilterItem[];
};

export type DataGridFilters = DataGridFilter[];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters?: DataGridFilters;
}

export function DataTableToolbar<TData>({
  table,
  filters = [],
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex w-full items-center justify-between space-x-2">
      <div className="flex flex-1 flex-wrap items-center gap-x-2 gap-y-3 space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {/* Define your faceted filters here */}
        {filters.map((filter, index) =>
          filter.options.length > 0 ? (
            <DataTableFacetedFilter
              key={filter.key}
              column={table.getColumn(filter.key)}
              title={filter.label}
              // options={filters[1].options}
              options={filter.options}
            />
          ) : null,
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <DataTableViewOptions table={table} />
    </div>
  );
}
