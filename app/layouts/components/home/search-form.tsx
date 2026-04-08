import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Search, SearchIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { cn, formatPrice } from "~/lib/utils";

const listingTypes = ["all", "land", "land_durian", "house"] as const;

const PRICE_MIN = 0;
const PRICE_MAX = 10_000_000_000;
const PRICE_STEP = 50_000;

const searchFormSchema = z.object({
  keyword: z.string().optional(),
  listingType: z.enum(listingTypes).default("all"),
  location: z.string().optional(),
  propertyType: z.string().optional(),
  area: z.string().optional(),
  priceRange: z.tuple([z.number(), z.number()]).optional(),
});

type SearchFormValues = z.input<typeof searchFormSchema>;

const listingTypeLabels: Record<(typeof listingTypes)[number], string> = {
  all: "Tất cả",
  land_durian: "Vườn sầu riêng",
  land: "Đất",
  house: "Nhà ở",
};

const locations = [
  { value: "all", label: "Tất cả các địa phương" },
  { value: "Đạ Huoai", label: "Đạ Huoai" },
  { value: "Đạ Lư", label: "Đạ Lư" },
  { value: "Đạ M'ri", label: "Đạ M'ri" },
  { value: "Đạ Tẻh", label: "Đạ Tẻh" },
  { value: "Đạ Trì", label: "Đạ Trì" },
  { value: "Đạ Xỉn", label: "Đạ Xỉn" },
  { value: "Đạ Xỉn", label: "Đạ Xỉn" },
];

const propertyTypes = [
  { value: "all", label: "Tất cả loại bất động sản" },
  { value: "house", label: "Nhà ở" },
  { value: "land", label: "Đất" },
];

const areaOptions = [
  { value: "all", label: "Tất cả các diện tích" },
  { value: "1000_2000", label: "1000 - 2000 m2" },
  { value: "2000_3000", label: "2000 - 3000 m2" },
  { value: "3000_4000", label: "3000 - 4000 m2" },
  { value: "4000_5000", label: "4000 - 5000 m2" },
  { value: "5000+", label: "5000+ m2" },
];

export default function SearchForm() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const form = useForm({
    defaultValues: {
      keyword: "",
      listingType: "all",
      location: "all",
      propertyType: "all",
      area: "all",
      priceRange: [PRICE_MIN, PRICE_MAX] as [number, number],
    } satisfies SearchFormValues as SearchFormValues,
    onSubmit: ({ value }) => {
      console.log("Search:", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="w-full max-w-3xl rounded-xl bg-white p-5 shadow-lg"
    >
      {/* Row 1: Keyword + Listing Type Toggle */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Keyword Input */}
        <form.Field name="keyword" validators={{ onChange: z.string() }}>
          {(field) => (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Từ khóa"
                value={field.state.value ?? ""}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="border-0 pl-9 shadow-none focus-visible:ring-0"
              />
            </div>
          )}
        </form.Field>

        {/* Listing Type Toggle */}
        <form.Field
          name="listingType"
          validators={{ onChange: z.enum(listingTypes) }}
        >
          {(field) => (
            <div className="flex gap-2">
              {listingTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => field.handleChange(type)}
                  className={cn(
                    "rounded-full px-5 py-1.5 text-sm font-medium transition-colors",
                    field.state.value === type
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                  )}
                >
                  {listingTypeLabels[type]}
                </button>
              ))}
            </div>
          )}
        </form.Field>
      </div>

      <hr className="my-4 border-gray-100" />

      {/* Row 2: Selects */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Location Select */}
        <form.Field name="location" validators={{ onChange: z.string() }}>
          {(field) => (
            <Select
              value={field.state.value}
              onValueChange={(val) => field.handleChange(val)}
            >
              <SelectTrigger className="flex-1 border-0 shadow-none focus-visible:ring-0">
                <SelectValue placeholder="Tất cả các địa phương" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </form.Field>

        {/* Property Type Select */}
        <form.Field name="propertyType" validators={{ onChange: z.string() }}>
          {(field) => (
            <Select
              value={field.state.value}
              onValueChange={(val) => field.handleChange(val)}
            >
              <SelectTrigger className="flex-1 border-0 shadow-none focus-visible:ring-0">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((pt) => (
                  <SelectItem key={pt.value} value={pt.value}>
                    {pt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </form.Field>

        {/* Area Select */}
        <form.Field name="area" validators={{ onChange: z.string() }}>
          {(field) => (
            <Select
              value={field.state.value}
              onValueChange={(val) => field.handleChange(val)}
            >
              <SelectTrigger className="flex-1 border-0 shadow-none focus-visible:ring-0">
                <SelectValue placeholder="Tất cả các diện tích" />
              </SelectTrigger>
              <SelectContent>
                {areaOptions.map((area) => (
                  <SelectItem key={area.value} value={area.value}>
                    {area.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </form.Field>
      </div>

      {/* Advanced Search: Price Range */}
      {showAdvanced && (
        <div className="mt-4">
          <form.Field name="priceRange">
            {(field) => {
              const [min, max] = field.state.value ?? [PRICE_MIN, PRICE_MAX];
              return (
                <div className="space-y-4">
                  <p className="text-center text-sm text-gray-600">
                    From{" "}
                    <span className="font-semibold text-primary">
                      {formatPrice(min)}
                    </span>{" "}
                    To{" "}
                    <span className="font-semibold text-primary">
                      {formatPrice(max)}
                    </span>
                  </p>
                  <Slider
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step={PRICE_STEP}
                    value={[min, max]}
                    onValueChange={(val) =>
                      field.handleChange(val as [number, number])
                    }
                  />
                </div>
              );
            }}
          </form.Field>
        </div>
      )}

      {/* Row 3: Advance Search + Submit */}
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => setShowAdvanced((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
        >
          <SearchIcon className="size-4" />
          <span>Tìm kiếm nâng cao</span>
        </button>
        <Button
          type="submit"
          className="rounded-lg bg-primary px-8 text-white hover:bg-primary/80"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
