"use client";
import { Form } from "@repo/ui/Form";
import { Label } from "@repo/ui/Label";
import { Input } from "@repo/ui/Input";
import { Button } from "@repo/ui/Button";
import { useCallback, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { motion } from "framer-motion";
import { ChordsInAllKeysContainer } from "../components/ChordsInAllKeysContainer";
import {
  ChordProgression,
  ProgressionInAllKeys
} from "@repo/common/chordProgression";
import { generateProgressionsInAllKeys } from "@repo/chord-progressions/generate-progressions";
export default function Home() {
  const [chordsInAllKeys, setChordsInAllKeys] = useState<
    ProgressionInAllKeys[]
  >([]);
  const [chordProgressionInfo, setChordProgressionInfo] =
    useState<ChordProgression>({
      id: "",
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

  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

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
    <motion.main className="flex flex-col" layout={true}>
      <motion.div className="flex">
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
                          field.sharedValue as keyof ChordProgression
                        ]
                      )
                }
                checked={
                  field.type === "checkbox"
                    ? chordProgressionInfo[
                        field.sharedValue as keyof ChordProgression
                      ] === true
                    : undefined
                }
              />
            </div>
          ))}
        </Form>
        {chordsInAllKeys.length > 1 && (
          <ChordsInAllKeysContainer
            ref={ref}
            chordsInAllKeys={chordsInAllKeys}
            rootIsMajor={chordProgressionInfo.is_major}
            rootNumerals={chordProgressionInfo.numerals}
          />
        )}
      </motion.div>
      {chordsInAllKeys.length > 1 && (
        <motion.button onClick={onButtonClick}>Download</motion.button>
      )}
    </motion.main>
  );
}
