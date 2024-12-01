import { memo } from "react";

type SongTableRowProps = {
  name: string;
  tempo: number;
  songKey: string;
  chords: string[];
  youtube: string;
  progression: string;
  progressionFrequency: string;
  onClick?: () => void;
};

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
    return (
      <div
        className="grid grid-cols-6 gap-4 items-center p-4 border-b last:border-b-0 bg-white text-dark hover:bg-gray-50 overflow-hidden flex-wrap"
        onClick={onClick}
      >
        <div className="italic cursor-pointer underline">{name}</div>
        <div>{tempo} bpm</div>
        <div>{songKey}</div>

        <div className="flex flex-wrap gap-2">
          {chords.map((chord, idx) => (
            <span key={idx}>{chord}</span>
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
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline "
            style={{ maxWidth: "100%" }}
          >
            {youtube}
          </a>
        </div>
      </div>
    );
  }
);
