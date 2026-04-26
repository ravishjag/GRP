export function FilmDivider({ ornament = true }: { ornament?: boolean }) {
  return (
    <div className="film-divider my-12">
      {ornament && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-gold">
          ◆
        </span>
      )}
    </div>
  );
}
