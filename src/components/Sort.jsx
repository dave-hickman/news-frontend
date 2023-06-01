const Sort = ({ setSort, setAscDesc }) => {

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  const handleOrderChange = (e) => {
    setAscDesc(e.target.value)
  }

  return (
    <section>
      <label htmlFor="sort">Sort by:</label>
    <select onChange={handleSortChange}>
      <option value="created_at">Date</option>
      <option value="comment_count">Comment Count</option>
      <option value="votes">Votes</option>
    </select>
    <select onChange={handleOrderChange}>
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
    </select>
    </section>
  );
};

export default Sort;
