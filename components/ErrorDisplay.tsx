interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay = ({error}:ErrorDisplayProps) => {
  return (
    <div className="p-8 font-bold text-xs sm:text-xl text-red-400">
      {error}
    </div>
  );
};