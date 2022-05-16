export const Mobile = () => {
  const res = [
    {
      title: 'Mobile Operating System',
      items: ['Android', 'Blackberry', 'iPhone', 'Windows Phone'],
    },
    {
      title: 'Mobile Manufacturer',
      items: ['Samsung', 'HTC', 'Micromax', 'Apple'],
    },
  ];
  return (
    <>
      {res.map((e) => (
        <>
          <h2 key={e} className="head2">{e.title}</h2>
          <ul>
            {e.items.map((item) => (
              <li className="list-child" key={item}>{item}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};
