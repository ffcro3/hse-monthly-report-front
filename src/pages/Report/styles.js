import styled from 'styled-components';

export const PageTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800|Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left: 30px;
`;

export const PageSubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  margin-left: 30px;
  margin-top: 10px;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: transparent;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  max-width: 80%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0.5px #888;
  padding: 30px;
  margin: 60px auto;
`;

export const ErrorTitle = styled.h1`
  font-size: 26px;
  color: #333;
  font-weight: bold;
  margin: 5px;
`;

export const ErrorSubTitle = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin: 5px;
`;

export const SelectInput = styled.select`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  width: 300px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
`;

export const Option = styled.option`
  color: #333;
  padding: 5px 15px;
  font-size: 15px;
`;

export const LabelInput = styled.label`
  margin-top: 15px;
  font-size: 16px;
  color: #333;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  margin: 30px;
`;

export const HeaderImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 150px;
  width: 7%;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 150px;
  width: 80%;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  margin-top: 20px;
`;

export const Divider = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5%;
  width: 90%;
  height: 1px;
  border-bottom: 1px solid #ccc;
  height: 1px;
`;

export const GoButton = styled.button`
  margin-top: 25px;
  height: 40px;
  width: 200px;
  background: #d60c3d;
  border: 0px;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  color: #fff;

  :hover {
    background: #d3112b;
  }
`;

export const BackButton = styled.button`
  margin-top: 25px;
  height: 40px;
  width: 200px;
  background: #d60c3d;
  border: 0px;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  color: #fff;
`;
