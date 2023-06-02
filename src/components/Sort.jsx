const Sort = ({ setSort, setAscDesc }) => {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleOrderChange = (e) => {
    setAscDesc(e.target.value);
  };

  return (
    <section>
      <select onChange={handleSortChange}>
        <option>Sort by</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
        <option value="topic">Topic</option>
      </select>
      <select onChange={handleOrderChange}>
        <option>Order by</option>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>
  );
};

export default Sort;
