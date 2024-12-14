import Link from "next/link";

type Bank = {
  code: string;
  name: string;
  kana: string;
  hira: string;
  normalize: {
    name: string;
    kana: string;
    roma: string;
    hira: string;
  };
  url: string;
  branches_url: string;
  created_at: string;
  updated_at: string;
};

type Props = {
  searchParams: Record<string, string>;
};

// searchParams を受け取ることで Dynamic Rendering が採用されるようにする
export default async function BanksPage({ searchParams }: Props) {
  const per = searchParams.per ? parseInt(searchParams.per) : 10;

  const response = await fetch(
    `https://bank.teraren.com/banks.json?per=${per}`,
  ).then((res) => {
    console.log("Fetch response status:", res.status);
    return res;
  });

  console.log(
    "Response Cache-Control Header:",
    response.headers.get("Cache-Control"),
  );

  const banks: Bank[] = await response.json();

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Banks</h1>
      <ul>
        {banks.map((bank) => (
          <li key={bank.code}>{bank.name}</li>
        ))}
      </ul>
    </div>
  );
}
