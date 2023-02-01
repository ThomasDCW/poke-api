interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

export default function Card(props: Props) {
  const { name, id, image, type } = props;
  return (
    <div>
      <section className={`pokemon-list-container ${type}`}>
        <p className='pokemon-name'># {id}</p>
        <p className='pokemon-name'>{name}</p>
        <img src={image} alt='' />
        <p className='pokemon-name'>{type}</p>
      </section>
    </div>
  );
}
