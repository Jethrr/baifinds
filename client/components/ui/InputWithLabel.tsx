import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface labelProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

export const InputWithLabel: React.FC<labelProps> = ({
  label,
  id,
  type,
  placeholder,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 p-3">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
