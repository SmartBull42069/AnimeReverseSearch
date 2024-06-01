import Button from "@mui/material/Button";
import { useFormStatus } from "react-dom";
export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        disabled={pending}
        variant="contained"
        type="submit"
        className="block mt-3"
      >
        {pending ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
}
