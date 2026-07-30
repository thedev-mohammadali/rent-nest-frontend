import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

const PropertySearch = () => {
  return (
    <div className="bg-background mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-xl p-4 shadow-sm md:flex-row">
      <Input placeholder="Search by location..." className="flex-1" />
      <Button className="w-fit">
        <Search className="h-4 w-4" />
        Search
      </Button>
    </div>
  );
};

export default PropertySearch;
