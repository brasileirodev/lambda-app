interface FontSwapLetterProps {
  id: string;
  letter: string;
}

export function FontSwapLetter({ id, letter }: FontSwapLetterProps) {
  return (
    <span className="fontSwapLetter" id={id}>
      <span className="ghost" aria-hidden="true">{letter}</span>
      <span className="visible">{letter}</span>
    </span>
  );
}
