import { memo } from "react";
import { getColorByFrequency } from "../utils/progressionFrequency.utils";
import { useHandleKeyDown } from "../hooks/useHandleKeyDown";
import type { ChordProgressionFrequency } from "../services/data.services";
import { useGetAllProgressions } from "../hooks/useProgressions";

interface SongTableRowProps {
  name: string;
  tempo: string;
  songKey: string;
  chords: string;
  progressionIds: string[];
  chordProgressionFrequency?: ChordProgressionFrequency;
  onClick?: () => void;
  gridCols?: string;
}

export const SongTableRow = memo(
  ({
    name,
    tempo,
    songKey,

    progressionIds,
    onClick,
    chordProgressionFrequency,
    gridCols = "grid-cols-6"
  }: SongTableRowProps) => {
    const allProgressions = useGetAllProgressions();
    const thisProgression = allProgressions?.filter(
      (progression) => progression.id === progressionIds[0]
    );

    const handleKeyDown = useHandleKeyDown(onClick);

    const percentage = chordProgressionFrequency?.percentage ?? 0;
    const count = chordProgressionFrequency?.count;
    const sliderColor = getColorByFrequency(percentage);
    if (!thisProgression) return null;

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
          <span>{thisProgression[0].numerals}</span>
        </div>

        <div>
          {thisProgression[0].numerals}
          <div className="w-full h-4 bg-dark rounded-full flex justify-start">
            <div
              className={`h-full  rounded-full ${sliderColor}`}
              style={{ width: `${percentage * 4}%` }}
            />
          </div>
          {percentage}% | {count}x
        </div>
      </div>
    );
  }
);
SongTableRow.displayName = "SongTableRow";
