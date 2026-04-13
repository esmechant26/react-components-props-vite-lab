function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} - {minutes} minutes
      </small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
