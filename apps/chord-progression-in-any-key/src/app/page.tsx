"use client";
import { Form } from "@repo/ui/Form";
import { Label } from "@repo/ui/Label";
import { Input } from "@repo/ui/Input";
import { Button } from "@repo/ui/Button";
import { useCallback, useState } from "react";
import {
  generateProgressionsInAllKeys,
  ProgressionInAllKeys,
  type EnteredChordProgression
} from "@repo/chord-progressions/generate-progressions";
import { motion } from "framer-motion";
import { ChordsInAllKeysContainer } from "../components/ChordsInAllKeysContainer";
export default function Home() {
  const [chordsInAllKeys, setChordsInAllKeys] = useState<
    ProgressionInAllKeys[]
  >([]);
  const [chordProgressionInfo, setChordProgressionInfo] =
    useState<EnteredChordProgression>({
      numerals: "",
      is_major: false
    });

  const FORM_FIELDS = [
    {
      title: "Chord Progression Numerals",
      sharedValue: "numerals",
      placeholder: "I IV V"
    },
    {
      title: "Is Major",
      sharedValue: "is_major",
      type: "checkbox"
    }
  ];

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = event.target;
      setChordProgressionInfo((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
      setChordsInAllKeys([]);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!chordProgressionInfo.numerals) return;
      const data = generateProgressionsInAllKeys(chordProgressionInfo);

      setChordsInAllKeys(data);
    },
    [chordProgressionInfo]
  );

  return (
    <motion.main className="flex " layout={true}>
      <Form
        onSubmit={handleSubmit}
        backgroundColor="bg-dark"
        title="Enter a chord progression in any key"
        button={
          <Button
            backgroundColor="bg-white"
            textColor="text-dark"
            type="submit"
            maxWidth="100%"
          >
            Submit
          </Button>
        }
      >
        {FORM_FIELDS.map((field) => (
          <div key={field.title}>
            <Label htmlFor={field.sharedValue} text={field.title} />
            <Input
              placeholder={field.placeholder}
              id={field.sharedValue}
              name={field.sharedValue}
              type={field.type}
              onChange={handleChange}
              value={
                field.type === "checkbox"
                  ? undefined
                  : String(
                      chordProgressionInfo[
                        field.sharedValue as keyof EnteredChordProgression
                      ]
                    )
              }
              checked={
                field.type === "checkbox"
                  ? chordProgressionInfo[
                      field.sharedValue as keyof EnteredChordProgression
                    ] === true
                  : undefined
              }
            />
          </div>
        ))}
      </Form>
      {chordsInAllKeys.length > 1 && (
        <ChordsInAllKeysContainer
          chordsInAllKeys={chordsInAllKeys}
          rootIsMajor={chordProgressionInfo.is_major}
          rootNumerals={chordProgressionInfo.numerals}
        />
      )}
    </motion.main>
  );
}
