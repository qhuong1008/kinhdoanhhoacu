function Paginate(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.tongSP / props.ProductPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="grid-9">
        {/* <li key="1" className="page-index">
          1
        </li>
        <li key="1" className="page-index">
          2
        </li>
        <li key="1" className="page-index">
          3
        </li> */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => {
              props.paginate(number);
            }}
            className="page-index"
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paginate;
