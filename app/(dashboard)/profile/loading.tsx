import { Loader2 } from "lucide-react";

export default function ProfileLoading() {
  return (
    <div className="grid h-[calc(100vh-9rem)] place-items-center">
      <div className="flex gap-3 items-center text-xl">
        <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> Chargement...
      </div>
    </div>
  );
}
