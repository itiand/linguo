import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="flex max-w-[200px] flex-col space-y-4 p-4">
      <Button size="sm">Primary</Button>
      <Button variant="secondary">Primary Outline</Button>
    </div>
  );
};

export default ButtonsPage;
