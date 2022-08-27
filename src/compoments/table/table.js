import React from 'react';
import './Table.css';
function Table(props) {
  return (
    <table className={props.className}>
      <colgroup>
        {props.ColWidth
          ? props.ColWidth.map((width, i) => {
              return <col key={i} style={{ width: width }} />;
            })
          : ''}
      </colgroup>
      <thead>
        <tr>
          {props.tableHeader
            ? props.tableHeader.map((title, i) => {
                return (
                  <th className={'col' + i} key={i}>
                    {title}
                  </th>
                );
              })
            : ''}
        </tr>
      </thead>
      <tbody>{props.tableBody}</tbody>
    </table>
  );
}

export default Table;
