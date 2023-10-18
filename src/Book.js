// rafc
const Book = (props) => {
  // ! Set what properties we can access so you don't need to do props.img props.title props.author
  const { img, title, author, number } = props;
  console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`# ${number + 1}`}</span>
      {/* {children} */}
    </article>
  );
};

export default Book;
