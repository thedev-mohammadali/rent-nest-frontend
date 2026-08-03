type Props = {
  message: string;
};

const EmptyState = ({ message }: Props) => {
  return (
    <div className="flex min-h-24 items-center justify-center">
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
};

export default EmptyState;
