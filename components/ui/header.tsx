interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="col-[1/2] row-[1/2] grid place-items-center border-b">
      <h1 className="col-[1/3] row-[1/2]">{title}</h1>
    </header>
  );
};
