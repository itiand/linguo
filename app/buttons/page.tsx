import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="flex flex-col space-y-4 p-4 max-w-[200px]">
      <Button size="sm">Primary</Button>
      <Button variant="secondary">Primary Outline</Button>
    </div>
  );
};

export default ButtonsPage;
