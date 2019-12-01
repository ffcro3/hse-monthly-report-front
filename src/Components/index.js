import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  outline: 0;
  height: 60px;
  background: #ffcc00;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 0 30px;
  justify-content: space-between;

  img {
    max-height: 60%;
    max-width: 100%;
  }

  input#search {
    border-radius: 4px;
    border: 1px solid #eee;
    padding: 6px 10px;
    font-size: 12px;
    color: #7c7c7c;
    width: 35%;
  }
`;

export const Page = styled.div`
  position: absolute;
  flex-direction: row;
  min-height: 100%;
  min-width: 100%;
  background: #fafafa;
`;

export const Container = styled.div`
  flex: 1;
  flex-direction: row;
  max-width: 80%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 8px 1px #ccc;
  padding: 30px;
  margin: 40px auto;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0;
  border-collapse: collapse;

  tr {
    border-top: none;

    & + tr {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }

  td {
    padding: 10px;
  }
`;

export const TableData = styled.td`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const TableHeader = styled.td`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  button {
    outline: 0;
    border: 0;
    background: #7159c1;
    padding: 7px 7px;
    text-align: center;
    border-radius: 4px;
    color: #fff;

    &:hover {
      background: #483780;
    }
  }

  span {
    font-size: 11px;
    color: #666;
  }
`;
