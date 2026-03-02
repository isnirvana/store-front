import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertMessage({ icon, title, description, variant = "" }) {
  return (
    <Alert
      variant={variant}
      className={`max-w-md w-80 border 
  ${
    variant === "success"
      ? "border-green-500"
      : variant === "destructive"
        ? "border-red-500"
        : "border-gray-300"
  } 
  bg-white dark:bg-slate-800 shadow-sm`}
    >
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
