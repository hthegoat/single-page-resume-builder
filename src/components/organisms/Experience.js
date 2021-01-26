import React from "react";
import { Steps } from "antd";
import styled from "styled-components";
import CompanyHeader from "../molecules/CompanyHeader";
import CompanyDescription from "../molecules/CompanyDescription";
import SectionHeader from "../molecules/SectionHeader";

const Step = styled(Steps.Step)`
  .ant-steps-item-title {
    display: block;
  }

  .ant-steps-item-container > .ant-steps-item-tail {
    top: 10px !important;
  }

  .ant-steps-item-icon {
    margin-top: 16px !important;
  }

  .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
    color: black;
  }
`;

export default function Experience({ title, Icon, companyList }) {
  return (
    <>
      <SectionHeader title={title} Icon={Icon} />
      <Steps progressDot current={companyList.length} direction="vertical">
        {companyList.map((company, index) => {
          const HeaderComponent = <CompanyHeader company={company} />;
          const DescriptionComponent = <CompanyDescription company={company} />;
          return <Step title={HeaderComponent} description={DescriptionComponent} key={index} />;
        })}
      </Steps>
    </>
  );
}
