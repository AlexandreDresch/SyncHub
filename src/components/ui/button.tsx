interface ButtonProps {
  title: string;
  type: "button" | "reset" | "submit";
}

export default function Button({ title, type }: ButtonProps) {
  return (
    <button
      className="bg-white rounded-md w-full text-primary font-medium py-2"
      type={type}
    >
      <span>{title}</span>
    </button>
  );
}
