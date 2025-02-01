interface CardDetailProps {
  image: string;
  name: string;
  episode_id?: number;
}

export function CardDetail(props: CardDetailProps) {
  const { image, name, episode_id } = props;

  return (
    <div className="flex flex-col gap-5 border rounded-md shadow-lg bg-slate-900 border-gray-400">
      <img width={200} height={200} src={image} alt="" />
      <h2 className="text-white">{name}</h2>
      {episode_id && <h2 className="text-white">Episode {episode_id}</h2>}
    </div>
  );
}
