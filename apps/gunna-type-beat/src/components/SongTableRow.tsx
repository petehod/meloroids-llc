import { memo } from "react";
import { getColorByFrequency } from "../utils/progressionFrequency.utils";
import { useHandleKeyDown } from "../hooks/useHandleKeyDown";
import { DataService } from "../services/data.services";

interface SongTableRowProps {
  name: string;
  tempo: number;
  songKey: string;
  chords: string[];
  progression: string;

  onClick?: () => void;
  gridCols?: string;
}

export const SongTableRow = memo(
  ({
    name,
    tempo,
    songKey,
    chords,
    progression,
    onClick,
    gridCols = "grid-cols-6"
  }: SongTableRowProps) => {
    const pfFrequency =
      DataService.singleChordProgressionFrequency(progression);

    const handleKeyDown = useHandleKeyDown(onClick);
    const pfToNumber = parseInt(pfFrequency?.frequency.split("%")[0] ?? "");

    const sliderColor = getColorByFrequency(pfToNumber);

    return (
      <div
        className={`grid ${gridCols} gap-4 items-center p-4 border-b last:border-b-0 bg-white text-dark hover:bg-gray-50 overflow-x-scroll md:overflow-hidden`}
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

          <div className="w-full h-4 bg-dark rounded-full flex justify-start">
            <div
              className={`h-full  rounded-full ${sliderColor}`}
              style={{ width: `${pfToNumber * 4}%` }}
            />
          </div>
          {pfFrequency?.frequency}
        </div>
      </div>
    );
  }
);
SongTableRow.displayName = "SongTableRow";
