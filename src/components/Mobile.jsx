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
  return <>
    {
      res.map((e)=> (
        <>
        <h2>{e.title}</h2>
        <ul>
          {
            e.items.map((item)=> 
            <li>{item}</li>)
          }
        </ul>
        </>        
      ))
    }
  </>;
};
