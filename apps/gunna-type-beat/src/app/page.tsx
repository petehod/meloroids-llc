"use client";
import { Button } from "@repo/ui/Button";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { Form } from "@repo/ui/Form";
import { Input } from "@repo/ui/Input";
import { Label } from "@repo/ui/Label";
import { Select } from "@repo/ui/Select";
import { useCallback, useState } from "react";

export default function Page(): JSX.Element {
  const [song, setSong] = useState({
    songName: "",
    tempo: 0,
    key: "",
    value: ""
  });
  console.log("song", song);
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSong((prevSong) => ({
      ...prevSong,
      [name]: name === "tempo" ? parseInt(value, 10) || 0 : value
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(file);
  };

  const FORM_INPUTS = [
    {
      text: "Song name",
      formParams: "songName",
      type: "text"
    },
    {
      text: "Artist",
      formParams: "artist",
      type: "text"
    },
    {
      text: "Tempo",
      formParams: "tempo",
      type: "number"
    },
    {
      text: "YouTube URL",
      formParams: "youtubeURL",
      type: "url"
    }
  ];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <ContentContainer>
        <Form
          title="Song Tracker"
          onSubmit={handleSubmit}
          button={
            <Button
              backgroundColor="bg-white"
              textColor="text-dark"
              type="submit"
            >
              Submit
            </Button>
          }
        >
          {FORM_INPUTS.map((data, index) => (
            <div key={data.text}>
              <Label text={data.text} htmlFor={data.formParams} />
              <Input
                onChange={handleChange}
                id={data.formParams}
                name={data.formParams}
                type={data.type}
                required
              />
            </div>
          ))}
          <Label text="Album" />
          <Select
            marginBottom="mb-12"
            options={[
              { label: "ayya1", value: "dude" },
              { label: "hello", value: "value" }
            ]}
          />
        </Form>
      </ContentContainer>
    </main>
  );
}
