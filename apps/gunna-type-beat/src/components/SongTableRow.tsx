import { memo } from "react";

interface SongTableRowProps {
  name: string;
  tempo: number;
  songKey: string;
  chords: string[];
  youtube: string;
  progression: string;
  progressionFrequency: string;
  onClick?: () => void;
}

export const SongTableRow = memo(
  ({
    name,
    tempo,
    songKey,
    chords,
    youtube,
    progression,
    progressionFrequency,
    onClick
  }: SongTableRowProps) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        onClick();
      }
    };

    return (
      <div
        className="grid grid-cols-6 gap-4 items-center p-4 border-b last:border-b-0 bg-white text-dark hover:bg-gray-50 overflow-hidden flex-wrap"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="italic cursor-pointer underline">{name}</div>
        <div>{tempo} bpm</div>
        <div>{songKey}</div>

        <div className="flex flex-wrap gap-2">
          {chords.map((chord) => (
            <span key={chord}>{chord}</span>
          ))}
        </div>

        <div>
          {progression}

          <div className="w-full h-4 bg-primary rounded-full flex justify-start">
            <div
              className=" h-full bg-dark rounded-full"
              style={{ width: progressionFrequency }}
            />
          </div>
        </div>
        <div>
          <a
            className="text-blue-500 underline "
            href={youtube}
            rel="noopener noreferrer"
            style={{ maxWidth: "100%" }}
            target="_blank"
          >
            {youtube}
          </a>
        </div>
      </div>
    );
  }
);
SongTableRow.displayName = "SongTableRow";
