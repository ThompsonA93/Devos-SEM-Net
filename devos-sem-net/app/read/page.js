import { promises as fs } from 'fs';


export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');

  const content = file
    .replaceAll('@id', 'link')

  const data = JSON.parse(content);

  console.log(data)

  // Utter f madness, thanks JSON
  return (
    <>
    {data.map(entry => (
      <div key={entry.id} className='ml-4 grid grid-cols-2 gap-2'>
        <a href={entry.link}>{entry.address}</a>
        <div>{entry.nationality}</div>
      </div>
    ))}
  </>
  );
  
}