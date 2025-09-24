import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

interface FilterSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
  showIcon?: boolean;
}

export function FilterSelect({ placeholder, options, showIcon = false }: FilterSelectProps) {
  return (
    <Select>
      <SelectTrigger className="w-48">
        {showIcon && <Filter className="w-4 h-4 mr-2" />}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}