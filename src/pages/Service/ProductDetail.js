import React, { useState } from "react";
import styled from "styled-components";

const ProductDetail = ({ product }) => {
  const mockProduct = {
    no: "13486",
    brand: "MICHAA",
    code: "M1OCWOP011",
    season: "2024 S/S",
    type: "원피스",
    sizes: ["44", "55", "66", "77", "FREE"],
    color: "CREAM",
    retailPrice: "1,390,000",
    salePrice: "1,250,000",
    rentalPrice: "100,000",
    sizeGuide: {
      44: { A: 37.5, B: 85.1, C: 67.3, D: 55.2, E: 113.3 },
      55: { A: 37.5, B: 85.1, C: 67.3, D: 55.2, E: 113.3 },
      66: { A: 37.5, B: 85.1, C: 67.3, D: 55.2, E: 113.3 },
      77: { A: "-", B: "-", C: "-", D: "-", E: "-" },
      FREE: { A: "-", B: "-", C: "-", D: "-", E: "-" },
    },
    material: {
      outer: "모 90%, 나일론 10%",
      lining: "폴리에스터 100%",
      other: "폴리에스터 53%, 레이온 47%",
      padding: "모 90%, 나일론 10%",
    },
  };

  const data = product || mockProduct;
  const [checkedValues, setCheckedValues] = useState({});

  const handleCheckboxChange = (section, value) => {
    setCheckedValues((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <Container>
      <Title>제품관리</Title>
      <Header>
        <LeftAligned>
          <Button>목록이동</Button>
        </LeftAligned>
        <RightAligned>
          {["정보수정", "종료처리"].map((label) => (
            <Button key={label}>{label}</Button>
          ))}
        </RightAligned>
      </Header>

      <Section>
        <ProductInfo>
          <Subtitle>번호 {data.no}</Subtitle>
          <InfoRow>
            <List>
              <ImagePlaceholder />
              <InfoColumn>
                <InfoText>{data.brand}</InfoText>
                <InfoText>품번 {data.code}</InfoText>
                <InfoText>시즌 {data.season}</InfoText>
              </InfoColumn>
            </List>
            <BlankLine></BlankLine>
            <List>
              <ImagePlaceholder />
              <InfoColumn>
                <InfoText>종류 {data.type}</InfoText>
                <InfoText>사이즈 {data.sizes.join(", ")}</InfoText>
                <InfoText>색상 {data.color}</InfoText>
              </InfoColumn>
            </List>
            <BlankLine></BlankLine>
            <List>
              <ImagePlaceholder />
              <InfoColumn>
                <InfoText>리테일 {data.retailPrice}</InfoText>
                <InfoText>판매 {data.salePrice}</InfoText>
                <InfoText>대여 {data.rentalPrice}</InfoText>
              </InfoColumn>
            </List>
          </InfoRow>
        </ProductInfo>
      </Section>

      <SizeGuide>
        <Subtitle>사이즈 가이드</Subtitle>
        <Table>
          <thead>
            <tr>
              {[
                "사이즈",
                "A. 어깨넓이",
                "B. 가슴둘레",
                "C. 허리둘레",
                "D. 팔길이",
                "E. 총길이",
              ].map((header) => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data.sizeGuide).map(([size, values]) => (
              <tr key={size}>
                <TableData>{size}</TableData>
                {Object.values(values).map((value, index) => (
                  <TableData key={index}>{value}</TableData>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </SizeGuide>

      <InfoContainer>
        <Subtitle>제품 소재 및 속성</Subtitle>
        <MaterialInfo>
          <MaterialSection>
            <SectionTitle>비침 정도</SectionTitle>
            {["비침 있음", "약간 있음", "적당", "비침 없음"].map((item) => (
              <Label key={item}>
                <Checkbox
                  type="checkbox"
                  checked={checkedValues.transparency === item}
                  onChange={() => handleCheckboxChange("transparency", item)}
                />
                {item}
              </Label>
            ))}
          </MaterialSection>

          <MaterialSection>
            <SectionTitle>촉감</SectionTitle>
            {["뻣뻣함", "까슬함", "적당", "부드러움"].map((item) => (
              <Label key={item}>
                <Checkbox
                  type="checkbox"
                  checked={checkedValues.texture === item}
                  onChange={() => handleCheckboxChange("texture", item)}
                />
                {item}
              </Label>
            ))}
          </MaterialSection>

          <MaterialSection>
            <SectionTitle>안감</SectionTitle>
            {["정체 안감", "부분 안감", "기모 안감", "안감 없음"].map(
              (item) => (
                <Label key={item}>
                  <Checkbox
                    type="checkbox"
                    checked={checkedValues.lining === item}
                    onChange={() => handleCheckboxChange("lining", item)}
                  />
                  {item}
                </Label>
              )
            )}
          </MaterialSection>

          <MaterialSection>
            <SectionTitle>허리 밴딩</SectionTitle>
            {["허리 밴딩", "없음", "약간 있음", "좋음"].map((item) => (
              <Label key={item}>
                <Checkbox
                  type="checkbox"
                  checked={checkedValues.waistband === item}
                  onChange={() => handleCheckboxChange("waistband", item)}
                />
                {item}
              </Label>
            ))}
          </MaterialSection>
        </MaterialInfo>

        <MaterialDetails>
          <DetailsTitle>[제품원단 정보]</DetailsTitle>
          {Object.entries(data.material).map(([key, value]) => (
            <DetailItem key={key}>
              {key === "outer"
                ? "겉감"
                : key === "lining"
                  ? "안감"
                  : key === "other"
                    ? "배색"
                    : "충전재"}
              : {value}
            </DetailItem>
          ))}
        </MaterialDetails>
      </InfoContainer>
    </Container>
  );
};

export default ProductDetail;

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 18px;
  margin-left: 20px;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LeftAligned = styled.div`
  display: flex;
`;

const RightAligned = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  font-size: 14px;
  border-radius: 8px;

  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;

  color: #000000;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const ProductInfo = styled.div``;

const InfoRow = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  /* justify-content: space-evenly; */
  justify-content: flex-start;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InfoText = styled.span`
  font-size: 14px;
`;

const ImagePlaceholder = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 20px;
`;

const SizeGuide = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  font-size: 14px;
`;

const TableData = styled.td`
  font-size: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const MaterialInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

const MaterialSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const MaterialDetails = styled.ul`
  margin-top: 10px;
  width: 300px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DetailsTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DetailItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

const List = styled.li`
  display: flex;
  width: 400px;
`;

const BlankLine = styled.li`
  display: flex;
  border: 1px solid #ddd;
`;
